const express = require("express");
const router = express.Router();

const MainData = require("../models/mainModel");

//Getting all data
router.get("/fpga", async (req, res) => {
  const query = req.query;
  try {
    const Data = await MainData.find(query);
    res.json(Data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Compare Component API
router.get("/compare", async (req, res) => {
  const query = req.query;
  try {
    const compareData = await MainData.find(query, { _id: 0 });
    res.json(compareData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Number of devices in the database
router.get("/count", async (req, res) => {
  try {
    const numberOfDevices = await MainData.count();
    res.json(numberOfDevices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//getting one
router.get("/id:", (req, res) => {});

module.exports = router;
