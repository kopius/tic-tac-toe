'use strict';

const app = require('../app');

const createGame = function () {
  let token = app.user.token;
  return $.ajax({
    url: app.host + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + token,
    },
  });
};

const takeCellOne = function () {
  let token = app.user.token;
  let id = app.user.game.id;

  return $.ajax({
    url: app.host + '/games/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + token,
    },
    data: {
      "game": {
        "cell": {
          "index": 0,
          "value": 'x'
        },
        "over": false
      }
    }
  });
};

module.exports = {
  createGame,
  takeCellOne,
};
