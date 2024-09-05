require('dotenv').config()
const express = require('express');
const workoutRoutes = require('./routes/workout')
const mongoose = require('mongoose');
// express app 
const app = express();
app.use(express.json());

//routes
// app.use()

app.get('/',(req,res)=>{
    res.json('hello world');
})

app.use('/api/workouts',workoutRoutes);

//mongoose connect to db 
mongoose.connect(process.env.MONG_URL)
    .then(()=>{ 
        app.listen(process.env.PORT,()=>{
            console.log('listening on port ',process.env.PORT);
        })
    })
    .catch((error)=>{
        console.log(error)
    })

// listen for requests
