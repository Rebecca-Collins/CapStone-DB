const router = require("express").Router();
const knex = require("knex")(require("../knexfile"));

// const knex = require('knex')(require("../knexfile"));

// POST route for creating a new comment
// router.post('/comments', (req, res) => {
//     // Extract the user_id and content from the request body
//     const { user_name, content } = req.body;

//     // Insert the new comment into the comments table
//     knex('comments').insert({ first_name, content }).then(() => {
//       // Return a success response
//       res.json({ success: true });
//     });
//   });

//   // GET route for retrieving comments
//   router.get('/comments', (req, res) => {
//     // Query the comments table to retrieve all comments
//     knex.select().from('comments').then(comments => {
//       // Return the comments in the response
//       res.json({ comments });
//     });
//   });

router.post("/comments", async (req, res) => {
  // Extract the user_name and content from the request body
  const { first_name, content } = req.body;

  try {
    // Insert the new comment into the comments table
    await knex("comments").insert({ first_name, content });
    // might need to chnage json to send
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Failed to post comment" });
  }
});

// GET route for retrieving comments
router.get("/comments", async (req, res) => {
  try {
    // Query the comments table to retrieve all comments
    const comments = await knex.select('user').from("comments");

    // Return the comments in the response
    res.json({ comments });
  } catch (error) {
    // Handle any errors that occurred during the query operation
    console.error(error);
    res.status(500).json({ error: "Failed to query comments" });
  }
});

module.exports = router;
