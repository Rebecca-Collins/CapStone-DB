const router = require("express").Router();
const knex = require("knex")(require("../knexfile"));
const commentsController = require("../controllers/commentsController")
//  --- make a new comment ---
router.post("/newcomment", async (req, res) => {
  const { first_name, content } = req.body;
  if (!first_name) {
    return res.status(400).send("please fill in your name");
  }

  const newComment = {
    first_name,
    content,
  };

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
    res.status(200).json(comments);
  } catch (err) {
    res.status(400).send("Failed to get comments");
  }
});



//----- Like comments ---- 

router.post("/comments/:id/like", async (req, res) => {
  try {
    const commentId = req.params.id;
    const likes = req.body.likes;  // get the current number of likes from the request body
    const updatedLikes = await knex("comments")
      .where("id", commentId)
      .update({ likes });  // update the likes column in the database
    res.json({ likes: updatedLikes });  // send the updated number of likes in the response
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error liking comment" });
  }
});

// router.post("/comments/:id/like", async (req, res) => {
//   try {
//     const commentId = req.params.id;
//     const likes = await knex("comments")
//       .where("id", commentId)
//       .increment("likes", 1);
//     res.json({ likes });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Error liking comment" });
//   }
// });



router
.route("/:id")
.delete(commentsController.deleteComment)



module.exports = router;