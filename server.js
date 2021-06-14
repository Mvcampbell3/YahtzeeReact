const express = require("express");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs

// Change DB name here
const dbase = "yahtzee";

mongoose
    // .connect(process.env.MONGODB_URI || `mongodb://localhost/${dbase}`, {
    .connect(`mongodb://localhost/${dbase}`, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("mongoDB linked");
    })
    .catch((err) => {
        console.log(err);
    });

app.listen(PORT, function () {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});
