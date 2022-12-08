const express = require('express');
const {test} = require("../controllers/test");
const router = express.Router();

router.get("/test",test)

router.use('/user', require('./userRoutes/userRoutes'));
router.use('/message', require('./otherRoutes/messageRouter'))
router.use('/product', require('./otherRoutes/productRouter'))
router.use('/shop', require('./otherRoutes/shopRouter'))



module.exports = router;
