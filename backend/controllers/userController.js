const User = require('../models/userModel')

// login user
const loginUser = async (req,res)=>{
    res.json({mssg:'login user'})
}

// signup user

const signupUser =async (req,res)=>{
    const {email,password} = req.body
    try {
        const user = await User.signup
    }
    catch(error){
        

    }

    res.json({mssg:'signup user'})
}




module.exports = {signupUser, loginUser}


