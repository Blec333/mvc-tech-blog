const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");


router.get("/", withAuth, async (req, res) => {
    try {
      const getComment = await Comment.findAll(req.body);
      res.json(getComment);
    } catch (err) {
      res.sendStatus(500).send(err);
    }
  });
  
  router.get('/:id', withAuth, async (req, res) => {
    try {
    const getComment = await Comment.findByPk(req.params.id, {

    });
    if (!getComment) {
      res.status(404).json({ message: 'No comment found with that id!' });
      return;
    }
    res.status(200).json(getComment);
  } catch (err) {
    res.status(500).json(err);
  }
  });

router.post("/", withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            title: req.body.title,
            contents: req.body.contents,
            userId: req.session.userId,
        });
        res.json(newComment);
    } catch (err) {
        res.sendStatus(500).send(err);
    }
});

router.put("/:id", withAuth, async (req, res) => {
    try {
        const updateComment = await Comment.update(req.body);
        res.json(updateComment);
    } catch (err) {
        res.sendStatus(500).send(err);
    }
});

router.delete("/:id", withAuth, async (req, res) => {
    try {
        const deleteComment = await Comment.destroy(req.body);
        res.json(deleteComment);
    } catch (err) {
        res.sendStatus(500).send(err);
    }
});

module.exports = router;