require("dotenv").config();
import mongoose from "mongoose";
let connectionString: any = process.env.MONGO_URI

mongoose.connect(connectionString, {
  //useNewUrlParser: true,
  //useUnifiedTopology: true,
});

module.exports.Project = require("./projects");
