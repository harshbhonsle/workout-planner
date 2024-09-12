const express = require('express');

// controller functions
const {signupUser, loginUser} = require('../controllers/userController')

const router = require('router');

// login router
router.post('/login',loginUser)

// signup rputer
router.post('/signup',signupUser)
module.exports = router