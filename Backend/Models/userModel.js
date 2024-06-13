import mongoose from "mongoose";
// import { isEmail } from "validator";

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "Please enter your name"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Please enter your email"],
    // validate: ["Please enter a valid email address"],
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    minlength: [4, "Please the minimum length for password is 4"],
  },
});

const userModel = mongoose.model("users", userSchema);

export { userModel };
