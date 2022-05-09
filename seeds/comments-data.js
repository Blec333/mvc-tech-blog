const { Comment } = require('../models');

const commentsData = [
    {
        comments: "this is a comment from user 1",
        userId: 1,
        blogId: 1
    },
    {
        comments: "this is a comment from user 2",
        userId: 2,
        blogId: 2
    },
    {
        comments: "this is a comment from user 3",
        userId: 3,
        blogId: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentsData);

module.exports = seedComments;