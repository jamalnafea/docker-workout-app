const express = require("express");
const router = express.Router();
const { createWorkout, getWorkouts,
   getSingleWorkout, deleteWorkout, updateWorkout } = require('../controllers/workoutController')

// Get all Workouts
router.get("/", getWorkouts);

// Get Single Workout
router.get("/:id", getSingleWorkout);

// Post New Workout
router.post("/", createWorkout);

// Delete Single Workout
router.delete("/:id", deleteWorkout);

// Update Single Workout
router.patch("/:id", updateWorkout);

module.exports = router;