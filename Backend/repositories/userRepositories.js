const knex = require("../db/db-config");
const {USERS_TABLE, COMMON} = require("../constants/const");

module.exports = {
    saveUserToDb: async (userDetails) => {
       return  knex("users").insert(userDetails)
    },

    getDbUserByEmail:async(email)=>{
        return (await knex(USERS_TABLE.NAME).select(COMMON.SELECT_ALL).where(USERS_TABLE.EMAIL, email).where(COMMON.IS_DELETED, false))[0];
    },
    getDbUserById:async(id)=>{
        const user = (await knex(USERS_TABLE.NAME).select(COMMON.SELECT_ALL).where(USERS_TABLE.USER_ID, id).where(COMMON.IS_DELETED, false))[0];
        if (user) {
            delete user.password
        }
        return user
    },

    updateUserById: async (id, body) =>{
        await knex (USERS_TABLE.NAME).update(body).where(USERS_TABLE.USER_ID, id);
    },

    /*checkIfDeleted:async (nic,body) =>{
        await knex (USERS_TABLE.NAME).select(body).where(USERS_TABLE.USER_ID, nic).where(COMMON.IS_DELETED, false)[0];
    },*/

    deleteDbUserById:async(id)=> {
        return (await knex(USERS_TABLE.NAME).update({is_deleted:true}).where(USERS_TABLE.USER_ID, id));
    }

}