const express = require("express");
const fetch = require("node-fetch");
const getItems = require("../../services/player.service");
const url = "https://www.easports.com/fifa/ultimate-team/api/fut/item";
const Player = require("../../models/Player");

const app = express();
app.use(express.json());

const getPages = async () => {
  return await fetch(url, { cache: "no-store" })
    .then((resp) => resp.json())
    .then((resp) => resp.totalPages);
};

const getPlayers = async () => {
  const pages = await getPages();
  let urls = [];

  for (let page = 1; page <= pages; page++) {
    urls.push(
      fetch(`${url}/?page=${page}`, { cache: "no-store" }).then((resp) =>
        resp.json()
      )
    );
  }

  let step = 100;

  while (urls.length > 0) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    let urlsToProcess = urls.splice(0, step);
    Promise.all(urlsToProcess)
      .then((resp) => resp.map((page) => page.items))
      .then((items) => loadPlayers(items))
      .catch((err) => {
        console.log("ERR", err);
      });
  }
};

const loadPlayers = (items) => {
  let players = items.flat(1).map((item) => {
    return {
      name: item.name,
      position: item.position,
      nation: item.nation.name,
      club: item.club.name,
    };
  });

  Player.insertMany(players)
    .then((playerCreated) => {
      console.log(`${playerCreated.length} players have been created`);
    })
    .catch((err) => {
      console.log("ERROR", err);
    });
};

// getPlayers().then();
// loadPlayers();

module.exports = getPlayers;
