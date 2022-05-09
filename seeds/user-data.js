const { User } = require('../models');

const userdata = [
  {
    username: "asdf",
    password: "asdfasdf",
  },
  {
    username: "John",
    password: "asdfasdf",
  },
  {
    username: "Jim",
    password: "asdfasdf",
  },
  {
    username: "Jack",
    password: "asdfasdf",
  },
  {
    username: "Jill",
    password: "asdfasdf",
  },
  {
    username: "Joe",
    password: "asdfasdf",
  },
];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;