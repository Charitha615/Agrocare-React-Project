const {addQuestionDB, addAnswerDB, insertQuestionAnswerDB, rateAnswerDB, getAnswerRateByUserDB, insertRateAnswer,
    getAllQuestionsDB, getQuestionDB, getAnswersForQuestionDB
} = require("../repositories/messageRepository");
const knex = require("../db/db-config");
module.exports = {
    postQuestion: async (question, farmer_id) => {
       return addQuestionDB({question,farmer_id});
    },

    addAnswer:async(question, answer, first_name)=>{
        const transaction = await knex.transaction();
        const answerId = await addAnswerDB({answer, first_name}, transaction )
        await insertQuestionAnswerDB(question, answerId, transaction)
        await transaction.commit();
    },

    rateAnswer:async(aid,user_id)=> {
        const isRated = await getAnswerRateByUserDB(aid,user_id);
        if (isRated) {
            throw new Error("User has already rated this answer")
        }
        const transaction = await knex.transaction();
        await rateAnswerDB( aid, transaction)
        await insertRateAnswer(aid, user_id, transaction)
        await transaction.commit()
    },

    getAllQuestions:async ()=>{
        return getAllQuestionsDB();
    },

    getQuestion:async(id)=>{
        const question = await getQuestionDB(id);
        if (!question) {
            throw new Error("Question does not exist")
        }
        const answers = await getAnswersForQuestionDB(id);
        return {question, answers}
    }
}