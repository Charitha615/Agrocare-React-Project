const {USERS_TABLE, STORAGE} = require("../../constants/const");
const Joi = require("joi");
const {addProduct, getAllMyProducts, updateProduct, deleteProduct} = require("../../services/userService/farmerService");


module.exports = {
    getAllMyProducts:async(req,res)=>{
        try{
           const user = req.user;
           const products = await getAllMyProducts(user);
           res.status(200).send(products)
        }catch(error){
            res.status(error.code).send(error.message)
        }
    },    
}