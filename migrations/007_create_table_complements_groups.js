exports.up = function (knex) {
  return knex.schema
    .createTable('complements_groups', (table) => {
      table.increments('id').primary();
      table.string('name', 255)
      table.decimal('min').notNullable()
      table.decimal('max').notNullable()
      table.boolean('is_required').defaultTo(false)
      
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTable('complements_groups')
};