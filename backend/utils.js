import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ id }, '06x29iK%dJ96D2SH', { expiresIn: "1d" });
};

export default generateToken;
