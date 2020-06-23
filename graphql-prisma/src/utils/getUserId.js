import jwt from "jsonwebtoken";

import { tokenPhrase } from "../../config/config";

const getUserId = (request, requireAuth = true) => {
  const header = request.request.headers.authorization;
  if (header) {
    const token = header.replace("Bearer ", "");
    const decoded = jwt.verify(token, tokenPhrase);
    return decoded.userId;
  }
  if (requireAuth) {
    throw new Error("Authentication required");
  }
  return null;
};

export { getUserId as default };
