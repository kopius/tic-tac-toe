'use strict';

const api = require('./api');
const ui = require('./ui');

const onCreateGame = function (event) {
  event.preventDefault();

  api.createGame()
    .done(ui.createGameSuccess)
    .fail(ui.createGameFailure);
};

const addHandlers = function () {
  $('#create-game').on('submit', onCreateGame);
};

module.exports = {
  addHandlers,
};
