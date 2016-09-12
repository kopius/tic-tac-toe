'use strict';

const app = require('../app.js');
const ui = require('./ui.js');


// Determines whether an attempted move is legal
// and displays an appropriate alert if it is not
const isLegalMove = function (index) {
  let game = app.user.game;

  if (!game) {
    ui.displayAlert('click \'new game\' above to start playing');
    return false;
  } else if(game.over === true) {
    ui.displayAlert("invalid move - the game is over");
    return false;
  } else if (game.cells[index] !== '') {
    ui.displayAlert("invalid move - that square is taken");
    return false;
  }
  return true;
};


// Checks to see if the game has ended in a tie
const isTieGame = function (cells) {
  if (cells.indexOf('') === -1){
      return true;
  }
};


// Checks to see if the latest move will end the game
const isOver = function (index, value) {
  // create a copy of the cells array so we can check for a win without altering
  // the actual cells array on app, since only a server response should do that
  let cells = app.user.game.cells.slice();

  // apply the most recent play to our copied array
  cells[index] = value;

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
      // if it's a win, store the winning player in app
      app.winner = 'player ' + app.activePlayer;
      return true;
    }
    else if (isTieGame(cells)) {
      // if it's a tie, the winner is nobody
      app.winner = 'nobody';
      return true;
    }
    else {
      return false;
    }
};


// Processes a single game turn from either player
const processTurn = function (index) {
  // is it a legal move?
  if (isLegalMove(index) === false) {
      return;
  }

  // if we get here, it's a legal move

  // start building an object containing the outcome of the turn
  let turnResult = {index: index};

  // decide whether to put an 'x' or an 'o' in the cell
  turnResult.value = app.activePlayer;

  // decide whether the game has ended
  turnResult.over = isOver(index, turnResult.value);

  // return the key info about this turn
  return turnResult;
};


module.exports = {
  processTurn,
};
