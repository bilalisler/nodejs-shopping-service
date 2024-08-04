
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: process.env.DB_HOST || '127.0.0.1',
      user: process.env.DB_USER || 'root',
      port: process.env.DB_PORT || 3306,
      password: process.env.DB_PASSWORD || 'rootpassword',
      database: process.env.DB_NAME ||'library_management'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  },

  test: {
    client: 'mysql2',
    connection: {
      host: process.env.DB_HOST_TEST || 'localhost',
      user: process.env.DB_USER_TEST || 'root',
      port: process.env.DB_PORT_TEST || 3306,
      password: process.env.DB_PASSWORD_TEST || 'rootpassword',
      database: process.env.DB_NAME_TEST ||'library_management_test'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  }
};

