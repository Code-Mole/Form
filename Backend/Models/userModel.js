import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    require: [true, "Please enter your name"],
  },
  email: {
    type: String,
    require: [true, "Please enter your email"],
  },
  password: {
    type: String,
    require: [true, "Please enter your password"],
  },
});

const userModel = mongoose.model("users", userSchema);

export { userModel };
