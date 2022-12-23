const Joi = require("joi");
const {postQuestion, getQuestion,addAnswer,getAllQuestions, rateAnswer} = require("../services/messageService");
module.exports = {
    addQuestion:async(req,res)=>{
        const schema = Joi.object({
            question: Joi.string().required()
        })

        const validate = schema.validate(req.body, {abortEarly: false});
        if (validate.error) {
            res.status(400).send({message: validate.error.details});
            return;
        }

        const {question} = validate.value
        const user = req.user
        try{
           const result = await postQuestion(question, user.id);
           res.status(201).send({id:result})
        }catch(e) {
            res.status(e.code || 400).send(e.message)
        }
    },
    addAnswer:async(req,res)=>{
        const schema = Joi.object({
            answer: Joi.string().required()
        })

        const id = req.params.id;

        const validate = schema.validate(req.body, {abortEarly: false});
        if (validate.error) {
            res.status(400).send({message: validate.error.details});
            return;
        }

        const {answer} = validate.value
        const user = req.user
        try{
            const result = await addAnswer(id, answer, user.first_name);
            res.status(201).send()
        }catch(e) {
            console.log(e.code)
            console.log(e.message)
            res.status(e.code || 400).send(e.message)
        }
    },

    rateAnswer:async(req,res)=>{
        const aid = req.params.aid;

        try{
           await rateAnswer(aid,req.user.id);
           res.status(200).send();
        }catch (e) {
            res.status(e.code || 400).send(e.message)
        }
    },
    getAllQuestions:async(req,res)=>{
        try{
            const result = await getAllQuestions();
           res.status(200).send(result)
        }catch (e) {
            res.status(e.code || 400).send(e.message)
        }
    },
    getQuestion:async(req,res)=>{
        const id = req.params.id;

        try{
           const result = await getQuestion(id);
           res.status(200).send(result)
        }catch(e){
            res.status(e.code || 400).send(e.message)

        }
    }
}