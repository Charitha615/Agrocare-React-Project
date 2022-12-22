module.exports = {
    USERS_TABLE: {
        NAME: "users",
        USER_ID: "id",
        NIC: "nic",
        FIRST_NAME: "first_name",
        LAST_NAME: "last_name",
        EMAIL: "email",
        PHONE: "mobile_no",
        ROLE: "user_type",
        IS_DELETED: "is_deleted",
        NEAREST_CITY: "nearest_city",
        DISTRICT: "district",
        PROVINCE: "province"
    },
    PRODUCT_DETAILS: {
        SELLER_ID: "seller_id",
        PRODUCT_ID: "product_id",
        QUANTITY: "quantity",
        AVAILABLE_FROM: "available_from",
        AVAILABLE_UNTIL: "available_until",
        PRODUCT_NAME: "product_name",
        UNIT_PRICE: "unit_price",
        TYPE: "type",
        NAME: "product_details"
    },
    PRODUCT_BILL: {
        PRODUCT_ID: "product_id",
        USER_ID: "user_id",
        QUANTITY: "quantity",
        INVOICE_ID: "invoice_id",
        NAME: "product_bill"
    },
    QUESTION:{
        NAME: "questions",
        QUESTION: "question",
        QUESTION_ID: "question_id",
        FARMER_ID: "farmer_id"
    },
    QUESTION_ANSWER:{
        NAME: "question_answer",
        QUESTION_ID: "question_id",
        ANSWER_ID: "answer_id"
    },
    ANSWER:{
        NAME: "answers",
        ANSWER_ID: "answer_id",
        ANSWER: "answer",
        FIRST_NAME: "first_name",
        COUNT: "count"
    },
    ANSWER_RATE: {
        NAME: "answer_rate",
        ANSWER_ID: "answer_id",
        USER_ID: "user_id"
    }
    ,
    SHOP: {
        ID: "id",
        NAME: "shops",
        name: "name",
        ADDRESS: "address",
        PHONE: "phone",
        SHOP_OWNER: "shop_owner"
    },

    COMMON: {
        IS_DELETED: "is_deleted",
        SELECT_ALL: "*",
        DESC: "desc",
        ASC: "asc"
    },

    STORAGE: {
        BUCKET_NAME: "agrocare-c91cc.appspot.com",
        LOCATIONS: {
            USERS: "agro-care/images/users/"
        }
    },
    ROLES: {
        FARMER: "Farmer",
        CUSTOMER: "Customer",
        OWNER: "Owner",
        EXPERT: "Expert"
    }
}