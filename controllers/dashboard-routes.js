const router = require("express").Router();
const { Blog, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, (req, res) => {
  res.render("homeloggedin", {
    layout: "dashboard",
  });
});

router.get("/new", withAuth, (req, res) => {
  res.render("newblog", {
    layout: "dashboard",
  });
});

router.get("/blogs", withAuth, async (req, res) => {
  try {
    const blogs = (await Blog.findAll({
      where: { "userId": req.session.userId },
      include: [User]
    })).map((blog) =>
      blog.get({ plain: true })
    );
    res.render("blogsloggedin", { layout: "dashboard", blogs });
  } catch (err) {
    res.sendStatus(500).send(err);
  }
});

router.get("/blogs/:id", withAuth, async (req, res) => {
  try {
    const blog = (await Blog.findByPk(req.params.id, { include: [User], })).get({ plain: true });
    res.render("singleblogloggedin", { layout: "dashboard", ...blog });
  } catch (err) {
    res.sendStatus(500).send(err);
  }
});





module.exports = router;