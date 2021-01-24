/*
 [ ] Write a `students` model with the following information:
  - [ ] firstName - not empty or null
  - [ ] lastName - not empty or null
  - [ ] email - not empty or null; must be a valid email
  - [ ] imageUrl - with a default value
  - [ ] gpa - decimal between 0.0 and 4.0

*/
const Sequelize = require('sequelize');

const db = require('../db');

const Student = db.define("student", {
    firstName : {
        type: Sequelize.STRING,
        allowNull: false,
        validate : {
            notEmpty: true
        }
    },
    lastName : {
        type: Sequelize.STRING,
        allowNull: false,
        validate : {
            notEmpty: true
        }
    },
    email : {
        type: Sequelize.STRING,
        // allowNull: false,
        validate : {
            isEmail: true,
            notEmpty: true
        }
    },
    imageUrl : {
        type: Sequelize.TEXT,
        defaultValue : "https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352088-stock-illustration-default-placeholder-profile-icon.jpg"
    },
    gpa : {
        type: Sequelize.FLOAT(),
        // allowNull: false,
        validate : {
            notEmpty: true,
            min: 0,
            max: 4.0
        }
    }
});

module.exports = Student;