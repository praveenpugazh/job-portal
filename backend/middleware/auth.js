import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const auth = (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      next();
    } catch (error) {
      res.status(401).json({ error: "token not present" });
    }
  }
  res.status(401).json({ error: "Invalid token" });
};
