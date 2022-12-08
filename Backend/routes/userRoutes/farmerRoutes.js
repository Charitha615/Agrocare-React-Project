const { getAllMyProducts  } = require("../../controllers/userControllers/farmerController");
const {isCustomer, isFarmer} = require("../../middleware/typeCheck");
const {buyProduct} = require("../../controllers/userControllers/custoemrController");
const router = require("express").Router();

router.get("/product", getAllMyProducts)
router.post("/products", isFarmer, buyProduct)

module.exports = router;