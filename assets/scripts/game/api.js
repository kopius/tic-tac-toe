'use strict';

const app = require('../app');

const createGame = function() {
  let token = app.user.token;
  return $.ajax({
    url: app.host + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + token,
    },
  });
};

module.exports = {
  createGame,
};
