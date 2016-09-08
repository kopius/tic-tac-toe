'use strict';

const app = require('../app');
const logic = require('./logic');


const paintBoard = function (element, index) {
  let id = index + 1;
  let cellId = '#cell' + id;
  console.log("in paintBoard, cellId is ", cellId);
  $(cellId).text(element);
};

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
  let game = app.user.game;
  console.log("Game updated successfully");
  console.log("app.user.game is ", app.user.game);

  // add code that updates the UI for realsies
  let cells = game.cells;
  console.log("in UpdateGameSuccess, cells is", cells);
  cells.forEach(paintBoard);

  let player = 'X';
  if (logic.isPlayerXTurn) {
    player = 'O';
  }

  if (game.over) {
    $('#info-bar').text('PLAYER ' + player + ' WINS!');
  }
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
