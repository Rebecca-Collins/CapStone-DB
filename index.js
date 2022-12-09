require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const userRoutes = require("./routes/usersRoutes");
const playerRoutes = require("./routes/playersRoutes");
const PORT = process.env.PORT || 2020;


// --MIDDLEWARE--
app.use(cors());
app.use(express.json());
app.use("/images", express.static("./public/images"));

app.get("/", (req, res) => {
    res.send("Express is running!");
});

// --ROUTES---
app.use("/users", userRoutes);
app.use("/players", playerRoutes);



// --PORT---
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
