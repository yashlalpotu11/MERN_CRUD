const express = require('express');
const router = express.Router();

//student model
const Students = require('../models/students');

//@route GET api/students
//@desc Get all students
//@access Public
router.get('/', (req, res) =>{
    // res.send("yasyayayya");
    try{
        const students = Students.find({});
        console.log(students + "students");
        res.send('Yash Lalpotu')
        res.send({students});
    }
    catch(err){
        console.log(err);
        res.status(400).send({error: err.message});
    }
});

//@route GET api/students/:id
//@desc Get a student by id
//@access Public
router.get('/:id', async (req, res) =>{
    try{
        const student = await Students.findById(req.params.id);
        res.send({student});
    }
    catch(err){
        res.status(400).send({error: 'Student not found!'});
    }
})

//@route POST api/students
//@desc Create a student
//@access Public
router.post('/', async (req, res) =>{
    try{
        const newStudent = await Students.create({name : req.body.name, email : req.body.email, enrollNumber : req.body.enrollNumber});
        res.send({newStudent});
    }
    catch(err){
        res.status(400).send({error: err.message});
    }
});

//@route PUT api/students/:id
//@desc Update a student
//@access Public
router.put('/', async (req, res) => {
    try{
        const updatedStudent = await Students.findByIdAndUpdate(req.params.id, req.body);
        res.send({updatedStudent});
    }
    catch(err){
        res.status(400).send({error: err.message});
    }
});

//@route DELETE api/students/:id
//@desc Delete a student
//@access Public
router.delete('/:id', async (req, res) => {
    try{
        const removeStudent = await Students.findByIdAndRemove(req.params.id);
        res.send({message : 'The student was removed'});
    }
    catch(err){
        res.status(400).send({error: err.message});
    }
});

module.exports = router;