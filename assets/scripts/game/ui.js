'use strict';

const app = require('../app');

const paintBoard = function (element, index) {
  let id = index + 1;
  let cellId = '#cell' + id;
  $(cellId).text(element);
};

const displayWhoseTurn = function () {
  $('#active-player').text("player " + app.activePlayer + '\'s');
};

const changeWhoseTurn = function () {
  if (app.activePlayer === 'x') {
    app.activePlayer = 'o';
  } else {
    app.activePlayer = 'x';
  }
};

const displayWarning = function (warning) {
  $('#misc-message').text(warning);
};

const resetGameView = function () {
  $('#misc-message').text('');
  $('#win-message').hide();
  let emptyCells = ['', '', '', '', '', '', '', '', ''];
  emptyCells.forEach(paintBoard);

};

const showGameView = function () {
  $('#whose-turn').show();
  $('#game-status-view').show();
  $('#profile-view').hide();
  $('#info-bar-buttons').show();

  displayWhoseTurn();
};

const createGameSuccess = function (data) {
  app.user.game = data.game;

  // create an activePlayer property on app and initialize to 'x'
  app.activePlayer = 'x';

  console.log("Game created successfully");
  console.log('app ', app);

  // reset the game view
  resetGameView();
  showGameView();

  // $('#misc-message').text('');
  // $('#win-message').hide();
  // let emptyCells = ['', '', '', '', '', '', '', '', ''];
  // emptyCells.forEach(paintBoard);
  // $('#whose-turn').show();
  // $('#game-status-view').show();
  // $('#profile-view').hide();

    // display whose turn it is
  // displayWhoseTurn();
};

const createGameFailure = function () {
  $('#misc-message').text("failed to create game");
};

const updateGameSuccess = function (data) {
  // update the game object in app.js
  app.user.game = data.game;
  let game = app.user.game;

  // update the UI
  let cells = game.cells;
  cells.forEach(paintBoard);
  displayWarning('');

  // if the game is over, display a win message
  if (game.over) {
    $('#whose-turn').hide();
    $('#win-message').show();
    $('#winning-player').text(app.winner);
    return;
  }

  // change the active player
  changeWhoseTurn();

  // display whose turn it is now
  displayWhoseTurn();
};

const updateGameFailure = function (error) {
  console.log(error);
};

module.exports = {
  displayWarning,
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure,
};
