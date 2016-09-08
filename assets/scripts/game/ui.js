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

  // clear last game's win message
  $('#info-bar').text('');

  // clear the board
  let emptyCells = ['', '', '', '', '', '', '', '', ''];
  emptyCells.forEach(paintBoard);
};

const createGameFailure = function (error) {
  console.log("Failed to create game");
  console.log(error);
};

const updateGameSuccess = function (data) {
  // update the game object in app.js
  app.user.game = data.game;
  let game = app.user.game;

  // add code that updates the UI for realsies
  let cells = game.cells;
  cells.forEach(paintBoard);

  // if the game is over, display a win message
  if (game.over) {
    $('#info-bar').text('PLAYER ' + player + ' WINS!');
  }

  // change whose turn it is
  if (player === 'X') {
    player = 'O';
  } else {
    player = 'X';
  }
};

const updateGameFailure = function (error) {
  console.log(error);
};

module.exports = {
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure,
};
