import express from "express";
import { userRouter } from "./routes/userRouter.js";
import cors from "cors";

const server = express();
server.use(express.json());
server.use(cors());

//apis
server.use("/api/users", userRouter);
const PORT = 5059;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
