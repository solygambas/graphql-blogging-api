import jwt from "jsonwebtoken";
import { tokenPhrase } from "../../config/config";

const generateToken = (userId) => {
  return jwt.sign({ userId }, tokenPhrase, {
    expiresIn: "7 days",
  });
};

export { generateToken as default };
