exports.up = function (knex) {
    return knex.schema.createTable('complements', (table) => {
      table.increments('id').primary();
      table.string('name', 255);
      table.decimal('price', 10, 2);
      table.text('description');
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('complements');
  };
  