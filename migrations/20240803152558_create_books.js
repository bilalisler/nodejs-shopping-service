exports.up = function(knex) {
  return knex.schema.createTable('books', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.float('average_rating').defaultTo(0);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('books');
};
