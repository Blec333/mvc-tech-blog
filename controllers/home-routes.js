const router = require("express").Router();
const { Blog, User } = require("../models/");

router.get("/", (req, res) => {
  console.log(req.session);
    res.render("home");
});

router.get("/blogs", async (req, res) => {
  try {
    const blogs = (await Blog.findAll({ include: [User],})).map((blog) =>
      blog.get({ plain: true })
    );
     res.render("blogs", { blogs });
  } catch (err) {
    res.sendStatus(500).send(err);
  }
});

router.get("/blogs/:id", async (req, res) => {
  try {
    const blog = (await Blog.findByPk(req.params.id, { include: [User],})).get({ plain: true });
    res.render("singleblog", { ...blog });
  } catch (err) {
    res.sendStatus(500).send(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/dashboard");
    return;
  }
  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/login");
    return;
  }
  res.render("signup");
});

module.exports = router;