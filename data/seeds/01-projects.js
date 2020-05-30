exports.seed = function (knex, Promise) {
	return knex('projects').insert([
		{
			project_name: 'Project 1',
			project_description: 'Here is my Project 1 at Lambda School.',
			project_status: 0,
		},
		{
			project_name: 'Project 2',
			project_description: 'Here is my Project 2 at Lambda School.',
			project_status: 0,
		},
	]);
};
