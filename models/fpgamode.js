const mongoose = require("mongoose");

const fpgaSchema = new mongoose.Schema(
  {
    variant: String,
  },
  { collection: "Test" }
);

module.exports = mongoose.model("Test", fpgaSchema);
