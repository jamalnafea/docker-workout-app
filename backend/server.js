const express = require("express");
const app = express();
const fs = require("fs");
// handle .env file
require("dotenv").config();
const workoutRoutes = require("./routes/workouts");
// called Mongodb ODM Or Mongoose
const mongoose = require('mongoose')

// MiddleWare To Post New Workouts
app.use(express.json());

// middleWare
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// connect to mongodb atlas using mongoose
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Connected To Atlas Successfully && Now Listing On Port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err)
  })

// MiddleWare To Get Component or Router from anther file
app.use("/api/workouts", workoutRoutes);  