'use strict';

const app = require('../app');

let player = 'X';

const paintBoard = function (element, index) {
  let id = index + 1;
  let cellId = '#cell' + id;
  $(cellId).text(element);
};

const createGameSuccess = function (data) {
  app.user.game = data.game;

  // create an activePlayer property on app here and initialize to 'x'

  console.log("Game created successfully");
  console.log('app.user.game is ', app.user.game);

  // clear last game's win message
  $('#win-message').hide();

  // clear the board
  let emptyCells = ['', '', '', '', '', '', '', '', ''];
  emptyCells.forEach(paintBoard);

  // display whose turn it is
  $('#whose-turn').show();
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
    $('#whose-turn').hide();
    $('#win-message').show();
    $('#winning-player').text("somebody won i guess");
    return;
  }

  // change the active player
  // CHANGE THIS TO REFERENCE activePlayer PROPERTY ON APP
  if (player === 'X') {
    player = 'O';
  } else {
    player = 'X';
  }

  // display whose turn it is
  $('#active-player').text(app.activePlayer + '\'s');
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
