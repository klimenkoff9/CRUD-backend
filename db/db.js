const Sequelize = require("sequelize");
require('dotenv').config(); // requries dotenv
// Initialize database call to your Postgres DB with sequelize
/* const db = new Sequelize(
	process.env.DATABASE_URL || "postgres://localhost:5432/crud" // instead of  crud add the name of your own db 
); */
// for process.env.DATABASE_PASS either out password here it make an .env file and place password there/

const db = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER , process.env.DATABASE_PASS, {
    host : "localhost",
    dialect: "postgres"
})

module.exports = db;
