const express = require('express');

const Projects = require('./projects-model.js');

const router = express.Router();

router.get('/', (req, res) => {
	Projects.getProjects()
		.then((projects) => {
			res.json(projects);
		})
		.catch((err) => {
			res.status(500).json({ message: 'Failed to get projects.' });
		});
});

router.post('/', (req, res) => {
	const newProject = req.body;
	Projects.addProject(newProject)
		.then((project) => {
			res.status(201).json(project);
		})
		.catch((err) => {
			res.status(500).json({ message: 'Failed to create new project.' });
		});
});

module.exports = router;
