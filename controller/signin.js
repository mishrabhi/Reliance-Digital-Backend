const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../schema/user.model");

const ACCESS_TOKEN_SECRET = "";
const REFRESH_TOKEN_SECRET = "";

const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    //Find the user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: `User not found` });
    }
    //Compare password with hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: `Invalid credentials` });
    }
    //Generate token
    const accessToken = jwt.sign(
      { id: user._id, role: user.role },
      ACCESS_TOKEN_SECRET,
      { expiresIn: "2h" }
    );
    const refreshToken = jwt.sign({ id: user._id }, REFRESH_TOKEN_SECRET, {
      expiresIn: "2d",
    });

    res
      .status(200)
      .json({ message: `Signin successful`, accessToken, refreshToken });
  } catch (error) {
    res.status(500).json({ message: `error.message` });
  }
};

module.exports = signin;
