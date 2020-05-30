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

router.get('/:id', (req, res) => {
	const { id } = req.params;
	console.log(id);
	Projects.findAllForProject(id)
		.then((projects) => {
			if (projects.length) {
				res.json(projects);
			} else {
				res
					.status(404)
					.json({ message: 'Could not find data for the given project' });
			}
		})
		.catch((err) => {
			res.status(500).json({ message: 'Failed to get project data' });
		});
});

module.exports = router;
