require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const userRoutes = require("./routes/usersRoutes");
const playerRoutes = require("./routes/playersRoutes");
const scheduleRoutes = require("./routes/scheduleRoutes");
const commentsRoutes = require("./routes/commentsRoutes");
const PORT = process.env.PORT || 8080;
const fileupload = require('express-fileupload');

// --MIDDLEWARE--
app.use(cors({
  origin: "https://oceanside-united.netlify.app"
}));
app.use(express.json());
app.use(fileupload());
app.use("/images", express.static("./public/images"));

app.get("/", (req, res) => {
  res.send("Express is running!");
});

// --ROUTES---
app.use("/users", userRoutes);
app.use("/players", playerRoutes);
app.use("/schedule", scheduleRoutes);
app.use("/comments", commentsRoutes);

// --PORT---
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.use((_req, res, next) => {
  // res.setHeader("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Origin", "http://oceanside-united.netlify.app");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});