exports.up = function (knex) {
	return knex.schema
		.createTable('projects', (tbl) => {
			tbl.increments();
			tbl.string('project_name', 128).notNullable();
			tbl.string('project_description', 128);
			tbl.boolean('project_status', 128).notNullable().defaultTo(0);
		})
		.createTable('resources', (tbl) => {
			tbl.increments();
			tbl.string('resource_name', 128).notNullable();
			tbl.string('resource_description', 128);
		})
		.createTable('tasks', (tbl) => {
			tbl.increments();
			tbl.string('task_description', 128).notNullable();
			tbl.string('task_notes', 128);
			tbl.boolean('task_status', 128).notNullable().defaultTo(0);
			tbl
				.integer('project_id')
				.notNullable()
				.unsigned()
				.references('projects.id')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
		})
		.createTable('projects_resources', (tbl) => {
			tbl
				.integer('project_id')
				.unsigned()
				.notNullable()
				.references('projects.id')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
			tbl
				.integer('resource_id')
				.unsigned()
				.notNullable()
				.references('resources.id')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
			tbl.primary(['project_id', 'resource_id']);
		});
};

exports.down = function (knex) {
	return knex.schema
		.dropTableIfExists('projects_resources')
		.dropTableIfExists('tasks')
		.dropTableIfExists('resources')
		.dropTableIfExists('projects');
};
