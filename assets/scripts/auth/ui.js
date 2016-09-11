'use strict';

const app = require('../app');

const resetWarning = function () {
  $('#misc-message').text('');
};

const signUpSuccess = (data) => {
  //display success message in the UI and prompt them to sign in

  // console checks
  console.log("Signed up successfully");
  console.log("data is ", data);
};

const signInSuccess = (data) => {
  // store new user in app.user
  app.user = data.user;

  // GAME VIEW - hide the login forms and reveal the game board
  resetWarning();
  $('#auth-box').hide();
  $('#game-board').show();
  $('#sign-out').show();
  $('#create-game').show();
  $('#show-profile').show();
  $('#profile-view').hide();
  $('#show-game-status').hide();
  $('#info-bar-buttons').show();
};

const signOutSuccess = () => {
  // clear the user object
  app.user = null;

  // AUTH VIEW - hide the game board and display the login forms
  $('#game-board').hide();
  $('#auth-box').show();
  $('#game-status-view').hide();
  $('#misc-message').text('');
  $('#profile-view').hide();
  $('#info-bar-buttons').hide();

  $('#misc-message').text('you have been signed out');
  // display success message in the UI

};

const changePasswordSuccess = () => {
  $('#misc-message').text('password changed. kind of paranoid, aren\'t you?');
};

const failure = () => {
  $('#misc-message').text('uh-oh something went wrong');
};

module.exports = {
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  failure,
};
