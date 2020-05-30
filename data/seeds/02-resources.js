exports.seed = function (knex, Promise) {
	return knex('resources').insert([
		{
			resource_name: 'Lambda Student',
			resource_description: 'a soon to be hired developer',
		},
		{
			resource_name: 'MacBook Pro #1',
			resource_description: 'an overly expensive laptop computer',
		},
	]);
};
