const knex = require("../db/db-config");
const {SHOP} = require("../constants/const");
module.exports = {
    addShopToDB:async(data)=>{
        return (await knex(SHOP.NAME).insert(data))[0];
    },
    getShopsDB:async()=>{
        return knex(SHOP.NAME).select();
    },
    getShopByIdDB:async(id)=>{
        return (await knex(SHOP.NAME).select().where(SHOP.ID, id))[0];
}
}