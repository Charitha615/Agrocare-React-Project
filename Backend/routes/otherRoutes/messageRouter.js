const {checkToken} = require("../../middleware/checkAuth");
const {isFarmer, isExpert} = require("../../middleware/typeCheck");
const {addQuestion,getAllQuestions,getQuestion, addAnswer, rateAnswer} = require("../../controllers/messageController");
const router = require("express").Router();


router.post("/question", checkToken, isFarmer, addQuestion);
router.post("/question/:id", checkToken, isExpert, addAnswer)
router.post("/answer/:aid", checkToken, isFarmer, rateAnswer);
router.get("/allQuestions", checkToken, getAllQuestions)
router.get("/question/:id", checkToken, getQuestion)

module.exports = router;