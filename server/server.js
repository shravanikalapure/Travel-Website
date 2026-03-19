const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ LOCAL MongoDB (your setup)
mongoose.connect("mongodb://127.0.0.1:27017/travelDB")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// Models
const Trip = mongoose.model("Trip", {
  name: String,
  price: Number,
  description: String
});

const Booking = mongoose.model("Booking", {
  name: String,
  email: String,
  trip: String
});

// Routes
app.get("/", (req, res) => {
  res.send("Server running");
});

app.get("/trips", async (req, res) => {
  const trips = await Trip.find();
  res.json(trips);
});

app.post("/trips", async (req, res) => {
  const trip = new Trip(req.body);
  await trip.save();
  res.json(trip);
});

app.post("/book", async (req, res) => {
  const booking = new Booking(req.body);
  await booking.save();
  res.json({ message: "Booked successfully" });
});

app.listen(5000, () => console.log("Server running on port 5000"));