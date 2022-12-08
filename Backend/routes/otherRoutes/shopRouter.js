const {getAllShops,addShop,  getShop} = require("../../controllers/shopController");
const {checkToken} = require("../../middleware/checkAuth");
const { isOwner} = require("../../middleware/typeCheck");
const {addProduct} = require("../../controllers/productController");
const router = require("express").Router();

router.post("/", checkToken, isOwner, addShop);
router.get("/allShops", checkToken,  getAllShops);
router.get("/", checkToken, getShop);
router.post("/shop/product", addProduct); //test



module.exports = router;