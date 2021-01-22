const router = require("express").Router();
const { Student } = require("../db/models");

// (localhost:8080)/api/student/
router.get("/", async (req, res, next) => {
	console.log("req.query" + req.query);
	try {
		const allStudents = await Student.findAll();
		res.json({
			message: "you are pulling data from students database",
			allStudents,
		});
	} catch (error) {
		res.status(500).json({ message: "An error occured" });
		next(error);
	}
});
// (localhost:8080)/api/student/:id
router.get("/:id", async (req, res, next) => {
	console.log("req.query.id" + req.query.id);
	try {
        const student = await Student.findByPk(req.params.id);
        if (!student){
            res.status(404)
            .json({
                message : `Student Not Found`
            })
        }
		res.json({
			message: `you are pulling data from students with id ${student.id} and college id ${student.campusID}`,
			student,
		});
	} catch (error) {
		res.status(500).json({ message: "An error occured" });
		next(error);
	}
});
// (localhost:8080)/api/student/
router.post("/", async (req, res, next) => {
	console.log("req.body" + req.body);
	try {
		let newStudent = await Student.create(req.body);
		res.status(201).json(newStudent);
	} catch (error) {
		res.status(500).json({ message: "An error occured" });
		next(error);
	}
});
// (localhost:8080)/api/student/:id
router.put("/:id", async (req, res, next) => {
	try {
		let student = await Student.findByPk(req.params.id);
		if (!student) res.status(404).json({ message: "Student does not exist" });
		student.update({
			firstName : req.body.firstName,
			lastName : req.body.lastName,
			email: req.body.email,
			imageUrl : req.body.imageUrl,
			gpa : req.body.gpa,
			campusId : req.body.campusId
		});
		student.save();
		res.status(200).json({
			message: "Student sucessfully updated",
			student,
		});
	} catch (error) {
		res.status(500).json({
			message: "An error has occured while updating campus",
		});
		next(error);
	}
});

module.exports = router;
