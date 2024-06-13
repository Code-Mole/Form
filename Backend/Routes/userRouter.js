import express from "express";
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  removeUser,
  loginUser,
} from "../Controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.get("/:id", getUser);
userRouter.post("/", createUser);
userRouter.post("/login", loginUser);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", removeUser);

export { userRouter };
