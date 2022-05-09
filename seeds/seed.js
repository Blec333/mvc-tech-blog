const sequelize = require("../config/connection");
const seedUser = require("./user-data");
const seedBlog = require("./blog-data");
const seedComment = require("./comments-data");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedBlog();

  await seedComment();

  process.exit(0);
};

seedAll();