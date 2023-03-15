const express = require("express");
const blogController = require("../controllers/blogController");
const requireAuth = require("../middleware/requireAuth")
const router = express.Router();

router.use(requireAuth)
router.get("/blogs", blogController.blog_view_all);
router.get("/blogs/author",blogController.blog_view_author)
router.get("/blog/:id", blogController.blog_view_one);
router.delete("/blog/:id", blogController.blog_delete);
router.put("/blog/:id", blogController.blog_update);
router.post("/blog/add-new-blog", blogController.blog_create);
module.exports = router;
