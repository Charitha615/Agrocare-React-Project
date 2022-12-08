const {getShops, getShop, addShop} = require("../services/shopService");
const Joi = require("joi");
module.exports = {
    getAllShops:async(req,res)=>{
        try{
            const shops = await getShops();
            res.status(200).send(shops);
        }catch (e){
            res.status(400).send(e.message)
        }
    },
    getShop:async(req,res)=>{
        try{
           const id = req.query.id;
            if (!id){
                res.status(400).send("Shop id is required")
                return;
            }
           const shop = await getShop(id);
           res.status(200).send(shop);
        }catch(e){
            res.status(400).send(e.message)
        }
    },
    addShop:async(req,res)=>{
        const schema = Joi.object({
            name:Joi.string().required(),
            address:Joi.string().required(),
            phone:Joi.string().required(),
        })

        const validate = schema.validate(req.body, {abortEarly: false});
        if (validate.error) {
            res.status(400).send({message: validate.error.details});
            return;
        }

        const owner = req.user;

        try{
            const result = await addShop(validate.value, owner.id);
            res.status(201).send({id:result})
        }catch(e){
            res.status(400).send(e.message)
        }
    }

}