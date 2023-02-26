const knex = require("knex")(require("../knexfile"));
const { v4: uuidv } = require("uuid");
const fs = require("fs");


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
    res.status(201).send(`Player with id: ${req.params.id} has been deleted`);
  } catch (err) {
    res.status(400).send(`Error deleting Player ${req.params.id} ${err}`);
  }
};

exports.addPlayer = async (req, res) => {
  console.log(req.body);
  if (
    !req.body.first_name ||
    !req.body.last_name ||
    !req.body.age ||
    !req.body.height ||
    !req.body.jersey ||
    !req.body.description ||
    !req.body.position
  ) {
    return res.status(400).send("Please fill all required fields");
  }

  try {
    let imageData = req.files.img.data;
    let imageName = req.files.img.name;

    //append a UID to the image name so you don't ever have
    // a conflict (e.g. if 2 players upload "name".png)
    let fileName = uuidv() + "-" + imageName;
    let staticFilePath = "./public/images/" + fileName;
    let servedFilePath = "/images/" + fileName;
    let servedUrl = "http://localhost:2020" + servedFilePath;
    fs.writeFileSync(staticFilePath, imageData);

    const newPlayer = req.body;
    newPlayer.id = uuidv();
    newPlayer.img = servedUrl;
    const data = await knex("players").insert(newPlayer);
    const newPlayerURL = `/players/${data[0]}`;
    res.status(201).location(newPlayerURL).send(newPlayerURL);
  } catch (error) {
    res.status(400).send(`Error creating player: ${error}`);
  }
};

exports.editPlayer = async (req, res) => {
  if (
    !req.body.first_name ||
    !req.body.last_name ||
    !req.body.age ||
    !req.body.height ||
    !req.body.jersey ||
    !req.body.description ||
    !req.body.position
  ) {
    return res.status(400).send("Please fill all required fields");
  }

  try {
    let imageData = req.files.img.data;
    let imageName = req.files.img.name;

    let fileName = uuidv() + "-" + imageName;
    let staticFilePath = "./public/images" + fileName;
    let servedFilePath = "/thumbnail/" + fileName;
    let servedUrl = "http://localhost:2020" + servedFilePath;
    fs.writeFileSync(staticFilePath, imageData);

    const editPlayer = req.body;
    editPlayer.img = servedUrl;
    await knex("players").where({ id: req.params.id }).update(editPlayer);
    res.status(200).send(`Player with id: ${req.params.is} has been updated.`);
  } catch (err) {
    res.status(400).send(`Error updating Player ${req.params.id}: ${err}`);
  }
};
