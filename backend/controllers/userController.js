// @desc Register a new user
// @route /api/users
// @access Public
export const registerUser = (req, res) => {
  const { name, email, password } = req.body;

  //   Validation
  if (!name || !email || !password) {
    return res.status(400);
    throw new Error("Ple");
  }
  res.send("Register User");
};

// @desc Login a new user
// @route /api/users/login
// @access Public
export const loginUser = (req, res) => {
  res.send("Login User");
};
