const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const users = require('./user.json')
const districts = require('./district.json')
const childProfiles = require('./childProfile.json')
const states = require('./state.json')

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const authRoute = require('./routes/UserAuthRoutes');
const childRoute = require('./routes/childRoutes');
const stateRoute = require('./routes/stateRoutes');
const districtRoute = require('./routes/districtRoutes');
const User = require('./models/Usermodels')
const State = require('./models/Statemodels')
const District = require('./models/Districtmodels')
const Child = require('./models/Childmodels')

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
app.use('/api', childRoute);
app.use('/api', stateRoute);
app.use('/api', districtRoute);
app.listen(5000, () => {
    console.log("The server is up and running at port 5000")
});







