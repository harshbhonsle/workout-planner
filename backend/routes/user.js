const express = require('express');

// controller functions
const {signupUser, loginUser} = require('../controllers/userController')

const router = express.Router()

// login router
router.post('/login',loginUser)

// signup rputer
router.post('/signup',signupUser) // post because we will be sending data to login 
module.exports = router