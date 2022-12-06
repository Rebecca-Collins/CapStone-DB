require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const userRoutes = require("./routes/users");
const PORT = process.env.PORT || 2020;


// --MIDDLEWARE--
app.use(cors());
app.use(express.json());

// --ROUTES---
// app.use("/players");
app.use("/users", userRoutes);



// --PORT---
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
