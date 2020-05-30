exports.seed = function (knex, Promise) {
	return knex('tasks').insert([
		{
			task_description: 'another task description',
			task_notes: 'the task notes',
			task_status: 0,
			project_id: 1,
		},
		{
			task_description: 'task description',
			task_notes: 'the task notes',
			task_status: 0,
			project_id: 2,
		},
	]);
};
