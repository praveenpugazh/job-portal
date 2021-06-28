import express from "express";
import {
  loginUser,
  signUpUser,
  getUserProfile,
} from "../controllers/authControllers.js";
import { auth } from "../middleware/auth.js";
const router = express.Router();

router.post("/login", loginUser);
router.post("/signup", signUpUser);
router.get("/userprofile", auth, getUserProfile);
export default router;
