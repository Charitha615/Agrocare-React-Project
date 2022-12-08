const knex = require("../db/db-config");
const { QUESTION, ANSWER, QUESTION_ANSWER, ANSWER_RATE, COMMON} = require("../constants/const");
module.exports = {
    addQuestionDB:async(data)=>{
        return (await knex(QUESTION.NAME).insert(data))[0]

    },

    addAnswerDB:async(data, transcation)=>{
        return (await knex(ANSWER.NAME).transacting(transcation).insert(data))[0]
    },
    insertQuestionAnswerDB:async (question_id, answer_id, transaction)=>{
        await knex(QUESTION_ANSWER.NAME).transacting(transaction).insert({question_id, answer_id})
    },
    rateAnswerDB:async(aid, transcation)=>{
        await knex(ANSWER.NAME).transacting(transcation).increment(ANSWER.COUNT, 1).where(ANSWER.ANSWER_ID, aid)
    },
    getAnswerRateByUserDB:async(answer_id,user_id)=>{
        return (await knex(ANSWER_RATE.NAME).select().where(ANSWER_RATE.ANSWER_ID, answer_id)
                .andWhere(ANSWER_RATE.USER_ID, user_id)
        )[0]
    },
    insertRateAnswer:async(answer_id, user_id, transcation) =>{
        await knex(ANSWER_RATE.NAME).transacting(transcation).insert({answer_id, user_id})
    },
    getAllQuestionsDB:async()=>{
        return knex(QUESTION.NAME).select().where(COMMON.IS_DELETED, false);
    },
    getQuestionDB:async(id)=>{
        return (await knex(QUESTION.NAME).select().where(QUESTION.QUESTION_ID, id).andWhere(COMMON.IS_DELETED,false))[0]
    },
    getAnswersForQuestionDB:async(id)=>{
        const questionAnswers =  await knex(QUESTION_ANSWER.NAME).select().where(QUESTION_ANSWER.QUESTION_ID,id).andWhere(COMMON.IS_DELETED,false);
        return Promise.all(questionAnswers.map(async questionAnswer=>{
            const answerData = (await knex(QUESTION_ANSWER.NAME).select()
                .where(QUESTION_ANSWER.QUESTION_ID, questionAnswer.question_id).andWhere(COMMON.IS_DELETED, false))[0];
            if (answerData){
                const answer = await knex(ANSWER.NAME).select()
                    .where(ANSWER.ANSWER_ID, answerData.answer_id).andWhere(COMMON.IS_DELETED, false)
                return answer[0]
            }

        }))
    }
}