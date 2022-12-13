const knex = require("knex") (require("../knexfile"));

exports.index = async (_req, res) => {
    try {
        const playerData = await knex("players");
        res.status(200).json(playerData);
    } catch (err) {
        res.status(400).send(`Error retrieving player: ${err}`);
    }
};

exports.singlePlayer = async (req, res) => {
    try {
      if (!req.params.id) {
        res.status(400).send(`Player id not provided!`);
      }
      const playerData = await knex("players").where({
        id: req.params.id,
      });
  
      res.status(200).json(playerData[0]);
    } catch (err) {
      res.status(400).send(`Error retrieving player: ${req.params.id}`);
    }
  };

  exports.deletePlayer = async (req, res) => {
    try {
        await knex("players").delete().where({ id: req.params.id });
        res.status(201).send(
            `Player with id: ${req.params.id} has been deleted`
        );
    } catch (err) {
        res.status(400).send(
            `Error deleting Player ${req.params.id} ${err}`
        )
    };
  }