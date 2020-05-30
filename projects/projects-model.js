const db = require('../data/db-config.js');

function getProjects() {
	return db('projects');
}

function findProjectById(id) {
	return db('projects').where({ id }).first();
}

function addProject(project) {
	return db('projects')
		.insert(project)
		.then((ids) => {
			return findProjectById(ids[0]);
		});
}

module.exports = {
	getProjects,
	findProjectById,
	addProject,
};
