import jwt from "jsonwebtoken";
import User from "../models/user.models.js";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies("jwt-linked0n");
    if (!token) {
      return res
        .status(401)
        .json({ message: "unauthorized no token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({ message: "unauthroized - invalid token" });
    }

    const user = await User.findById(decoded.userId).select("-password");
  } catch (error) {}
};
