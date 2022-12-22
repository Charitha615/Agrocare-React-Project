const Joi = require("joi");
const {registerUser, loginUser, updateUser, deleteUser, getUser} = require("../../services/userService/userService");
const knex = require("knex");
const {getDbUserById, checkIfDeleted, deleteDbUserById} = require("../../repositories/userRepositories");
const {USERS_TABLE, STORAGE} = require("../../constants/const");
const {addFile, deleteFile} = require("../../services/profilePhotoService");


module.exports = {
    registerUser: async (req, res) => {
        const schema = Joi.object({  
            first_name: Joi.string().required(),
            last_name: Joi.string().required(),
            user_type: Joi.string().required(),
            nic: Joi.string().required().min(10).max(11),
            password: Joi.string().required().min(6),
            email: Joi.string().email().required(),
            mobile_no: Joi.string().required(),
            nearest_city: Joi.string().allow(""),
            district: Joi.string().allow(""),
            province:Joi.string().allow("")
        });


        const validate = schema.validate(req.body, {abortEarly: false});
        if (validate.error) {
            console.log("validate.error",validate.error);
            res.status(400).send({message: validate.error.details});
            return;
        }
        const body = validate.value;
        try {
            const result = await registerUser(body);
            res.status(201).send({success: 1, data: {userId: result}});
        } catch (error) {
            if (error.code === "ER_DUP_ENTRY") {
                res.status(400).send({message: "Duplicate entry for user registration"})
            } else {
                res.status(400).send({message: error.message})
            }

        }
    },

    loginUser: async (req, res) => {
        const schema = Joi.object({
            email: Joi.string().required(),
            password: Joi.string().required(),
        });
        const validate = schema.validate(req.body, {abortEarly: false});
        if (validate.error) {
            res.status(400).send({message: validate.error.details});
            return;
        }
        const loginData = validate.value;
        try {
            const token = await loginUser(loginData);
            if (token != null) {
                res.status(201).send({success: 1, data: {token: token}});
            } else {
                res.status(400).send({success: 0});
            }

        } catch (error) {
            res.status(400).send({message: error.message})
        }

    },

    updateUser: async (req, res) => {
        const schema = Joi.object({
            first_name: Joi.string().allow(""),
            last_name: Joi.string().allow(""),
            mobile_no: Joi.string().allow(""),
            nearest_city: Joi.string().allow(""),
            district: Joi.string().allow(""),
            province:Joi.string().allow("")
        });

        const validate = schema.validate(req.body, {abortEarly: false});
console.log(validate)
        if (validate.error) {
            res.status(400).send({message: validate.error.details});
            return;
        }

        const pathSchema = Joi.object({  // path validate
            id: Joi.string().required()
        });


        const pathValidate = pathSchema.validate(req.params, {abortEarly: false})
        if (pathValidate.error) {
            res.status(400).send({message: pathValidate.error.details})
            return;
        }
        const {id} = pathValidate.value

        const body = validate.value;
        try {
            await updateUser(id,body);
            res.status(201).send({success: 1})

        }
        catch (error){
            res.status(400).send({message: error.message});
        }

    },

    deleteUser: async (req, res) => {
        const pathSchema = Joi.object({  // path validate
            id: Joi.string().required()
        });


        const pathValidate = pathSchema.validate(req.params, {abortEarly: false})
        if (pathValidate.error) {
            res.status(400).send({message: pathValidate.error.details})
            return;
        }
        const {id} = pathValidate.value

        try{
            await deleteUser(id);
            res.status(201).send({success:"1"});
            }
        catch (error){
            res.status(400).send({message: error.message});
        }

    },

    addUserProfilePicture:async (req,res)=>{

        if (!req.file){
            res.status(404).send({message: "File not found"})
            return;
        }

        const {id} = req.user;

        try{
            await addFile(STORAGE.LOCATIONS.USERS,id,req.file);
            res.status(201).send({success: 1})
        }catch(error){
            if (error.message) res.status(400).send(error.message);
            else if (error) res.status(400).send(error);
        }
    },

    deleteUserProfilePicture:async (req,res)=>{

        const pathSchema = Joi.object({
            id: Joi.string().required()
        });
        const pathValidate = pathSchema.validate(req.params, {abortEarly: false})
        if (pathValidate.error) {
            res.status(400).send({message: pathValidate.error.details})
            return;
        }

        const {id} = pathValidate.value;

        try{
            await deleteFile(STORAGE.LOCATIONS.USERS,id);
            res.status(200).send({success: 1})
        }catch(error){
            if (error.message) res.status(400).send(error.message);
            else if (error) res.status(400).send(error);
        }
    },
    getCurrentUser:async(req,res)=>{
        console.log(req.user)
        try{
           const currentUser = await getUser(req.user.email);
           res.status(200).send(currentUser);
        }catch(error) {
            res.status(error.code).send(error.message);
        }
    }
}