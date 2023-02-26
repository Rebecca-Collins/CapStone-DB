const knex = require("knex")(require("../knexfile"));

//--- Delete comment ----

exports.deleteComment = async (req, res) => {
    try {
      await knex("comments").delete().where({ id: req.params.id });
      res.status(201).send(`comment with id: ${req.params.id} has been deleted`);
    } catch (err) {
      res.status(400).send(`Error deleting comment ${req.params.id} ${err}`);
    }
  };

  