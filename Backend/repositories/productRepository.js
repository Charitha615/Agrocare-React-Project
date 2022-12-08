const knex = require("../db/db-config");
const {PRODUCT_DETAILS, COMMON, PRODUCT_BILL} = require("../constants/const");

module.exports = {
    getAllProductsByType:async(type)=>{
        return knex(PRODUCT_DETAILS.NAME).select().where(COMMON.IS_DELETED, false).andWhere(PRODUCT_DETAILS.TYPE, type)
    },
    getProductById:async(productId)=>{
        return (await knex(PRODUCT_DETAILS.NAME).select().where(COMMON.IS_DELETED, false)
            .andWhere(PRODUCT_DETAILS.PRODUCT_ID, productId))[0]
    },
    insertInvoiceDB:async(invoice, transaction)=>{
       return knex(PRODUCT_BILL.NAME).insert(invoice).transacting(transaction)
    },
    getAllProductsBySellerId:async(sellerId)=>{
        return knex(PRODUCT_DETAILS.NAME).select().where(COMMON.IS_DELETED, false).andWhere(PRODUCT_DETAILS.SELLER_ID, sellerId)
    },
    addProductToDb:async(data)=>{
        return knex(PRODUCT_DETAILS.NAME).insert(data)
    },
    getProductsByUserId:async(userId)=>{
        return knex(PRODUCT_DETAILS.NAME).select().where(PRODUCT_DETAILS.SELLER_ID, userId).andWhere(COMMON.IS_DELETED, false)
    },
    getProductOfUserDB:async(productId, farmerId)=>{
        return (await knex(PRODUCT_DETAILS.NAME).select().where(PRODUCT_DETAILS.SELLER_ID, farmerId)
            .andWhere(PRODUCT_DETAILS.PRODUCT_ID, productId).andWhere(COMMON.IS_DELETED, false))[0];
    },
    updateProductDB:async(productId, data, transaction)=>{
        if (!transaction) {
            await knex(PRODUCT_DETAILS.NAME).update(data).where(PRODUCT_DETAILS.PRODUCT_ID, productId);
            return;
        }
        await knex(PRODUCT_DETAILS.NAME).transacting(transaction).update(data).where(PRODUCT_DETAILS.PRODUCT_ID, productId);
    },
    deleteProductByIdDB:async(productId)=>{
        await knex(PRODUCT_DETAILS.NAME).update(COMMON.IS_DELETED,true).where(PRODUCT_DETAILS.PRODUCT_ID, productId)
    }
}