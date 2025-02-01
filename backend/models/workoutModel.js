const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Key: value inside  NinjaMern.workouts database 
const WorkoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, { timestamps: true })

// model('collection_Name', Schema)
module.exports = mongoose.model('allWorkout', WorkoutSchema)
// allWorkout.find() I will use this object to fetch data from database
// allWorkout => The collection name so if you look in NinjaMern database you find allWorkout collection