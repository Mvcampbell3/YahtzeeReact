const express = require("express");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const runSeed = require("./scripts/seed");
const runRemoveAll = require("./scripts/remove");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("dotenv").config();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.use(routes);

// Change DB name here
const dbase = "yahtzee";
const addSeed = false;
const emptyDatabase = false;

mongoose
    .connect(process.env.MONGODB_URI || `mongodb://localhost/${dbase}`, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("mongoDB linked");
        if (addSeed) {
            runSeed();
        }
        if (emptyDatabase) {
            runRemoveAll();
        }
    })
    .catch((err) => {
        console.log(err);
    });

app.listen(PORT, function () {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});
