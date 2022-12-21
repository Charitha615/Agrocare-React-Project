const {genSaltSync, hashSync, compareSync} = require("bcrypt");
const {saveUserToDb, getDbUserById, updateUserById, checkIfDeleted, deleteDbUserById, getDbUserByEmail} = require("../../repositories/userRepositories");
const knex = require("knex");
const { sign } = require("jsonwebtoken");
const {getFile} = require("../profilePhotoService");
const {STORAGE} = require("../../constants/const");

module.exports = {

    registerUser: async (body) => {
        const user = await getDbUserByEmail(body.email);
        if (user) {
            throw new Error("User already exists.")
        }
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);

        return saveUserToDb(body)
    },

    loginUser: async (loginData) => {

        let userDetailsinDatabase;
        userDetailsinDatabase = await getDbUserByEmail(loginData.email);
        if (userDetailsinDatabase) {
            const result = compareSync(
                loginData.password,
                userDetailsinDatabase.password
            );

            if (result) {
                userDetailsinDatabase.password = undefined;
                const jsontoken = sign({result: userDetailsinDatabase}, "qwe1234", {
                    expiresIn: "1day",
                });
                return jsontoken;

            } else {
                throw new Error("Password is incorrect")
            }

        } else {
            throw new Error("No user exist")
        }
    },

    updateUser: async (id, body) => {
        const userDetailsinDatabase = await getDbUserById(id);
        if (!userDetailsinDatabase) {
            throw new Error(id + " User ID does not exist")
        }
        await updateUserById(id, body)
    },

    deleteUser: async (id) =>{
        const isExisted = await getDbUserById(id);
        if(!isExisted)
        {
            throw new Error("User does not exist");
        }
        await deleteDbUserById(id);
    },

    getUser:async(email) => {
        const user = await getDbUserByEmail(email);
        delete user.password;
        const profilePicture = await getFile(STORAGE.LOCATIONS.USERS, user.id);
        if (profilePicture) {
            user.profilePicture = profilePicture;
        }
        return user;
    }

}

