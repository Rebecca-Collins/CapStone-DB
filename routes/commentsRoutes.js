const router = require("express").Router();
const knex = require("knex")(require("../knexfile"));

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
    res.status(400).send("heeloheelohheel");
  }
});

module.exports = router;