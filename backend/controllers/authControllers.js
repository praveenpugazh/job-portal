import User from "../models/UserModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
//Login user and get Token
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  let user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ msg: "user does not exists" });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(400).json({ msg: "invalid credentials" });
  }
  const payload = {
    user: {
      id: user._id,
    },
  };

  jwt.sign(
    payload,
    process.env.JWT_SECRET,
    { expiresIn: 360000 },
    (err, token) => {
      if (err) throw err;
      res.json({ token });
    }
  );
};

//Signup user and generate token

export const signUpUser = async (req, res) => {
  const { name, email, password, isRecruiter } = req.body;
  let user = await User.findOne({ email });
  if (user) {
    return res.status(400).json({ msg: "user already exists" });
  }
  user = new User({
    name,
    email,
    password,
    isRecruiter,
  });
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(password, salt);
  user.save();
  const payload = {
    user: {
      id: user._id,
    },
  };

  jwt.sign(
    payload,
    process.env.JWT_SECRET,
    { expiresIn: 360000 },
    (err, token) => {
      if (err) throw err;
      res.json({ token });
    }
  );
};

export const getUserProfile = async (req, res) => {
  let user = await User.findById(req.user.id).select("-password");
  if (!user) {
    return res.status(401).json({ msg: "Forbidden" });
  }
  return res.json({ user });
};
