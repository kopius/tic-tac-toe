'use strict';

const app = require('../app');

const createGameSuccess = function (data) {
  app.user.game = data.game;
  console.log("Game created successfully");
  console.log('app.user.game is ', app.user.game);
};

const createGameFailure = function (error) {
  console.log("Failed to create game");
  console.log(error);
};

const takeCellOneSuccess = function (data) {
  app.user.game = data.game;
  console.log("You took cell one!");
  console.log("app.user.game is ", app.user.game);
};

const takeCellOneFailure = function (error) {
  console.log(error);
  console.log("app.user.game is ", app.user.game);
};

module.exports = {
  createGameSuccess,
  createGameFailure,
  takeCellOneSuccess,
  takeCellOneFailure,
};
