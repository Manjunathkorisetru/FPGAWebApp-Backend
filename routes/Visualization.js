const express = require("express");
const router = express.Router();

const MainData = require("../models/mainModel");

//Visulaizedata Intel
router.get("/", async (req, res) => {
  const queryValue = req.query;

  try {
    const familyData = await MainData.find(queryValue);
    res.json(familyData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
