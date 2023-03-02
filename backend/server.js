import express from "express";
import * as dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the Support Desk API" });
});

app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
