module.exports = async () => {
  // Stop MySQL container after all tests
  if (global.mysqlContainer) {
    await global.mysqlContainer.stop();
  }
};
