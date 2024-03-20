exports.up = function (knex) {
    return knex.schema
        .createTable('prod_comp_group', (table) => {
            table.increments('id').primary()
            table.integer('product_id').unsigned().references('id').inTable('products')
            table.integer('complement_id').unsigned().references('id').inTable('complements')
            table.integer('grup_id').unsigned().references('id').inTable('complements_groups')
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTable('prod_comp_group')
};