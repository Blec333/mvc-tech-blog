const router = require("express").Router();
const { User } = require("../../models");
const withAuth = require("../../utils/auth");


router.get("/", withAuth, async (req, res) => {
  try {
    const getUser = await User.findAll(req.body);
    res.json(getUser);
  } catch (err) {
    res.sendStatus(500).send(err);
  }
});

router.get('/:id', withAuth, async (req, res) => {
  try {
  const getUser = await User.findByPk(req.params.id, {
      
  });
  if (!getUser) {
    res.status(404).json({ message: 'No user found with that id!' });
    return;
  }
  res.status(200).json(getUser);
} catch (err) {
  res.status(500).json(err);
}
});

router.post("/", async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password,
    });
    req.session.save(() => {
      req.session.userId = newUser.id;
      req.session.username = newUser.username;
      req.session.loggedIn = true;
      res.json(newUser);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { username: req.body.username },
    });
    if (!userData) {
      res
        .status(400)
        .json({ message: "User name not found, please try again" });
      return;
    }
    const validPassword = userData.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password, please try again" });
      return;
    }
    req.session.save(() => {
      req.session.userId = userData.id;
      req.session.username = userData.username;
      req.session.loggedIn = true;

      res.json({
        user: userData,
        message: "Welcome you are now logged in!"
      });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;