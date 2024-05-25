const gamesRouter = require("express").Router();

const {
  getAllGames,
  checkIsTitleInArray,
  updateGamesArray,
  updateGamesFile,
  findGameById,
  deleteGame,
} = require("../middlewares/games");
const { sendAllGames, sendUpdatedGames } = require("../controllers/games");

gamesRouter.get("/games", getAllGames, sendAllGames);

gamesRouter.post(
  "/games",
  getAllGames,
  checkIsTitleInArray,
  updateGamesArray,
  updateGamesFile,
  updateGamesArray
);

gamesRouter.delete(
  "/games/:id",
  getAllGames,
  findGameById,
  deleteGame,
  updateGamesFile,
  updateGamesArray
);

module.exports = gamesRouter;
