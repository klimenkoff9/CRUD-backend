const Sequelize = require("sequelize");

// Initialize database call to your Postgres DB with sequelize
const db = new Sequelize(
	process.env.DATABASE_URL || "yifen://localhost:5432/crud" // instead of yifen and crud add the name of your own db as well as user
);

module.exports = db;
