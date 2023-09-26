//DEPENDENCIES
import express, { Router } from "express";
const router: Router = express.Router();
import { Request, Response } from "express";
import { Project } from "../models/projects";

//GET ALL PROJECTS
router.get("/", async (_req: Request , res: Response) => {
  const projects = await Project.find();
  res.json(projects);
});

//GET ONE PROJECT
router.get("/:id", (req: Request , res: Response) => {
  Project.findOne({ _id: req?.params?.id }).then((foundProject: any) => {
    res.json(foundProject);
  });
});

//CREATE 1 PROJECT
router.post("/", (req: Request , res: Response) => {
  Project.create(req.body)
    .then((createProject: any) => {
      res.json(createProject);
    })

    .catch((_err: any) => {
      res.json({
        message: "An error occured, couldF not create the project.",
      });
    });
});

//UPDATE 1 PROJECT
router.put("/:id", (req: Request , res: Response) => {
  Project.findByIdAndUpdate(req?.params?.id, req.body)
    .then((updatedProject: any) => {
      res.json(updatedProject);
    })
    .catch((_err: any) => {
      res.json({
        message: "An error occured, could not edit the project",
      });
    });
});

//DELETE 1 PROJECT
router.delete("/:id", (req: Request , _res: Response) => {
  Project.findByIdAndDelete(req?.params?.id);
});

//EXPORTS
export { router }
