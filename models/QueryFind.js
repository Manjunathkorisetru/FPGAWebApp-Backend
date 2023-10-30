const mongoose = require("mongoose");

const fpgaSchema = new mongoose.Schema({}, { collection: "MainDB" });

module.exports = mongoose.model("MainDB", fpgaSchema);
