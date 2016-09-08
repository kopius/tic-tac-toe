'use strict';

const api = require('./api');
const ui = require('./ui');
const app = require('../app.js');
const logic = require('./logic');

// const getFormFields = require('../../../lib/get-form-fields');

const onCreateGame = function (event) {
  event.preventDefault();

  api.createGame()
    .done(ui.createGameSuccess)
    .fail(ui.createGameFailure);
};

const onClickCell = function (event) {
  event.preventDefault();
  let index = event.data.index;

  logic.processTurn(index);
};

const addHandlers = function () {
  $('#create-game').on('click', onCreateGame);
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
