const {getAllProductsByType, getProductById, insertInvoiceDB} = require("../repositories/productRepository");
const {PRODUCT_DETAILS, COMMON, PRODUCT_BILL} = require("../constants/const");
const knex = require("../db/db-config");
const {updateProductDB, addProductToDb, getProductOfUserDB, deleteProductByIdDB} = require("../repositories/productRepository");
const {getDbUserById} = require("../repositories/userRepositories");


module.exports = {
   getAllProducts:async(type)=>{
       return getAllProductsByType(type);
   },
    buyProduct:async (userId, products)=>{

       const results = await Promise.all(products.map(async productData=>{
           const productId = productData.product_id
           const quantity = productData.quantity;
           const product = await getProductById(productData.product_id);
           if (!product) {
               return;
           }

           if (product[PRODUCT_DETAILS.QUANTITY] < productData.quantity) {
               return;
           }
           const updatedProduct = {...product, quantity:product[PRODUCT_DETAILS.QUANTITY] - quantity}
           const invoice = {
               [`${PRODUCT_BILL.PRODUCT_ID}`]: productId,
               [`${PRODUCT_BILL.QUANTITY}`] : quantity,
               [`${PRODUCT_BILL.USER_ID}`] : userId,
           }
           const transaction = await knex.transaction();
           const productResult = await updateProductDB(productId, updatedProduct, transaction)
           const invoiceResult = await insertInvoiceDB(invoice, transaction);
           invoice.cost = quantity * product.unit_price;
           invoice.id = invoiceResult[0];
           await transaction.commit();
           delete invoice.product_id
           invoice.product = product
           return invoice;
       }))

        const filtered = results.filter(function (el) {
            return el != null;
        });
        return filtered;


    },
    addProduct:async(data, user)=>{
        const isUserExist = await getDbUserById(user.id);
        if (isUserExist){
            data.seller_id = user.id;
            data.type = user.user_type;
            return addProductToDb(data)
        }else{
            throw new Error("User does not exist")
        }

    },
    updateProduct:async (productId, data, user)=>{
        const isProductExist = await getProductOfUserDB(productId, user.id);
        if (!isProductExist) {
            throw new Error(`Product with id ${productId} for the userId ${user.id} does not exist`)
        }
        await updateProductDB(productId, data);
    },

    deleteProduct:async (productId, userId)=> {
        const isUsersProduct = await getProductOfUserDB(productId, userId);
        if (!isUsersProduct) {
            throw new Error(`User does not have a product with the ID - ${productId}`)
        }

        await deleteProductByIdDB(productId);

    },

    getProduct:async (id)=> {
       const product = await getProductById(id);
       return product
    }
}