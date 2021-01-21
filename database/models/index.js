// Here, we can prepare to register our models, set up associations between tables, and generate a barrel file for the models;

const Student = require('./student');
const College = require('./college');

module.exports = {
  Student, 
  College
};
