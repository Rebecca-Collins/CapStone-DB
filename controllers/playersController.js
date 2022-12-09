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
        const playerData = await knex("players").where({
            id: req.params.id,
        });
        if (playerData.length === 0) {
            res.status(404).send(
                `Player with id: ${req.params.id} does not exist!`
            );
        }
        res.status(200).json(playerData[0]);
    } catch (err) {
        res.status(400).send(`Error retrieving player: ${req.params.id}`);
    }
}


exports.addPlayer = async (req, res) => {
    if (
        !req.body.id ||
        !req.body.first_name ||
        !req.body.last_name  ||
        !req.body.age||
        !req.body.height||
        !req.body.jersey||
        !req.body.descrition||
        !req.body.position ||
        !req.body.img 
    ) {
        return res
            .status(400)
            .send(
                "Please make sure you provided all the required fields."
            );
    }

    try {
        const playerData = await knex("players").insert(req.body);
        const newPlayerURL = `players/${playerData[0]}`;
        res.status(201).location(newPlayerURL).send(newPlayerURL);
    } catch (error) {
        res.status(400).send(`Error creating player: ${error}`);
    }
};