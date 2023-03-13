const express = require("express");
const blogController = require("../controllers/blogController");
const router = express.Router();

router.get("/blogs", blogController.blog_view_all);
router.get("/blog/:id", blogController.blog_view_one);
router.delete("/blog/:id", blogController.blog_delete);
router.post("/blog/add-new-blog", blogController.blog_create);
module.exports = router;
