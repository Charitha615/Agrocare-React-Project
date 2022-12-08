const {addProduct, updateProduct, getProduct,getAllProducts, deleteProduct} = require("../../controllers/productController");
const {checkToken} = require("../../middleware/checkAuth");
const {farmerOowner} = require("../../middleware/typeCheck");
const router = require("express").Router();

router.post("/", checkToken, farmerOowner, addProduct)
router.patch("/:id", checkToken, farmerOowner, updateProduct)
router.delete("/:id", checkToken, farmerOowner, deleteProduct)
router.get("/allProducts", checkToken, getAllProducts )
router.get("/", checkToken, getProduct)
module.exports = router;