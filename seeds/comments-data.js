const { Comment } = require('../models');

const commentsData = [
    {
        commentText: "this is a comment from user 1",
        userId: 1,
        blogId: 1
    },
    {
        commentText: "this is a comment from user 2",
        userId: 2,
        blogId: 2
    },
    {
        commentText: "this is a comment from user 3",
        userId: 3,
        blogId: 3
    },
    {
        commentText: "this is a comment from user 4",
        userId: 4,
        blogId: 4
    },
    {
        commentText: "this is a comment from user 5",
        userId: 5,
        blogId: 5
    },
    {
        commentText: "this is a comment from user 6",
        userId: 6,
        blogId: 6
    }
];

const seedComments = () => Comment.bulkCreate(commentsData);

module.exports = seedComments;