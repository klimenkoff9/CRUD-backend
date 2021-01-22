const router = require("express").Router();
module.exports = router;

router.use("/student", require("./student"));
router.use("/campus", require("./campus"));
// router.use('/trainers', require('./trainer'))

router.use((req, res, next) => {
	const error = new Error("Not Found");
	error.status = 404;
	next(error);
});
