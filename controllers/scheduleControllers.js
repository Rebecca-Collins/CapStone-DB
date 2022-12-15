const knex = require("knex")(require("../knexfile"));

exports.index = async (_req, res) => {
  try {
    const scheduleData = await knex("schedule");
    res.status(200).send(scheduleData);
  } catch (err) {
    res.status(400).send(`Error retrieving schedule: ${err}`);
  }
};

exports.addPlayer = async (req, res) => {
  if (
    !req.body.id ||
    !req.body.home_team ||
    !req.body.away_team ||
    !req.body.game_date ||
    !req.body.game_location ||
    !req.body.game_time
  ) {
    return res
      .status(400)
      .send("Please make sure you provided all the required fields.");
  }

  try {
    const scheduleData = await knex("schedule").insert(req.body);
    const newScheduleURL = `schedule/${scheduleData[0]}`;
    res.status(201).location(newScheduleURL).send(newScheduleURL);
  } catch (error) {
    res.status(400).send(`Error creating player: ${error}`);
  }
};
