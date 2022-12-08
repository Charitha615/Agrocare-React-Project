const { buyProduct} = require("../../controllers/userControllers/custoemrController");
const {isCustomer} = require("../../middleware/typeCheck");
const router = require("express").Router();


router.post("/products", isCustomer, buyProduct)


module.exports = router;