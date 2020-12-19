const mongoose = require('mongoose')

const childSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 4,
        max: 300,
    },
    sex : {
        type: String,
        required: true,
        min :2,
        max: 465
    },
    date_of_birth: {
        type: String,
        required: true,
        min:1,
        max: 450

    },
    father_name: {
        type: String,
        required: true,
        min: 1,
        max: 450
    },
    mother_name: {
        type: String,
        required: true,
        min:2,
        max: 400
    },
    state: {
        type: String,
        required: true,
        min:2,
        max: 400
    },
    district: {
        type:String,
        required: true,
        min: 2,
        max: 400
    }
})

module.exports = mongoose.model('Child',childSchema)
