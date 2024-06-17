const express = require("express");

const router = express.Router();

const { getPostsController } = require("../controllers/postController");

router.get("/post", getPostsController);


module.exports = router;