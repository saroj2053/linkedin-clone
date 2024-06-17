const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
dotenv.config();
require("./config/db");
const User = require("./models/UserModel");
const Post = require("./models/PostModel");
const Comment = require("./models/CommentModel");
const authRoute = require("./routes/authRoute");
const postRoute = require("./routes/postRoute");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// routes
app.use("/api/user", authRoute);
app.use("/api/post", postRoute);

app.get("/", function (req, res) {
  res.json({
    success: "true",
    message: "Root Route is working",
  });
});

const PORT = process.env.PORT || 5555;

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`.underline.italic.white);
});
