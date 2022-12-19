const Joi = require("joi");
const {updateProduct, deleteProduct, addProduct, getAllProducts, getProduct} = require("../services/productService");
const {ROLES} = require("../constants/const");
module.exports = {
    updateProduct: async (req, res) => {
        const schema = Joi.object({
            quantity: Joi.number(),
            available_from: Joi.date(),
            available_until: Joi.date(),
            unit_price: Joi.number(),
        });

        const validate = schema.validate(req.body, {abortEarly: false});
        if (validate.error) {
            res.status(400).send({message: validate.error.details});
            return;
        }

        const productId = req.params.id
        const user = req.user;

        try {
            const result = await updateProduct(productId, validate.value, user);
            res.status(200).send(result)
        } catch (error) {
            res.status(400).send(error.message)
        }
    },

    deleteProduct: async (req, res) => {
        const {id} = req.params;

        const userId = req.user.id;
        try {
            await deleteProduct(id, userId)
            res.status(200).send();
        } catch (error) {
            res.status(400).send(error.message)
        }
    },
    addProduct: async (req, res) => {
        const schema = Joi.object({
            quantity: Joi.number().required(),
            available_from: Joi.date(),
            available_until: Joi.date(),
            product_name: Joi.string().required(),
            unit_price: Joi.number().required(),
        })


        const validate = schema.validate(req.body, {abortEarly: false});
        if (validate.error) {
            res.status(400).send({message: validate.error.details});
            return;
        }
        const user = req.user
        const body = validate.value;
        try {
            const result = await addProduct(body, user);
            res.status(201).send({productId: result[0]});
        } catch (error) {
            res.status(400).send(error.message)
        }
    },
    getAllProducts: async (req, res) => {
        const type = req.query.type;
        if (!type) {
            res.status(400).send("Type must include in the query")
        }
        try {
            if (type === ROLES.FARMER || type === ROLES.OWNER) {
                const products = await getAllProducts(type);
                res.status(200).send(products)
                return
            }
            res.status(400).send("Incorrect type. Type should be farmer or owner")
        } catch (e) {
            res.status(400).send(e.message)
        }
    },

    getProduct: async (req, res) => {
        try {
            const id = req.query.id;
            const result = await getProduct(id);
            if (!result) {
                res.status(404).send("No item found with the id - "+id)
                return;
            }
            res.status(200).send(result);
        } catch (e) {
            res.status(e.code || 400).send(e.message)
        }
    }

}