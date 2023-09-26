//DEPENDENCIES
const router = require("express").Router();
const { Project } = require("../models");

//GET ALL PROJECTS
router.get("/", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

//GET ONE PROJECT
router.get("/:id", (req, res) => {
  Project.findOne({ _id: req.params.id }).then((foundProject) => {
    res.json(foundProject);
  });
});

//CREATE 1 PROJECT
router.post("/", (req, res) => {
  Project.create(req.body)
    .then((createProject) => {
      res.status(200).json(createProject);
    })

    .catch((err) => {
      res.status(400).json({
        message: "An error occured, could not create the project.",
      });
    });
});

//UPDATE 1 PROJECT
router.put("/:id", (req, res) => {
  Project.findByIdAndUpdate(req.params.id, req.body)
    .then((updatedProject) => {
      res.status(200).json(updatedProject);
    })
    .catch((err) => {
      res.status(400).json({
        message: "An error occured, could not edit the project",
      });
    });
});

//DELETE 1 PROJECT
router.delete("/:id", (req, res) => {
  Project.findByIdAndDelete(req.params.id).then(res.status(303));
});

//EXPORTS
module.exports = router;
