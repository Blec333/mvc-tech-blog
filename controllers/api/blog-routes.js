const router = require("express").Router();
const { Blog, Comment, User } = require("../../models");
const withAuth = require("../../utils/auth");


router.get("/", withAuth, async (req, res) => {
  try {
    const getBlog = await Blog.findAll({
        attributes: [
          'id', 
          'contents', 
          'title', 
          'created_at',
      ],
      order: [['created_at', 'DESC']],
      include: [
          {
              model: Comment,
              attributes: ['id', 'comment_text', 'user_id', 'blog_id', 'created_at'],
              include: {
                  model: User,
                  attributes: ['username']
              }
          },
          {
              model: User,
              attributes: ['username']
          },
      ],
  });
    res.json(getBlog);
  } catch (err) {
    res.sendStatus(500).send(err);
  }
});

router.get('/:id', withAuth, async (req, res) => {
  try {
    const getBlog = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Comment,
          separate: true,
          order: [["created_at", "DESC"]],
          include: [{ model: User, attributes: ["username"] }],
        },
      ],
    });
    if (!getBlog) {
      res.status(404).json({ message: 'No blog found with that id!' });
      return;
    }
    res.status(200).json(getBlog);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", withAuth, async (req, res) => {
  try {
    const newBlog = await Blog.create({
      title: req.body.title,
      contents: req.body.contents,
      userId: req.session.userId,
    });
    res.json(newBlog);
  } catch (err) {
    res.sendStatus(500).send(err);
  }
});

router.put("/:id", withAuth, async (req, res) => {
  try {
    const updateBlog = await Blog.update(req.body);
    res.json(updateBlog);
  } catch (err) {
    res.sendStatus(500).send(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const deleteBlog = await Blog.destroy(req.body);
    res.json(deleteBlog);
  } catch (err) {
    res.sendStatus(500).send(err);
  }
});

module.exports = router;