"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
//DEPENDENCIES
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.router = router;
const projects_1 = require("../models/projects");
//GET ALL PROJECTS
router.get("/", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const projects = yield projects_1.Project.find();
    res.json(projects);
}));
//GET ONE PROJECT
router.get("/:id", (req, res) => {
    var _a;
    projects_1.Project.findOne({ _id: (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id }).then((foundProject) => {
        res.json(foundProject);
    });
});
//CREATE 1 PROJECT
router.post("/", (req, res) => {
    projects_1.Project.create(req.body)
        .then((createProject) => {
        res.json(createProject);
    })
        .catch((_err) => {
        res.json({
            message: "An error occured, couldF not create the project.",
        });
    });
});
//UPDATE 1 PROJECT
router.put("/:id", (req, res) => {
    var _a;
    projects_1.Project.findByIdAndUpdate((_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id, req.body)
        .then((updatedProject) => {
        res.json(updatedProject);
    })
        .catch((_err) => {
        res.json({
            message: "An error occured, could not edit the project",
        });
    });
});
//DELETE 1 PROJECT
router.delete("/:id", (req, _res) => {
    var _a;
    projects_1.Project.findByIdAndDelete((_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id);
});
