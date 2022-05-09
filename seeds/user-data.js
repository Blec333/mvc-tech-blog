const { User } = require('../models');

const userdata = [
  {
    username: "John",
    password: "Password!1",
  },
  {
    username: "Jim",
    password: "Password!1",
  },
  {
    username: "Jack",
    password: "Password!1",
  },
  {
    username: "Jill",
    password: "Password!1",
  },
  {
    username: "Joe",
    password: "Password!1",
  },
];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;