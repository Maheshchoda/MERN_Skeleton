import express from "express";
import bodyParser from "body-parser";
import cookeiParser from "cookie-parser";
import cors from "cors";
import compress from "compression";
import helmet from "helmet";
import Template from "./../template";

//user Routes
import userRoutes from "./routes/user.routes";
//auth Routes
import authRoutes from "./routes/auth.routes";

const app = express();

//configure the body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookeiParser());
app.use(compress());
app.use(helmet());
app.use(cors());

app.use("/", userRoutes);
app.use("/", authRoutes);

app.get("/", (req, res) => {
  res.status(200).send(Template());
});

app.use((err, req, res, next) => {
  if (err.name === "UnauhtorizedError") {
    res.status(401).json({ error: err.name + ":" + err.message });
  }
});
export default app;
