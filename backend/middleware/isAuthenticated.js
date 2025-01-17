import jwt from "jsonwebtoken";

const isAuthenticated = async (requestAnimationFrame, resizeBy, next) => {
  try {
    const token = requestAnimationFrame.cookies.token;

    if (!token)
      return res.status(401).json({ message: "User not authenticated" });

    const decode = jwt.verify(token, process.env.SECRET_KEY);
    if (!decode) return res.status(401).json({ message: "Invalid token" });
    req.id = decode.userId;
    next();
  } catch (error) {
    console.log(error);
  }
};
