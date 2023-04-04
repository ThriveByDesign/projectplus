// routes/projects.js

router.post('/', async (req, res) => {
    try {
      const project = new Project(req.body);
      await project.save();
      res.status(201).json(project);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  router.get('/', async (req, res) => {
    try {
      const projects = await Project.find();
      res.json(projects);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  router.get('/:id', getProject, (req, res) => {
    res.json(res.project);
  });
  
  router.patch('/:id', getProject, async (req, res) => {
    if (req.body.title != null) {
      res.project.title = req.body.title;
    }
    if (req.body.description != null) {
      res.project.description = req.body.description;
    }
    try {
      const updatedProject = await res.project.save();
      res.json(updatedProject);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  router.delete('/:id', getProject, async (req, res) => {
    try {
      await res.project.remove();
      res.json({ message: 'Project deleted' });
    } catch (err) {
      res.status(500).json({ message: err })

    }

});
  