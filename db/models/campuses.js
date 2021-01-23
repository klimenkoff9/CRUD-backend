/*
[ ] Write a `campuses` model with the following information:
  - [ ] name - not empty or null
  - [ ] imageUrl - with a default value
  - [ ] address - not empty or null
  - [ ] description - extremely large text
*/
const Sequelize = require("sequelize");

const db = require("../db");

const Campus = db.define("campus", {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true,
		},
	},
	imageUrl: {
		type: Sequelize.TEXT,
		defaultValue: "https://www.brooklyn.cuny.edu/web/com_homepage_2020/BrooklynCollegeLibrary_220x140.jpg",
	},
	address: {
		type: Sequelize.STRING,
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
