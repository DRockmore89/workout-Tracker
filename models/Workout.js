const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Data.now,
    },

    exercise: [
        {
            type: {
                type: String,
                trim: true,
                required: "Cardio or Resistance exercise type is Required",
            },
            name: {
                type: String,
                trim: true,
                required: "Exercise type is Required",
            },
            distance: {
                type: Number,
            },
            duration: {
                type: Number,
                required: true,
            },
            weight: {
                type: Number,
                trim: true,
            },
            set: {
                type: Number,
                trim: true,
            },
            reps: {
                type: Number,
                trim: true,
            },
        },
    ],
});


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;