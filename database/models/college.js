const Sequelize = require('sequelize');
const db = require('../db');

/*
[ ] Write a `campuses` model with the following information:
  - [ ] name - not empty or null
  - [ ] imageUrl - with a default value
  - [ ] address - not empty or null
  - [ ] description - extremely large text

*/

const College = db.define("college", {
    name : {
        type : Sequelize.STRING,
        allowNull : false,
        validate : {
            notEmpty : true
        }
    },
    imgUrl : {
        type : Sequelize.TEXT,
        allowNull : false,
        validate : {
            notEmpty : true
        }
    },
    address : {
        type : Sequelize.STRING,
        allowNull : false,
        validate : {
            notEmpty : true
        }
    },
    description : {
        type : Sequelize.TEXT,
        allowNull : false,
        validate : {
            notEmpty : true
        }
    },
});

module.exports = college;