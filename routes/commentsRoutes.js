const router = require("express").Router();
const knex = require('knex')(require("../knexfile"));

// const commentController = require("../controllers/playersController");


//  --- make a new comment --- 
router.post("/newcomment", async (req, res) => {
  const { first_name, content } = req.body;
  if (!first_name) {
    return res.status(400).send("please fill in your name");
  }

  const newComment = {
    first_name,
    content,
   
  }

  try {
    await knex("comments").insert(newComment);
    res.status(201).send("Comment posted");
  } catch (error) {
    console.log(error);
    res.status(400).send("Failed to post comment");
  }
});

//  ---- Get all comments ----
router.get("/", async (req, res) => {
  try {
    const comments = await knex("comments").select();
    res.status(200).json(comments)
  } catch (err) {
    res.status(400).send('heeloheelohheel')
  }
});

module.exports = router;
  // Get all comments from the database
  
      // Send the comments as a response
      
    


// router
// .route("/:first_name")
// .get(commentController.index)


// router
// .route("/comment")
// .get(commentController.addComment)

// router
// .route("/:first_name")
// .post(commentController.addComment)
// .get(commentController.addComment)

// // GET route for retrieving comments
// router.get("/comments", async (req, res) => {
//   try {
//     // Query the comments table to retrieve all comments
//     const comments = await knex('comments').where("comments");
// console.log(comments)
//     // Return the comments in the response
//     res.json({ comments });
//   } catch (error) {
//     // Handle any errors that occurred during the query operation
//     console.error(error);
//     res.status(500).json({ error: "Failed to query comments" });
//   }
// });

// router.post("/comments/id", async (req, res) => {
//   // Extract the user_name and content from the request body
//   const { first_name, content, created_at } = req.body;
//   if(!first_name) {
//     return res.status(400).send("Please write correct name")
//   }
//   const newComment = {
//     first_name,
//     content,
//     created_at,
//   };

//   try {
//     // Insert the new comment into the comments table
//     await knex("comments").insert(newComment);
//     // might need to chnage json to send
//     res.status(200).send({ success: true });
//   } catch (error) {
//     console.error(error);
//     res.status(400).send({ error: "Failed to post comment" });
//   }
// });

// // router.post("/comments", postComment);

// // router.delete("/:id/comments/:commentId", deleteComment);

// module.exports = router;

// // const knex = require('knex')(require("../knexfile"));

// // POST route for creating a new comment
// // router.post('/comments', (req, res) => {
// //     // Extract the user_id and content from the request body
// //     const { user_name, content } = req.body;

// //     // Insert the new comment into the comments table
// //     knex('comments').insert({ first_name, content }).then(() => {
// //       // Return a success response
// //       res.json({ success: true });
// //     });
// //   });

// //   // GET route for retrieving comments
// //   router.get('/comments', (req, res) => {
// //     // Query the comments table to retrieve all comments
// //     knex.select().from('comments').then(comments => {
// //       // Return the comments in the response
// //       res.json({ comments });
// //     });
// //   })