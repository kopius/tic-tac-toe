'use strict';

const api = require('./api');
const ui = require('./ui');
const logic = require('./logic');

const onCreateGame = function (event) {
  event.preventDefault();

  api.createGame()
    .done(ui.createGameSuccess)
    .fail(ui.createGameFailure);
};

const updateGame = function (index, value, done) {
  api.patchGame(index, value, done)
    .done(ui.updateGameSuccess)
    .fail(ui.updateGameSuccess);
};

const onShowProfile = function (event) {
  event.preventDefault();

  api.indexGames()
    .done(ui.showProfile)
    .fail(ui.indexGamesFailure);
};

const onShowGameStatus = function () {
  ui.showGameStatusView();
};

const onClickCell = function (event) {
  event.preventDefault();
  let index = event.data.index;

  let turnResult = logic.processTurn(index);
  // wrap in if statement so updateGame is not called on an invalid move

  // if processTurn competes successfully, apply the result
  if (turnResult) {
    updateGame(turnResult.index, turnResult.value, turnResult.over);
  }
};

const addHandlers = function () {
  $('#create-game').on('click', onCreateGame);
  $('#show-profile').on('click', onShowProfile);
  $('#show-game-status').on('click', onShowGameStatus);
  $('#cell1').on('click', {index: 0}, onClickCell);
  $('#cell2').on('click', {index: 1}, onClickCell);
  $('#cell3').on('click', {index: 2}, onClickCell);
  $('#cell4').on('click', {index: 3}, onClickCell);
  $('#cell5').on('click', {index: 4}, onClickCell);
  $('#cell6').on('click', {index: 5}, onClickCell);
  $('#cell7').on('click', {index: 6}, onClickCell);
  $('#cell8').on('click', {index: 7}, onClickCell);
  $('#cell9').on('click', {index: 8}, onClickCell);
};

module.exports = {
  addHandlers,
};
