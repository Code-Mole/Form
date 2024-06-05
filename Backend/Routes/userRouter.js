import express from "express";
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  removeUser,
} from "../Controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.get("/:id", getUser);
userRouter.post("/", createUser);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", removeUser);

export { userRouter };
