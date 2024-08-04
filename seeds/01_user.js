const {faker} = require("@faker-js/faker");
exports.seed = async function (knex) {
  await knex('users').del();

  const fakeUsers = [];
  for (let i = 1; i <= 20; i++) {
    fakeUsers.push({
      id: i,
      name: faker.person.fullName()
    });
  }

  await knex('users').insert(fakeUsers);
};
