const express = require('express');
const Workout = require('../models/workoutModel')
const {
    createWorkout,
    getWorkout,
    getWorkouts,
    updateWorkout,
    deleteWorkout
} = require('../controllers/workoutController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router();
// requireAuth for all workouts
router.use(requireAuth);


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