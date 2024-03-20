exports.up = function (knex) {
    return knex.schema.createTable('products', (table) => {
      table.increments('id').primary();
      table.string('name', 255);
      table.decimal('price', 10, 2);
      table.text('description');
      table.string('category', 255);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('products');
  };
  