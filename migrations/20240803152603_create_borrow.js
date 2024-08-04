exports.up = function(knex) {
  return knex.schema.createTable('borrows', (table) => {
    table.increments('id').primary();
    table.integer('user_id').unsigned().notNullable();
    table.integer('book_id').unsigned().notNullable();
    table.timestamp('borrow_date').defaultTo(knex.fn.now());
    table.timestamp('return_date').nullable();
    table.integer('score').nullable();

    table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE');
    table.foreign('book_id').references('id').inTable('books').onDelete('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('borrows');
};
