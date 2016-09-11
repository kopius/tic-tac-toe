'use strict';

const app = require('../app');

const paintCell = function (element, index) {
  let id = index + 1;
  let cellId = '#cell' + id;
  $(cellId).text(element);
};

const paintBoard = function (cells) {
  cells.forEach(paintCell);
};

const resetBoard = function () {
  let emptyCells = ['', '', '', '', '', '', '', '', ''];
  paintBoard(emptyCells);
};

const displayWarning = function (warning) {
  $('#misc-message').text(warning);
};

const resetWarning = function () {
  $('#misc-message').text('');
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

const displayWinMessage = function () {
  $('#whose-turn').hide();
  $('#win-message').show();
  $('#winning-player').text(app.winner);
};

const initializeGameView = function() {
  resetWarning();
  displayWhoseTurn();
  $('#win-message').hide();
  $('#whose-turn').show();
  $('#show-game-status').show();
  $('#info-bar-buttons').show();
};

const showGameView = function () {
  resetWarning();
  $('#game-status-view').show();
  $('#profile-view').hide();
};

const showProfileView = function () {
  resetWarning();
  $('#game-status-view').hide();
  $('#profile-view').show();
};

const createGameSuccess = function (data) {
  app.user.game = data.game;

  // create an activePlayer property on app and initialize to 'x'
  app.activePlayer = 'x';

  // reset the winner property on app
  app.winner = null;

  // reset the board, then initialize & show the game view
  resetBoard();
  initializeGameView();
  showGameView();
};

const createGameFailure = function () {
  $('#misc-message').text("failed to create game");
};

// This function fires every turn, updating the UI to reflect the latest move
const updateGameSuccess = function (data) {
  // update the game object in app.js and assign to a local variable
  app.user.game = data.game;
  let game = app.user.game;

  // update the UI
  paintBoard(game.cells);
  resetWarning();

  // if the game is over, display a win message
  if (game.over) {
    displayWinMessage();
    return;
  }

  // change the active player
  changeWhoseTurn();

  // display whose turn it is now
  displayWhoseTurn();
};

const updateGameFailure = function () {
  $('#misc-message').text('uh-oh something went wrong');
};

const showProfile = function(data) {
  app.user.games = data.games;
  let games = app.user.games;

  // update the number of games shown in profile
  let numGames = games.length;
  $('#num-games').text(numGames);

  // show user profile
  showProfileView();
};

const failure = () => {
  $('#misc-message').text('uh-oh something went wrong');
};

module.exports = {
  displayWarning,
  showGameView,
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure,
  showProfile,
  failure,
};
