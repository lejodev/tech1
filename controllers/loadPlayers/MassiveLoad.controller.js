const express = require("express");
const fetch = require("node-fetch");
const getItems = require("../../services/player.service");
const url = "https://www.easports.com/fifa/ultimate-team/api/fut/item";
const Player = require("../../models/Player");

const app = express();
app.use(express.json());

async function getPages() {
  return await fetch(url, { cache: "no-store" })
    .then((resp) => resp.json())
    .then((resp) => resp.totalPages);
  // return 1;
}

const getPlayers = async () => {
  const pages = await getPages();
  let urls = [];
  let items = [];
  console.log(pages)
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
    .then((resp) => {
      console.log(resp.length);
      return resp.map((page) => {
        console.log(page);
        return page.items;
      });
    })
    .catch((err) => {
      console.log("ERR", err);
    });
};


const loadPlayers = async () => {
  const items = await getPlayers();
  console.log(items)
  // let players = [];
  // items.forEach((player) => {
  //   const newPlayer = {
  //     name: player.name,
  //     position: player.position,
  //     nation: player.nation,
  //     club: player.club.abbrName,
  //   };
  //   players.push(newPlayer);

  //   // console.log("PLAYER", newPlayer);
  //   // const Player = new Player({
  //   //   name:
  //   // })
  // });
  // Player.insertMany(players)
  //   .then((resp) => {
  //     console.log("User successfully created", resp);
  //   })
  //   .catch((err) => {
  //     console.log("ERROR", err);
  //   });
};

loadPlayers();

module.exports = getPlayers;
