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

const patchGame = function (index, value, over) {
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
          "index": index,
          "value": value
        },
        "over": over
      }
    }
  });
};

const indexGames = function () {
  let token = app.user.token;

  return $.ajax({
    url: app.host + '/games/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + token,
    },
  });
};

module.exports = {
  createGame,
  patchGame,
  indexGames,
};
