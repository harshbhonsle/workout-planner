const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
    res.json({mssg:'get all workouts'})
})

// to get single workotu
router.get('/:id',(req,res)=>{
    res.json({mssg:'Get single workout'})
})

module.exports = router