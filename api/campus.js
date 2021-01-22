const router = require('express').Router();

const {
    Campus,
    Student
} = require('../db/models');

//get all campuses path api/campus
router.get("/", async (req, res, next) => {
    try {
        const table = await Campus.findAll();
        res.status(200).json(table);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "no table found"
        });
        next(error);
    }
})
//get specific campus with students path api/campus/:CampusName
router.get("/:CampusName", async (req, res, next) => {
    try {
        const campus = await Campus.findAll({
            include: Student,
            where: {
                name: req.params.CampusName
            }
        });
        console.log(campus);
        res.status(200).json(campus);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "error finding table"
        });
        next(error);

    }
})
//post a campus  path api/campus/campus
router.post("/", async (req, res, next) => {
    try {
        const campus = await Campus.create(req.body);
        res.status(200).json(campus);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "unable to post campus"
        });
        next(error);
    }
})

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
			message: "Campus successfully updated",
			campus,
		});
	} catch (error) {
		res.status(500).json({
			message: "An error has occurred while updating campus",
		});
		next(error);
	}
});


module.exports = router;