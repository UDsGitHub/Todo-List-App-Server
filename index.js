import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import todoRoutes from "./routes/user.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();

app.use(express.json());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(cookieParser("session", { sameSite: "none", secure: false }));

// WELCOME
app.get("/", (req, res) => {
  res.send("Welcome to Todo App Server");
});

// ROUTES
app.use("/auth", authRoutes);
app.use("/user", todoRoutes);

// MONGODB CONNECTION AND APP START
const PORT = process.env.PORT || 5001;
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Express server running on port ${PORT}`)
    );
  })
  .catch((error) => console.log(`${error}. Did not connect`));
