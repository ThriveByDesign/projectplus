const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// CREATE
router.post('/', async (req, res) => {
  try {
    const { title, description } = req.body;
    const project = await Project.create({ title, description });
    res.json(project);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// READ
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// UPDATE
router.put('/:id', async (req, res) => {
  try {
    const { title, description } = req.body;
    const project = await Project.findByIdAndUpdate(req.params.id, { title, description }, { new: true });
    res.json(project);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    res.json(project);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
