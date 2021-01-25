const router = require("express").Router();

const { Campus, Student } = require("../db/models");

//get all campuses path api/campus
router.get("/", async (req, res, next) => {
	try {
		const table = await Campus.findAll({include : Student});
		res.status(200).json(table);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "no table found" });
		next(error);
	}
});

//get specific campus with students path api/campus/:id
router.get("/:id", async (req, res, next) => {
	try {
		const campus = await Campus.findAll({
			include: Student,
			where: { id: req.params.id },
		});
		console.log(campus);
		res.status(200).json(campus);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "error finding table" });
		next(error);
	}
});

//get specific campus with students path api/campus/nostudent/:id
router.get("/nostudent/:id", async (req, res, next) => {
	try {
		const campus = await Campus.findByPk(req.params.id);
		console.log(campus);
		res.status(200).json(campus);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "error finding table" });
		next(error);
	}
});
//post a campus  path api/campus/campus
router.post("/", async (req, res, next) => {
	try {
        console.log(req.body);
		const campus = await Campus.create(req.body);
		res.status(200).json(campus);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "unable to post campus" });
		next(error);
	}
});

// update campus info path api/campus/:id
router.put("/:id", async (req, res, next) => {
	try {
		let campus = await Campus.findByPk(req.params.id);
		if (!campus) res.status(404).json({ message: "Campus does not exist" });
		campus.update({
			name: req.body.name,
			address: req.body.address,
			imageUrl: req.body.imageUrl,
			description: req.body.description,
		});
		campus.save();
		res.status(200).json({
			message: "Campus sucessfully updated",
			campus,
		});
	} catch (error) {
		res.status(500).json({
			message: "An error has occured while updating campus",
		});
		next(error);
	}
});
// delete campus path api/campus/:id/delete
router.get("/:id/delete", async (req, res, next) => {
	try {
        const campus = await Campus.findByPk(req.params.id);
        if (!campus) res.status(404).json({ message: "Campus does not exist" });
        campus.destroy();
		res.status(200).json(campus);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "unable to post campus" });
		next(error);
	}
});


module.exports = router;
