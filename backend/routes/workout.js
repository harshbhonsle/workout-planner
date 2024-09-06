const express = require('express');
const Workout = require('../models/workoutModel')
const router = express.Router();
const {
    createWorkout,
    getWorkout,
    getWorkouts,
    updateWorkout,
    deleteWorkout
} = require('../controllers/workoutController')


// to get all workout
router.get('/',getWorkouts)

// to get single workout
router.get('/:id',getWorkout)

//POST a new workout
router.post('/', createWorkout)

//update  a workout
router.patch('/:id',updateWorkout)

router.delete('/:id',deleteWorkout)
// to get single workotu

module.exports = router