const knex = require("knex") (require("../knexfile"));

exports.index = async (_req, res) => {
    try {
        const comments = await knex("comments");
        res.status(200).json(comments);
    } catch (err) {
        res.status(400).send(`Error retrieving player: ${err}`);
    }
};