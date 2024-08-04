const knex = require('@/src/server/bootstrap/database');
const request = require('supertest');
const app = require('@/src/index')

describe('GET /users/:id', () => {
  beforeAll(async () => {
    await knex.migrate.rollback();
    await knex.migrate.latest();
    await knex.seed.run();
  });

  afterAll(async () => {
    await knex.migrate.rollback();
    await knex.destroy();
  });

  it('should return user details for a valid user ID', async () => {
    const response = await request(app).get('/users/1');

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('id', 1);
  });

  it('should return 400 for an invalid user ID', async () => {
    const response = await request(app).get('/users/invalid-id');

    expect(response.statusCode).toBe(400);
    expect(response.body.errors.params.error).toBe('"id" must be a number');
  });

  it('should return 404 for a non-existing user ID', async () => {
    const response = await request(app).get('/users/9999');

    expect(response.statusCode).toBe(404);
    expect(response.body.message).toBe( 'User not found');
  });
});
