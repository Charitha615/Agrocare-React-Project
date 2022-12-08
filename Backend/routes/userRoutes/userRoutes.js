const {registerUser,loginUser,updateUser, deleteUser, addUserProfilePicture, deleteProfilePicture,
    deleteUserProfilePicture, getCurrentUser
} = require("../../controllers/userControllers/userController");
const {checkToken} = require("../../middleware/checkAuth");
const {isFarmer, isCustomer, isOwner} = require("../../middleware/typeCheck");
const router = require("express").Router();
const multer  = require('multer')().single("image")


router.post("/register", registerUser);
router.post("/login",loginUser);
router.use("/farmer",checkToken, isFarmer, require("./farmerRoutes"))
router.use("/customer",checkToken, isCustomer, require("./customerRoutes"))
router.use("/owner", checkToken, isOwner, require("./shopOwnerRoutes"))
router.get("/currentUser", checkToken, getCurrentUser)
router.post("/:id/addProfilePicture",checkToken, multer,addUserProfilePicture);
router.patch("/:id", checkToken,updateUser);
router.delete("/:id", checkToken ,deleteUser);
router.delete("/:id/profilePicture",checkToken, deleteUserProfilePicture)



module.exports = router;