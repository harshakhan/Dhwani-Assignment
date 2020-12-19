const ChildProfile = require('../models/Childmodels');

const getChild = async (req, res) => {
    await ChildProfile.find()
    .then((childProfiles) => res.json({success: true, status: 200, message: "Child Detail", timestamp: Date.now(), child_profile: childProfiles}))
    .catch((err) => res.status(400).json("Error: " + err))
}

const addChild = async (req, res) => {
    const _id = await ChildProfile.collection.count() + 1;
    const { district_id, name, sex, date_of_birth, father_name, mother_name, photo } = req.body;
    console.log(req.body)
    await ChildProfile.find({_id: _id})
    .then((childProfiles) => {
        if(childProfiles.length === 0){
            const newStateChildProfile = new ChildProfile({ _id, district_id, name, sex, date_of_birth, father_name, mother_name, photo});  
            newStateChildProfile.save().then(() => res.json({success: true, status: 200, message: "Child Profile Added Successfully"})).catch((err) => res.status(400).json("Error: " + err));
        } 
        else
            res.json({success: false, status: 200, message: "Child Details already exists"})
        return;
    })
    .catch((err) => res.status(400).json("Error: " + err));
    
}

module.exports = { getChild, addChild }