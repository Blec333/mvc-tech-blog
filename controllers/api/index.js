const router = require("express").Router();

const blogRoutes = require("./blog-routes.js");
const userRoutes = require("./user-routes.js");
const commentRoutes = require("./comment-routes.js");

router.use("/blogs", blogRoutes);
router.use("/users", userRoutes);
router.use("/comment", commentRoutes);

module.exports = router;