import asyncHandler from "express-async-handler";

// @desc Register a new user
// @route /api/users
// @access Public
export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  //   Validation
  if (!name || !email || !password) {
    return res.status(400).json({ message: "Please include all fields!" });
  }
  res.send("Register User");
});

// @desc Login a new user
// @route /api/users/login
// @access Public
export const loginUser = asyncHandler(async (req, res) => {
  res.send("Login User");
});
