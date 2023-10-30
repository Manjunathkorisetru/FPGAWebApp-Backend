const mongoose = require("mongoose");

const vizSchema = new mongoose.Schema(
  {
    device: String,
    Registers: String,
    series: String,
    variant: String,
    DSPBlocks: Number,
    family: String,
    M20KMemoryBlocks: Number,
    MLABMemory: Number,
    Multipliers: Number,
    family: String,
    PCIeHardIPBlocks: Number,
    transceiverCount: Number,
    yearOfIntroduction: Number,
    manufacturer: String,
  },
  {
    collection: "MainDB",
  }
);

module.exports = mongoose.model("MainDB", vizSchema);
