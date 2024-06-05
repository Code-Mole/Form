import { userModel } from "../Models/userModel.js";
import bcrypt from "bcrypt";
// get
const getUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).json({ message: "successful", users });
  } catch (error) {
    res.status(404).send("Data not found");
    console.log(error);
  }
};
// get by id
const getUser = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);
    res.status(200).json({ message: "successful", user });
  } catch (error) {
    res.status(404).send("user not found");
    console.log(error);
  }
};
// post
const createUser = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    if (!userName || !email || !password) {
      res.status(400).send("All fields are required");
    }
    const hashedpassword = await bcrypt.hash(password, 10);
    console.log(hashedpassword);
    const user = await userModel.create({
      userName,
      email,
      password: hashedpassword,
    });
    res.status(201).json({ message: "successful", user });
  } catch (error) {
    res.status(500).send("server error");
    console.log(error);
  }
};
// put
const updateUser = (req, res) => {
  res.send(`update user by Id ${req.params.id} `);
};
// delete
const removeUser = (req, res) => {
  res.send(`remove user by Id ${req.params.id} `);
};

export { getUsers, getUser, createUser, updateUser, removeUser };
