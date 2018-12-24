import config from "./../config/config";
import app from "./express";
import mongoose from "mongoose";

//mongoose setup
mongoose.Promise = global.Promise;
mongoose
  .connect(
    config.mongoUri,
    { useCreateIndex: true, useNewUrlParser: true }
  )
  .then(() => {
    console.log(`Connected to the Database`);
  })
  .catch(err => {
    console.log(`There is some error with Database ${err}`);
  });

app.listen(config.port, err => {
  if (err) console.log(err);
  console.info("server started at port %s", config.port);
});
