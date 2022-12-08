const knex = require("knex")({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        database: process.env.DATABASE,
        password: process.env.PASSWORD
    },
    pool: {
        min: 0,
        max: 20,
    },
});

module.exports = knex;