const router = require("express").Router();
const playersController = require("../controllers/playersController");

router
.route("/")
.get(playersController.index);

router
.route("/:id")
.get(playersController.singlePlayer)
.delete(playersController.deletePlayer);

module.exports = router;