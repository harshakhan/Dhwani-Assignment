const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const users = require('./user.json')
const states = require('./state.json')
const districts = require('./district.json')
const childProfiles = require('./childProfile.json')

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const authRoute = require('./routes/authRoutes');
const stateRoute = require('./routes/stateRoutes');
const districtRoute = require('./routes/districtRoutes');
const childRoute = require('./routes/childRoutes');

const User = require('./models/User')
const State = require('./models/State')
const District = require('./models/District')
const Child = require('./models/Child')

mongoose.connect(process.env.ATLAS_URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}, (err) => {
    if(err){
        console.log("Database Conection Failed")
    }
    
    if(User.collection.countDocuments((err, count) => {
        if (!err && count === 0) {
            User.insertMany(users).then(()=>{ 
            console.log("User Data inserted")  
        }).catch((error)=>{ 
            console.log(error)     
        }); 
        }
    }));
    if(State.collection.countDocuments((err, count) => {
        if (!err && count === 0) {
            State.insertMany(states).then(()=>{ 
            console.log("State Data inserted") 
        }).catch((error)=>{ 
            console.log(error)    
        }); 
        }
    }));
    if(District.collection.countDocuments((err, count) => {
        if (!err && count === 0) {
            District.insertMany(districts).then(()=>{ 
            console.log("District Data inserted") 
        }).catch((error)=>{ 
            console.log(error)      
        }); 
        }
    }));
    if(Child.collection.countDocuments((err, count) => {
        if (!err && count === 0) {
            Child.insertMany(childProfiles).then(()=>{ 
            console.log("Child Data inserted")
        }).catch((error)=>{ 
            console.log(error)   
        }); 
        }
    }));
    
});

app.use('/api/user', authRoute);
app.use('/api', stateRoute);
app.use('/api', districtRoute);
app.use('/api', childRoute);
app.listen(8000, () => {
    console.log("The server is up and running on port 8000")
});







