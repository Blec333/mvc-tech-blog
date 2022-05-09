const { Blog } = require('../models');

const blogdata = [
  {
    title: "blog title #1",
    contents: "blog contents #1",
    datePosted: "01/01/1969",
    userId: 1,
  },
  {
    title: "blog title #2",
    contents: "blog contents #2",
    datePosted: "01/01/1969",
    userId: 2,
  },
  {
    title: "blog title #3",
    contents: "blog contents #3",
    datePosted: "01/01/1969",
    userId: 3,
  },
  {
    title: "blog title #4",
    contents: "blog contents #4",
    datePosted: "01/01/1969",
    userId: 4,
  },
];

const seedBlog = () => Blog.bulkCreate(blogdata);

module.exports = seedBlog;