require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());
app.use(express.json());

try {
  mongoose.connect(
    process.env.FPGADATABASE_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("Connected to Database")
  );
} catch (error) {
  console.log("could not connect");
}
const db = mongoose.connection;
db.once("open", () => console.log("Database Opened")).on("error", (error) => {
  console.log("Your Error", error);
});
app.get("/", (req, res) => {
  res.send("Welcome to FPGA Web App Backend Server !");
});

const Viz = require("./routes/Visualization");
app.use("/vis", Viz);

const Fpga = require("./routes/fpga");
app.use("/", Fpga);

app.listen(4000, () => console.log("Server Started"));
