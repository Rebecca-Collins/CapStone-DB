const router = require("express").Router();
const scheduleController = require("../controllers/scheduleControllers");

router
  .route("/")
  .get(scheduleController.index)
  .post(scheduleController.addPlayer);

module.exports = router;
