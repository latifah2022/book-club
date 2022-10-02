const { User } = require('../models');
const { faker } = require('@faker-js/faker');

const _USER = [];
for (let i = 0; i < 5; i++) {
  _USER.push({
    name: faker.name.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password()
  });
}
const seedUser = () => User.bulkCreate(_USER);
module.exports = seedUser;

