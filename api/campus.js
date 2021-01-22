const router = require('express').Router();

const { Campus, Student } = require('../db/models');

//get all campuses path api/campus
router.get("/", async (req, res, next)=>{
    try{
        const table = await Campus.findAll();
        res.status(200).json(table);
    }
    catch(error){
        console.error(error);
        res.status(500).json({message: "no table found"});
        next(error);
    }
})
//get specific campus with students path api/campus/:id
router.get("/:CampusName", async(req, res, next)=>{
    try{
        const campus = await Campus.findAll({include: Student, where: { name: req.params.CampusName}});
        console.log(campus);
        res.status(200).json(campus);
    }
    catch(error){
        console.error(error);
        res.status(500).json({message: "error finding table"});
        next(error);

    }
})
//post a campus  path api/campus/campus
router.post("/", async (req, res, next)=>{
    try{
        const campus = await Campus.create(req.body);
        res.status(200).json(campus);
    }
    catch(error){
        console.error(error);
        res.status(500).json({message: "unable to post campus"});
        next(error);
    }
})



module.exports = router;