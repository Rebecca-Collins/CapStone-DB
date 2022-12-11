const router = require("express").Router();
const knex = require('knex')(require("../knexfile"));

// POST route for creating a new comment
router.post('/comments', (req, res) => {
    // Extract the user_id and content from the request body
    const { user_name, content } = req.body;
  
    // Insert the new comment into the comments table
    knex('comments').insert({ user_name, content }).then(() => {
      // Return a success response
      res.json({ success: true });
    });
  });
  
  // GET route for retrieving comments
  router.get('/comments', (req, res) => {
    // Query the comments table to retrieve all comments
    knexClient.select().from('comments').then(comments => {
      // Return the comments in the response
      res.json({ comments });
    });
  });
  
  module.exports = router;