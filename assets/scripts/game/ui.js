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


const displayAlert = function (alert) {
  $('#misc-message').text(alert);
};


const resetAlert = function () {
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
  resetAlert();
  displayWhoseTurn();
  $('#win-message').hide();
  $('#whose-turn').show();
  $('#show-game-status').show();
  $('#info-bar-buttons').show();
};


const showGameStatusView = function () {
  resetAlert();
  $('#game-status-view').show();
  $('#profile-view').hide();
};


const showProfileView = function () {
  resetAlert();
  $('#game-status-view').hide();
  $('#profile-view').show();
};


const createGameSuccess = function (data) {
  app.user.game = data.game;

  // create an activePlayer property on app and initialize to 'x'
  app.activePlayer = 'x';

  // reset the winner property on app
  app.winner = null;

  // reset the board, then initialize & show the game status view
  resetBoard();
  initializeGameView();
  showGameStatusView();
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
  resetAlert();

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
  $('#misc-message').text('failed to update the game');
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


const indexGamesFailure = function() {
  displayAlert('cannot display profile at this time');
};


module.exports = {
  displayAlert,
  showGameStatusView,
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure,
  showProfile,
  indexGamesFailure,
};
