'use strict';

const app = require('../app');

const displayAlert = function (alert) {
  $('#misc-message').text(alert);
};

const resetAlert = function () {
  displayAlert('');
};

const showAuthView = function () {

};

const showGameView = function () {
  // hide authentication forms and show the game board
  $('#auth-box').hide();
  $('#game-board').show();

  // change which buttons are visible
  $('#info-bar-buttons').show();
  $('#sign-out').show();
  $('#create-game').show();
  $('#show-profile').show();
  $('#show-game-status').hide();

  // these shouldn't be necessary if sign-out does its job
  // $('#profile-view').hide();
  // $('#show-game-status').hide();
};

const signUpSuccess = (data) => {
  // write a greeting message confirming sign-up and instructing them to sign in
  let email = data.user.email;
  let greeting = "welcome, " + email + "!";
  greeting += " please sign in to play.";

  // display greeting to user
  displayAlert(greeting);
};

const signUpFailure = () => {
  displayAlert("that username is already taken");
};

const signInSuccess = (data) => {
  // store new user in app.user
  app.user = data.user;

  // show the game view
  showGameView();

  // // GAME VIEW - hide the login forms and reveal the game board
  // resetAlert();
  // $('#auth-box').hide();
  // $('#game-board').show();
  // $('#sign-out').show();
  // $('#create-game').show();
  // $('#show-profile').show();
  // $('#profile-view').hide();
  // $('#show-game-status').hide();
  // $('#info-bar-buttons').show();
  // hide the "newgame" and "signout" buttons
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

  resetAlert();
  displayAlert('thanks for playing!');

};

const changePasswordSuccess = () => {
  $('#misc-message').text('password changed. kind of paranoid, aren\'t you?');
};

const failure = () => {
  $('#misc-message').text('uh-oh something went wrong');
};

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  failure,
};
