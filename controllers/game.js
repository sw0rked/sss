const { readData, writeData } = require("../utils/data/parse");
const sendAllGames = async (req, res) => {
  res.send(req.games);
};
const sendUpdatedGames = async (req, res) => {
  res.send({
    games: req.games,
    updated: req.updatedObject,
  });
};
module.exports = {
  sendAllGames,
  sendUpdatedGames,
};
