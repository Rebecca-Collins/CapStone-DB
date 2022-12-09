const router = require("express").Router();
const playersController = require("../controllers/playersController");

router
.route("/")
.get(playersController.index);

router
.route("/:id")
.get(playersController.singlePlayer)


module.exports = router;