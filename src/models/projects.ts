// DEPENDENCIES
import mongoose from "mongoose";

// SCHEMA
const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  details: { type: String, required: true },
  steps: { type: String, required: false },
  time: { type: Number, require: true },
  category: {
    type: String,
    required: true,
    enum: ["Metal Work", "Wood Work", "Crafts", "Pottery", "Sewing", "Other"],
  },
  materials: { type: String, required: true },
  cost: { type: Number, required: false },
});

//EXPORTS
export const Project = mongoose.model('Project', projectSchema)
