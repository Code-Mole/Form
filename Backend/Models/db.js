import mongoose from "mongoose";
try {
  await mongoose.connect(
    "mongodb+srv://MoleWeb:Ask23Mum%60sSon@cluster0.xwl0jz7.mongodb.net/ProductsDB"
  );
  console.log("Database is connected successfully");
} catch (error) {
  console.log(error);
}
