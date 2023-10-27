import Auth from "../models/auth.model.js";
import { errorHandler } from "../utils/error.js";

export const authenticateUser = async (req, res, next) => {
  try {
    const { username, securityKey } = req.body;
    const validUser = await Auth.findOne({ username });
    if (!validUser) {
      return next(errorHandler(404, "Invalid credentials!"));
    }
    if (securityKey != validUser.securityKey) {
      return next(errorHandler(404, "Invalid credentials!"));
    }
    res.status(200).json({
        "message" : "User is loggen in"
    });
  } catch (error) {
    next(error);
  }
};

// export const createUser = async (req, res, next) => {
//   const admin = new Auth(req.body);
//   await admin.save();
//   res.status(201).json(admin);
// };
