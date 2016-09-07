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

const updateGameSuccess = function (data) {
  app.user.game = data.game;
  console.log("Game updated successfully");
  console.log("app.user.game is ", app.user.game);

  // add code that updates the UI for realsies

};

const updateGameFailure = function (error) {
  console.log(error);
  console.log("app.user.game is ", app.user.game);
};

module.exports = {
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure,
};
