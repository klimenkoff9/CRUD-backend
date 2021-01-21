const Student = require("./students");
const Campus = require('./campuses');

Student.belongsTo(Campus);

module.exports = {
    Student,
    Campus
}