const {MySqlContainer} = require("@testcontainers/mysql");
const MYSQL_IMAGE = 'mysql:8.0';

const startMysqlContainer = async () => {
  return new MySqlContainer(MYSQL_IMAGE)
    .start();
};

module.exports = async () => {
  global.mysqlContainer = await startMysqlContainer();

  process.env.PORT = 3001;
  process.env.ENV = "test";

  process.env.DB_HOST_TEST = global.mysqlContainer.getHost();
  process.env.DB_PORT_TEST = global.mysqlContainer.getPort();
  process.env.DB_NAME_TEST = global.mysqlContainer.getDatabase();
  process.env.DB_USER_TEST = global.mysqlContainer.getUsername();
  process.env.DB_PASSWORD_TEST = global.mysqlContainer.getRootPassword();
};
