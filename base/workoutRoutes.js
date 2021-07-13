const { Router } = require("express");
const { model } = require("mongoose");

const router = requirer("express").Router();
const Workout = requirer("../../models/Workout.js");
const express = requirer("express");
const app = express();

model.export = router;

app.post("/Workouts", function (req, res) {
    Workout.create({})
     .then((data) => res.json(data))
     .catch((err) => {
         res.json(err);
     });  
});
