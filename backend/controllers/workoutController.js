// Include Mongoose Schema
const allWorkout = require('../models/workoutModel')
// Include mongoose module
const mongoose = require('mongoose')


// Get all workouts
const getWorkouts = async (req, res) => {
    // fetch Documents from atlas db using collectionName.find() method
    const workouts = await allWorkout.find({}).sort({ createdAt: -1 })
    res.status(200).json(workouts);
}
// ====================================================================================================
// Get single workout
const getSingleWorkout = async (req, res) => {
    const { id } = req.params;
    // check id validation using mongoose
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "ID Is Not Valid" });
    }
    try {
        // if Id Found and correct
        const singleWorkout = await allWorkout.findById(id);
        res.status(200).json(singleWorkout);
    } catch (error) {
        // Handle the error here && this catch block prevent app from crashing
        console.error(error);
        res.status(500).json({ error: "An error occurred while retrieving the workout." });
    }
};
// ====================================================================================================
// Create a workout >> This connected to WorkoutForm.js file
const createWorkout = async (req, res) => {
    // create doc to db
    const { title, reps, load } = req.body

    // Start handle Error
    let emptyFields = []

    if (!title) {
        emptyFields.push('title')
    }
    if (!load) {
        emptyFields.push('load')
    }
    if (!reps) {
        emptyFields.push('reps')
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
    }
    // End handle Error

    // Create doc to db
    try {
        const workout = await allWorkout.create({ title, reps, load })
        res.status(200).json(workout)

    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}
// ====================================================================================================
// delete a workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params;
    // check id validation using mongoose
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "ID Is Not Valid" });
    }
    try {
        const deleteWorkout = await allWorkout.deleteOne({ _id: id });
        res.status(200).json({ msg: "Workout Deleted Successfully" });
    } catch (error) {
        // Handle the error here
        res.status(500).json({ error: "An error occurred while retrieving the workout." });
    }
};
// ====================================================================================================
// update a workout
const updateWorkout = async (req, res) => {
    const { id } = req.params;
    // check id validation using mongoose
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "ID Is Not Valid" });
    }
    try {
        // update the workout
        const updateWorkout = await allWorkout.updateOne({ _id: id }, { ...req.body });
        res.status(200).json({ msg: "Workout Updated Successfully" });
    } catch (error) {
        // Handle the error here
        res.status(500).json({ error: "An error occurred while retrieving the workout." });
    }
};
// ====================================================================================================
// Export Modules To Use Them on workout.js file
module.exports = {
    createWorkout,
    getWorkouts,
    getSingleWorkout,
    deleteWorkout,
    updateWorkout
}