const {addShopToDB, getShopsDB, getShopByIdDB} = require("../repositories/shopRepository");
const {getDbUserById} = require("../repositories/userRepositories");
const {getAllProductsBySellerId} = require("../repositories/productRepository");
module.exports = {
    addShop:async(data, owner)=>{
        data.shop_owner = owner
        return addShopToDB(data);
    },
    getShops:async()=>{
        const shops = await getShopsDB();
        return await Promise.all(
            shops.map(async (shop) => {
                const seller_id = shop.shop_owner;
                const seller = await getDbUserById(seller_id);
                if (!seller) {
                    return;
                }
                shop.shop_owner = seller;
                return shop;

            })
        );
    },
    getShop:async(id)=>{
        const shop = await getShopByIdDB(id);
        if (!shop){
            throw new Error("Shop does not exist")
        }
        const seller_id = shop.shop_owner;
        const seller = await getDbUserById(seller_id);
        if (!seller) {
            throw new Error("Shop does not exist")
        }
        shop.shop_owner = seller;
        shop.products = await getAllProductsBySellerId(seller_id);
        return shop;
    }
}