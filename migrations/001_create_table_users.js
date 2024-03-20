// migrations/create_tables.js
exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('username');
    table.string('email');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
