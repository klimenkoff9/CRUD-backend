const router = require('express').Router();
const { Student } = require('../db/models');
module.exports = router;

router.get("/", async (req, res, next) => {
    console.log("req.query" , req.query);
    try {
        const allStudents = await Student.findAll();
        res.json({message: "you are pulling data from students database", allStudents});
    } catch (error) {
        next(error);
    }
})