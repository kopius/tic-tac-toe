'use strict';

const app = require('../app');

// Applies a value to a single cell of the game board
const paintCell = function (value, index) {
  let id = index + 1;
  let cellId = '#cell' + id;
  $(cellId).text(value);
};

// Applies the current game state to the cells of the game board
const paintBoard = function (cells) {
  cells.forEach(paintCell);
};

// Clears the cells of the game board
const resetBoard = function () {
  let emptyCells = ['', '', '', '', '', '', '', '', ''];
  paintBoard(emptyCells);
};

// Displays an alert message to the user
const displayAlert = function (alert) {
  $('#misc-message').text(alert);
};

// Clears any alert text from the UI
const resetAlert = function () {
  $('#misc-message').text('');
};

// Displays the current active player
const displayWhoseTurn = function () {
  $('#active-player').text("player " + app.activePlayer + '\'s');
};

// Changes the active player
const changeWhoseTurn = function () {
  if (app.activePlayer === 'x') {
    app.activePlayer = 'o';
  } else {
    app.activePlayer = 'x';
  }
};

// Displays the winner of the game
const displayWinMessage = function () {
  $('#whose-turn').hide();
  $('#win-message').show();
  $('#winning-player').text(app.winner);
};

// Initializes the game view
const initializeGameView = function() {
  resetAlert();
  displayWhoseTurn();
  $('#win-message').hide();
  $('#whose-turn').show();
  $('#show-game-status').show();
  $('#info-bar-buttons').show();
};

// Displays the status of the current game
const showGameStatusView = function () {
  resetAlert();
  $('#game-status-view').show();
  $('#profile-view').hide();
};

// Displays the profile of the current user
const showProfileView = function () {
  resetAlert();
  $('#game-status-view').hide();
  $('#profile-view').show();
};

// Resets the game state and the UI for the beginning of a new game
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

// Displays an alert to the user when createGame fails
const createGameFailure = function () {
  displayAlert("failed to create game");
};

// Updates the game state and UI to reflect the latest move
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
    showGameStatusView();
    return;
  }

  // change the active player
  changeWhoseTurn();

  // display whose turn it is now
  displayWhoseTurn();
};

// Displays an alert to the user when updateGame fails
const updateGameFailure = function () {
  displayAlert('failed to update the game');
};

// Updates and displays the profile of the current user
const showProfile = function(data) {
  app.user.games = data.games;
  let games = app.user.games;

  // update the number of games shown in profile
  let numGames = games.length;
  $('#num-games').text(numGames);

  // show user profile
  showProfileView();
};

// Displays an alert to the user when indexGames fails
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
