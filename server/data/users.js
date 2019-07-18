const uuidv4 = require('uuid/v4');
const Role = require('../helpers/role');

const users = [
  { id: uuidv4(), username: 'admin', password: 'admin', email: 'admin@gmail.com', role: Role.Admin },
  { id: uuidv4(), username: 'user', password: 'user', email: 'user@gmail.com', role: Role.User },
  { id: uuidv4(), username: 'john', password: 'doe', email: 'johndoe@gmail.com', role: Role.User }
]; 
 
module.exports = users;
 