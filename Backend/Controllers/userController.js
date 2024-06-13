import { userModel } from "../Models/userModel.js";
import bcrypt from "bcrypt";
// get
const getUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    return res.status(200).json({ message: "successful", users });
  } catch (error) {
    return res.status(404).send("Data not found");
    console.log(error);
  }
};
// get by id
const getUser = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);
    return res.status(200).json({ message: "successful", user });
  } catch (error) {
    return res.status(404).send("user not found");
    console.log(error);
  }
};
// post
const createUser = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    if (!userName || !email || !password) {
      return res.status(400).send("All fields are required");
    }
    const hashedpassword = await bcrypt.hash(password, 10);
    console.log(hashedpassword);
    const user = await userModel.create({
      userName,
      email,
      password: hashedpassword,
    });
    return res.status(201).json({ message: "successful", user });
  } catch (error) {
    return res.status(500).send("server error");
    console.log(error);
  }
};
const loginUser = (req, res) => {
  res.send("login");
};
// put
const updateUser = (req, res) => {
  return res.send(`update user by Id ${req.params.id} `);
};
// delete
const removeUser = (req, res) => {
  return res.send(`remove user by Id ${req.params.id} `);
};

export { getUsers, getUser, createUser, updateUser, removeUser, loginUser };
