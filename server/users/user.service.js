const users = require('../data/users');

async function authenticate({ username, password }) {
  const user = users.find(
    u => u.username === username && u.password === password
  );
  return user;
}

module.exports = {
  authenticate
};
