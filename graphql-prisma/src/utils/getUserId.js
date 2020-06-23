import jwt from "jsonwebtoken";

import { tokenPhrase } from "../../config/config";

const getUserId = (request) => {
  const header = request.request.headers.authorization;
  if (!header) {
    throw new Error("Authentication required");
  }
  const token = header.replace("Bearer ", "");
  const decoded = jwt.verify(token, tokenPhrase);
  return decoded.userId;
};

export { getUserId as default };
