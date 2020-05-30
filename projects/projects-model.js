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

function findAllForProject(id) {
	return db('projects')
		.join('tasks', 'tasks.project_id', 'projects.id')
		.join('projects_resources', 'projects_resources.project_id', 'projects.id')
		.join('resources', 'projects_resources.project_id', 'resources.id')
		.select('*')
		.where({ 'projects.id': id });
}

module.exports = {
	getProjects,
	findProjectById,
	addProject,
	findAllForProject,
};
