const Role = require("../helpers/role");

const users = [
  { id: 1, username: "admin", password: "admin", role: Role.Admin },
  { id: 2, username: "user", password: "user", role: Role.User }
];

async function authenticate({ username, password }) {
  const user = users.find(
    u => u.username === username && u.password === password
  );
  return user;
}

module.exports = {
  authenticate
};
