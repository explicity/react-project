const Role = require('../helpers/role');

const users = [
  { id: 1, username: 'admin', password: 'admin', email: 'admin@gmail.com', role: Role.Admin },
  { id: 2, username: 'user', password: 'user', email: 'user@gmail.com', role: Role.User }
];

module.exports = users;
