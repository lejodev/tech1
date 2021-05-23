const express = require("express");
const fetch = require("node-fetch");
const getItems = require("../../services/player.service");
const url = "https://www.easports.com/fifa/ultimate-team/api/fut/item";
const Player = require("../../models/Player");

const app = express();
app.use(express.json());

async function getPages() {
  // return await fetch(url, { cache: "no-store" })
  //   .then((resp) => resp.json())
  //   .then((resp) => resp.totalPages);
  return 2;
}

const getPlayers = async () => {
  const pages = await getPages();
  let urls = [];
  try {
    for (let page = 1; page <= pages; page++) {
      urls.push(
        fetch(`${url}/?page=${page}`, { cache: "no-store" }).then((resp) =>
          resp.json()
        )
      );
    }
  } catch (error) {
    console.log("Error", error);
  }

  // Retrive items

  return await Promise.all(urls)
    .then((resp) => resp.map((page) => page.items))
    .catch((err) => {
      console.log("ERR", err);
    });
};

const loadPlayers = async () => {
  const items = await getPlayers();

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

loadPlayers();

module.exports = getPlayers;
