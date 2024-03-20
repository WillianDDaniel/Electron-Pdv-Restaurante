exports.up = function(knex) {
    return knex.schema.table('products', function(table) {
      table.blob('photo'); 
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.table('products', function(table) {
      table.dropColumn('foto');
    });
  };
  