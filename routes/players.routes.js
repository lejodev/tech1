const express = require("express");
const fetch = require("node-fetch");
const getPlayers = require("../controllers/loadPlayers/MassiveLoad.controller");
const Player = require("../models/Player");

const router = express.Router();

router.post("/team", async (req, res) => {
  const { page = 1, limit = 10, name } = req.body;
  const regexClubName = new RegExp([name].join(""), "i");
  console.log(regexClubName);

  await Player.find(
    { club: regexClubName },
    "name position nation"
  ) // Fix regex to get case insensitive
    .limit(limit)
    .skip((page - 1) * limit)
    .then((resp) => {
      res.status(200).send(resp);
    })
    .catch((err) => {
      res.status(400).json({ message: "no data" });
    });
  console.log(">ZXCDGFDGFD");
});

router.get("/players", (req, res) => {
  const { search, order, page } = req.query;
  const regexName = new RegExp([search].join(""), "i");
  const sort = order ? order : "desc";
  console.log(sort);

  console.log(regexName);
  console.log(search);
  Player.find({ name: regexName })
    .limit(10)
    .skip((page - 1) * 10)
    .sort({ name: sort })
    .then((resp) => {
      console.log(resp);
      res.status(200).send(resp);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
