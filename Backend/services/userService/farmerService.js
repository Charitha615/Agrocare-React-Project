const {ROLES} = require("../../constants/const");
const {getProductsByUserId} = require("../../repositories/farmerRepository");
module.exports = {
    getAllMyProducts:async (user)=>{
        return getProductsByUserId(user.id);
    },

}