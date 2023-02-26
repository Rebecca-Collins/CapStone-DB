const router = require("express").Router();
const playersController = require("../controllers/playersController");

router.route("/")
.get(playersController.index)
.post(playersController.addPlayer)

router
  .route("/:id")
  .get(playersController.singlePlayer)
  .delete(playersController.deletePlayer)
  

module.exports = router;
