const express = require("express");
const players = require("./routes/players.routes");
const team = require("./routes/team.routes");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
require("dotenv/config");

mongoose.connect(
  process.env.MONGO_CONNECTION,
  { useNewUrlParser: true },
  () => {
    console.log("Connected to the database");
  }
);

const PORT = process.env.PORT || 3080;

app.use("/api/v1", players);
app.use("/api/v1", team);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
