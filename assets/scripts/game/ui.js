'use strict';

const app = require('../app');
const logic = require('./logic');

let player = 'X';

const paintBoard = function (element, index) {
  let id = index + 1;
  let cellId = '#cell' + id;
  $(cellId).text(element);
};

const createGameSuccess = function (data) {
  app.user.game = data.game;
  console.log("Game created successfully");
  console.log('app.user.game is ', app.user.game);

  $('#info-bar').text('');
};

const createGameFailure = function (error) {
  console.log("Failed to create game");
  console.log(error);
};

const updateGameSuccess = function (data) {
  app.user.game = data.game;
  let game = app.user.game;
  console.log("app.user.game is ", app.user.game);

  // add code that updates the UI for realsies
  let cells = game.cells;
  cells.forEach(paintBoard);

  // let player = 'X';
  // console.log("in updateGameSuccess, isPlayerXTurn is ", logic.isPlayerXTurn);
  // if (logic.isPlayerXTurn) {
  //   player = 'O';
  // }

  if (game.over) {
    $('#info-bar').text('PLAYER ' + player + ' WINS!');
  }

  if (player === 'X') {
    player = 'O';
  } else {
    player = 'X';
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
