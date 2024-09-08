require('dotenv').config()
const express = require('express');
const workoutRoutes = require('./routes/workout')
const mongoose = require('mongoose');
const cors = require('cors')
// express app 
const app = express();
app.use(express.json());
app.use(cors());
// app.use("/",router);
//routes
// app.use()

app.get('/',(req,res)=>{
    res.json('hello world');
})

// app.use((req, res, next) => {
//     console.log(req.path, req.method)
//     next()
//   })
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


// https://www.youtube.com/watch?v=oEHHjs1UVXQ&list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE&index=6