'use strict';

const api = require('./api');
const ui = require('./ui');
const logic = require('./logic');

// Creates a new game when the "New Game" button is clicked
const onCreateGame = function (event) {
  event.preventDefault();

  api.createGame()
    .done(ui.createGameSuccess)
    .fail(ui.createGameFailure);
};

// Takes the result of a valid turn and updates the state of the game
const updateGame = function (index, value, done) {
  api.patchGame(index, value, done)
    .done(ui.updateGameSuccess)
    .fail(ui.updateGameSuccess);
};

// Switches to the user profile view when the "Profile" button is clicked
const onShowProfile = function (event) {
  event.preventDefault();

  api.indexGames()
    .done(ui.showProfile)
    .fail(ui.indexGamesFailure);
};

// Switches to the game status view when the "Game" button is clicked
const onShowGameStatus = function () {
  ui.showGameStatusView();
};

// Starts a game turn when a cell of the board is clicked
const onClickCell = function (event) {
  event.preventDefault();
  let index = event.data.index;

  let turnResult = logic.processTurn(index);

  // if processTurn returns a valid result, apply the result
  if (turnResult) {
    updateGame(turnResult.index, turnResult.value, turnResult.over);
  }
};

// Adds click handlers for the cells of the game board
const addCellHandlers = function (numCells) {
  for (let i = 0; i < numCells; i++) {
    let cellId = '#cell' + (i+1);
    $(cellId).on('click', {index: i}, onClickCell);
  }
};

// Adds event handlers for game-related events
const addHandlers = function () {
  $('#create-game').on('click', onCreateGame);
  $('#show-profile').on('click', onShowProfile);
  $('#show-game-status').on('click', onShowGameStatus);
  addCellHandlers(9);
};

module.exports = {
  addHandlers,
};
