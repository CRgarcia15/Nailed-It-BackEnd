"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const mongoose_1 = __importDefault(require("mongoose"));
let connectionString = process.env.MONGO_URI;
mongoose_1.default.connect(connectionString, {
//useNewUrlParser: true,
//useUnifiedTopology: true,
});
module.exports.Project = require("./projects");
