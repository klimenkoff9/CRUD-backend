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
		defaultValue: `https://th.bing.com/th/id/Rea604652f50c83d41768a347559e089f?rik=J8rmS2E9pZXdyA&riu=http%3a%2f%2fwww.brooklyn.cuny.edu%2fweb%2fcom_socialImages%2fBrooklynCollegeLibrary_1200x628.jpg&ehk=wkz3LaQJ2HRQ8LgiKSP8e%2bI0Ndl4LFK9InpDBYKn4PI%3d&risl=&pid=ImgRaw`,
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
