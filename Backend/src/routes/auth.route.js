const express = require("express");
const {
  register,
  login,
  logout,
  getMeController,
} = require("../controllers/auth.controller");
const { authUser } = require("../middlewares/auth.middleware");

const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.get("/logout", logout);
authRouter.get("/get-me", authUser, getMeController);

module.exports = authRouter;
