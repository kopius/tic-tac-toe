'use strict';

const app = require('../app');

const createGameSuccess = function (data) {
  app.game = data.game;
  console.log("Game created successfully");
  console.log('app.game is ', app.game);
};

const createGameFailure = function (error) {
  console.log("Failed to create game");
  console.log(error);
};

module.exports = {
  createGameSuccess,
  createGameFailure,
};
