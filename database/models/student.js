const Sequelize = require('sequelize');
const db = require('../db');

/*
[ ] Write a `students` model with the following information:
  - [ ] firstName - not empty or null
  - [ ] lastName - not empty or null
  - [ ] email - not empty or null; must be a valid email
  - [ ] imageUrl - with a default value
  - [ ] gpa - decimal between 0.0 and 4.0

*/
const Student = db.define("student", {
    firstName : {
        type: Sequelize.STRING,
        allowNull : false,
        validate : {
            notEmpty : true
        }
    },
    lastName : {
        type: Sequelize.STRING,
        allowNull : false,
        validate : {
            notEmpty : true
        }
    },
    email : {
        type: Sequelize.STRING,
        allowNull : false,
        validate : {
            notEmpty : true
        }
    },
    imageUrl : {
        type: Sequelize.TEXT,
        allowNull : false,
        validate : {
            notEmpty : true
        }
    },
    gpa : {
        type: Sequelize.NUMBER,
        allowNull : false,
        validate : {
            notEmpty : true
        }
    },
});

module.exports = student;