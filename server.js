const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.port || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);

app.use(require("./routes/apiRoutes"));
app.use(require("./routes/htmlRoutes"));

app.listen(port, () => {
    console.log(`App running on port ${PORT}!`);
});

