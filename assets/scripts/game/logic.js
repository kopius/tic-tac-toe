'use strict';

const api = require('./api');
const app = require('../app.js');
const ui = require('./ui');

let isPlayerXTurn = true;

// Calls the patchGame function in api.js to update the current game object
const updateGame = function (index, value, done) {
  api.patchGame(index, value, done)
    .done(ui.updateGameSuccess)
    .fail(ui.updateGameSuccess);
};

// Determines whether an attempted move is legal
const isLegalMove = function (index) {
  let game = app.user.game;

  if(game.over === true) {
    console.log("the game is over");
    return false;
  } else if (game.cells[index] !== '') {
    console.log("that cell is already taken");
    return false;
  }
  return true;
};

// Processes a single game turn from either player
const processTurn = function (index) {
  console.log("you are in processTurn");

  // is it a legal move?
  if (isLegalMove(index) === false) {
      console.log("not a legal move");
      return;
  }

  // if we get here, it's a legal move
  // now we need to figure out some parameters to pass to updateGame

  // should we tell updateGame to put an 'x' or an 'o' in the cell?
  // this could potentially be broken out in a
  let value = 'x';
  if (isPlayerXTurn === false) {
    value = 'o';
  }
  isPlayerXTurn = !isPlayerXTurn;

  // now we can call updateGame
  updateGame(index, value, false);
};

module.exports = {
  processTurn,
};
