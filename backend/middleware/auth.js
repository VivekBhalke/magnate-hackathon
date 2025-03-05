// authMiddleware.js
// const clerk = require("./clerkConfig");
import clerk from "../clerk.js"
async function authMiddleware(req, res, next) {
  try {
    const token = req.headers.authorization?.split("Bearer ")[1];

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const session = await clerk.sessions.verifyToken(token);

    if (!session) {
      return res.status(401).json({ message: "Invalid token" });
    }

    const user = await clerk.users.getUser(session.userId);
    req.user = user; 
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "Authentication failed" });
  }
}

module.exports = authMiddleware;
