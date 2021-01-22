/*
[ ] Write a `campuses` model with the following information:
  - [ ] name - not empty or null
  - [ ] imageUrl - with a default value
  - [ ] address - not empty or null
  - [ ] description - extremely large text
*/
const Sequelize = require("sequelize");

const db = require("../db");

const Campus = db.define("campuses", {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true,
		},
	},
	imageUrl: {
		type: Sequelize.TEXT,
		defaultValue: "https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352088-stock-illustration-default-placeholder-profile-icon.jpg",
	},
	address: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true,
		},
	},
	description: {
        type: Sequelize.TEXT,
        defaultValue : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a purus maximus, fermentum erat sed.`
	},
});

module.exports = Campus;
