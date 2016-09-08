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

const isOver = function (index, value) {
  // create a copy of the cells array so we can check for a win
  // without altering the actual array - only a server response should do that
  let cells = app.user.game.cells.slice();

  // apply the most recent play to our copy
  cells[index] = value;
  console.log("fake cells is ", cells);
  // check if that play results in a win
  if ((cells[0] === cells[1] && cells[0] === cells[2] && cells[0] !== '') ||
      (cells[3] === cells[4] && cells[3] === cells[5] && cells[3] !== '') ||
      (cells[6] === cells[7] && cells[6] === cells[8] && cells[6] !== '') ||
      (cells[0] === cells[3] && cells[0] === cells[6] && cells[0] !== '') ||
      (cells[1] === cells[4] && cells[1] === cells[7] && cells[1] !== '') ||
      (cells[2] === cells[5] && cells[2] === cells[8] && cells[2] !== '') ||
      (cells[0] === cells[4] && cells[0] === cells[8] && cells[0] !== '') ||
      (cells[2] === cells[4] && cells[2] === cells[6] && cells[2] !== '')
    ) {
      return true;
    } else {
      console.log("i'm in the false block!");
      return false;
    }
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

  // decide whether to put an 'x' or an 'o' in the cell
  // this could potentially be broken out in a separate function
  let value = 'x';
  if (isPlayerXTurn === false) {
    value = 'o';
  }
  isPlayerXTurn = !isPlayerXTurn;

  // now decide whether it's a win or not

  let over = isOver(index, value);
  console.log("over is ", over);

  // now we can call updateGame
  updateGame(index, value, over);
};

module.exports = {
  processTurn,
};
