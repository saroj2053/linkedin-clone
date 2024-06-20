const { generateResponse } = require("../utils/generateResponse");
const User = require("../models/UserModel");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwtToken = require("../utils/jwtToken");

exports.fetchAllUsersController = async (req, res) => {
  try {
    const users = await User.find({});
    if (users) {
      res.status(200).json({
        success: true,
        message: "Retrieved all users",
        users,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No users found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

//signUp controller

exports.signupController = async (req, res) => {
  if (!req.body) {
    return generateResponse(res, 400, false, "Invalid body Parameter");
  }

  const { name, email, password, avatar } = req.body;

  try {
    if (!name) {
      return generateResponse(res, 400, false, "Name is required");
    }
    if (!email) {
      return generateResponse(res, 400, false, "Email is required");
    }
    if (!password) {
      return generateResponse(res, 400, false, "Password is required");
    }

    // check if existing user
    const foundUser = await User.findOne({ email: email });
    if (foundUser) {
      return res.status(400).json({
        success: false,
        message: "Email already exists. please login..",
      });
    } else {
      if (!validator.isEmail(email)) {
        return generateResponse(res, 400, false, "Invalid email format");
      }

      if (password.trim().length < 6) {
        return generateResponse(
          res,
          400,
          false,
          "Password should be atleast 6 characters long"
        );
      }

      if (name.trim().length < 4) {
        return generateResponse(
          res,
          400,
          false,
          "Name should be atleast 4 characters long"
        );
      }

      const avatarName = name.replace(" ", "+");

      const avatar = `https://ui-avatars.com/api/?name=${avatarName}&background=0D8ABC&color=fff`;

      const hashedPassword = await bcrypt.hash(password, 10);

      const user = new User({
        name,
        email,
        password: hashedPassword,
        avatar,
      });

      user.save();

      const token = jwtToken(user._id, res);

      const userDto = {
        _id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        createdAt: user.createdAt,
      };

      return res.status(201).json({
        success: true,
        message: "User registered successfully",
        user: userDto,
        token,
      });
    }
  } catch (error) {
    console.log("Error in signupController", error);
    return generateResponse(res, 500, false, "Something went wrong");
  }
};

//signInController

exports.loginController = async (req, res) => {
  if (!req.body) {
    return generateResponse(res, 400, false, "Invalid body parameters");
  }

  const { email, password } = req.body;

  if (!email) {
    return generateResponse(res, 400, false, "Email is required");
  }

  if (!password) {
    return generateResponse(res, 400, false, "Password is required");
  }

  if (!validator.isEmail(email)) {
    return generateResponse(res, 400, false, "Invalid email format");
  }

  if (password.trim().length < 8) {
    return generateResponse(
      res,
      400,
      false,
      "Password should be atleast 8 characters long"
    );
  }

  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return generateResponse(res, 401, false, "Invalid Email or Password");
    } else {
      const isPasswordMatched = await bcrypt.compare(password, user.password);

      if (!isPasswordMatched) {
        return generateResponse(res, 401, false, "Invalid Email or Password");
      } else {
        const token = jwtToken(user._id, res);
        const userDto = {
          _id: user._id,
          name: user.name,
          email: user.email,
          avatar: user.avatar,
          createdAt: user.createdAt,
        };
        return res.status(200).json({
          success: true,
          message: "User logged in successfully",
          user: userDto,
          token,
        });
      }
    }
  } catch (error) {
    console.log("Error in loginController", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error!",
    });
  }
};
