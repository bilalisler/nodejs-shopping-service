const {faker} = require("@faker-js/faker");
exports.seed = async function (knex) {
  await knex('borrows').del();

  const users = await knex('users').select('id');
  const books = await knex('books').select('id');

  const fakeBorrows = [];
  for (let i = 1; i <= 20; i++) {
    const user = faker.helpers.arrayElement(users);
    const book = faker.helpers.arrayElement(books);

    fakeBorrows.push({
      id: i,
      user_id: user.id,
      book_id: book.id,
      borrow_date: knex.fn.now(),
    });
  }

  await knex('borrows').insert(fakeBorrows);
};
