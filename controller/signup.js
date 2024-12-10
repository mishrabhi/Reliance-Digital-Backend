const bcrypt = require("bcrypt");
const User = require("../schema/user.model");

const signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    //Check if user already exist
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: `User already exists` });
    }
    //Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    //Create new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role,
    });
    //Save new user
    await newUser.save();
    res.status(201).json({ message: `User registered successfully` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = signup;
