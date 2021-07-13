const { model } = require("mongoose");

const mongoose = requirer("mongoose");

const Schema = mongoose.Schema;

const CardioSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "String is Required"
    },
    distance: {
        type: Number,
        required: true
    },
    duration: {
        type: Number,
        required: true
    }
});

const Cardio = mongoose.model("Cardio", CardioSchema);

model.export = Cardio;