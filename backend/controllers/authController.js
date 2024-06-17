const { generateResponse } = require("../utils/generateResponse");
const User = require("../models/UserModel");
const validator = require("validator");

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
      return res.status(200).json({
        success: true,
        message:
          "User with that email already exists..Please login or use another email",
        foundUser,
      });
    } else {
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

      const user = new User({
        name,
        email,
        password,
        avatar,
      });

      user.save();
      return res.status(201).json({
        success: true,
        message: "Successfully registered a user",
        user,
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
      if (!(user.password === password)) {
        return generateResponse(res, 401, false, "Invalid Email or Password");
      } else {
        return res.status(200).json({
          success: true,
          message: "User logged in successfully",
          user,
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
