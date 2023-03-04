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



// Create a MySQL connection pool using environment variables
const pool = mysql.createPool({
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});

// Define a route to handle database queries
app.get('/users', (req, res) => {
  // Get a connection from the pool
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error connecting to MySQL database: ', err);
      res.status(500).send('Internal server error');
    } else {
      // Execute a query on the database
      connection.query('SELECT * FROM users', (error, results) => {
        // Release the connection back to the pool
        connection.release();
        if (error) {
          console.error('Error querying MySQL database: ', error);
          res.status(500).send('Internal server error');
        } else {
          res.send(results);
        }
      });
    }
  });
});







// --MIDDLEWARE--
app.use(cors());
// app.use(cors({
//   origin: "https://oceanside-united.netlify.app"
// }));

app.use(express.json());
app.use(fileupload());
app.use("/images", express.static("./public/images"));

app.get("/", (req, res) => {
  res.send("Express is running! REBECCA");
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

// app.use((_req, res, next) => {
//   // res.setHeader("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Origin", "http://oceanside-united.netlify.app");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.get('*', (req, res) => {
  res.sendFile('index.js',{root: __dirname + './../build'});
});