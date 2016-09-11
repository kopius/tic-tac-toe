'use strict';

const app = require('../app');

const signUp = (data) => {
  return $.ajax({
    url: app.host + '/sign-up',
    method: 'POST',
    data: data,
  });
};

const signIn = (data) => {
  // change url back to app.host when i have internet
  return $.ajax({
    url: app.host + '/sign-in',
    method: 'POST',
    data: data,
  });
};

const signOut = () => {
  let id = app.user.id;
  let token = app.user.token;
  return $.ajax({
    url: app.host + '/sign-out/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + token,
    },
  });
};

const indexGames = function () {
  // let id = app.user.id;
  let token = app.user.token;
  // change url to app.host once i have internet
  return $.ajax({
    url: app.host + '/games/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + token,
    },
  });
};

const changePassword = (data) => {
  let id = app.user.id;
  let token = app.user.token;
  return $.ajax({
    url: app.host + '/change-password/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + token,
    },
    data: data,
  });
};

module.exports = {
  signUp,
  signIn,
  signOut,
  indexGames,
  changePassword,
};
