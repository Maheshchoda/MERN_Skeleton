import express from "express";
import path from "path";
import bodyParser from "body-parser";
import cookeiParser from "cookie-parser";
import cors from "cors";
import compress from "compression";
import helmet from "helmet";
import devBundle from "./devbundle"; //Only for development
import Template from "./../template";
import userRoutes from "./routes/user.routes";
import authRoutes from "./routes/auth.routes";

const CURRENT_WORKING_DIR = process.cwd();
const app = express();

devBundle.compile(app); //Only for development

//configure the body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cookeiParser());
app.use(compress());
//securing apps by setting various HTTP headers
app.use(helmet());
//cors -Cross origin Resource Sharing
app.use(cors());

app.use("/dist", express.static(path.join(CURRENT_WORKING_DIR, "dist")));

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
