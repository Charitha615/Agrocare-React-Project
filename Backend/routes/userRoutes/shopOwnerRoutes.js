const {getAllMyProducts} = require("../../controllers/userControllers/farmerController");
const router = require("express").Router();

router.get("/product", getAllMyProducts)

module.exports = router;