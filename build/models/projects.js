"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
// DEPENDENCIES
const mongoose_1 = __importDefault(require("mongoose"));
// SCHEMA
const projectSchema = new mongoose_1.default.Schema({
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
exports.Project = mongoose_1.default.model('Project', projectSchema);
