const { buyProduct} = require("../../services/productService");
const Joi = require("joi");
module.exports = {
    buyProduct:async(req,res)=>{
        try {
           const schema = Joi.array().items({
               product_id:Joi.string().required(),
               quantity: Joi.number().required(),
           });
            const validate = schema.validate(req.body, {abortEarly: false});
            if (validate.error) {
                res.status(400).send({message: validate.error.details});
                return;
            }

            const userId = req.user.id;


            const result = await buyProduct(userId, validate.value);
            res.status(201).send(result);
        }catch(error){
            res.status(400).send(error.message)
        }
    }
}