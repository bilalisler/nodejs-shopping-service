const { faker } = require('@faker-js/faker');

exports.seed = async function (knex) {
  await knex('books').del();

  const fakeBooks = [];
  for (let i = 1; i <= 20; i++) {
    fakeBooks.push({
      id: i,
      name: faker.person.fullName(),
      average_rating: faker.number.int({
        max: 10
      }),
    });
  }

  await knex('books').insert(fakeBooks);
};
