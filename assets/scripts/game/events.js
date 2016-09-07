'use strict';

const api = require('./api');
const ui = require('./ui');

const onCreateGame = function (event) {
  event.preventDefault();

  api.createGame()
    .done(ui.createGameSuccess)
    .fail(ui.createGameFailure);
};

const onTakeCellOne = function (event) {
  event.preventDefault();

  api.takeCellOne()
    .done(ui.takeCellOneSuccess)
    .fail(ui.takeCellOneFailure);
};

const addHandlers = function () {
  $('#create-game').on('submit', onCreateGame);
  $('#cell1').on('click', onTakeCellOne);
};

module.exports = {
  addHandlers,
};
