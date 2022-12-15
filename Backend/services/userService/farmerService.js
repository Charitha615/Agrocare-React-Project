const {ROLES} = require("../../constants/const");

const {getProductsByUserId} = require("../../repositories/productRepository");
module.exports = {
    getAllMyProducts:async (user)=>{
        return getProductsByUserId(user.id);
    },

}