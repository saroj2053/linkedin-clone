const express = require("express");
const router = express.Router();

const {
  fetchAllUsersController,
  loginController,
  signupController,
} = require("../controllers/authController");

router.get("/", fetchAllUsersController);
router.post("/signup", signupController);
router.post("/login", loginController);

module.exports = router;
