const Sequelize = require("sequelize");
require('dotenv').config();
// Initialize database call to your Postgres DB with sequelize
/* const db = new Sequelize(
	process.env.DATABASE_URL || "postgres://localhost:5432/crud" // instead of  crud add the name of your own db 
); */

const db = new Sequelize("crud", "yifen", process.env.DATABASE_PASS, {
    host : "localhost",
    dialect: "postgres"
})

module.exports = db;
