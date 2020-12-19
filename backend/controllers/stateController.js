const State = require('../models/State');

const getStatesDetails = async (req, res) => {
    await State.find()
    .then((states) => res.json({success: true, status: 200, message: "State Details", timestamp: Date.now(), state: states}))
    .catch((err) => res.status(400).json("Error: " + err))
}

const addStateDetails = async (req, res) => {
    const _id = await State.collection.count() + 1;
    const { state_name } = req.body;
    console.log(req.body)
    await State.find({state_name: state_name})
    .then((states) => {
        console.log("test states:",states);
        if(states.length === 0){
            const newState = new State({ _id, state_name });
            newState
                .save()
                .then(() => res.json({success: true, status: 200, message: "State Added Successfully"}))
                .catch((err) => res.status(400).json("Error: " + err));
        } 
        else
            res.json({success: false, status: 200, message: "State name already exists"})
        return;
    })
    .catch((err) => res.status(400).json("Error: " + err));
    
}

module.exports = { getStatesDetails, addStateDetails }