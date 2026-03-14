const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Package = require("./models/Package");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/travelDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));


// GET all packages
app.get("/packages", async (req, res) => {

    const packages = await Package.find();

    res.json(packages);
});


// ADD package
app.post("/packages", async (req, res) => {

    const newPackage = new Package(req.body);

    await newPackage.save();

    res.json(newPackage);
});


app.listen(5000, () => {
    console.log("Server running on port 5000");
});