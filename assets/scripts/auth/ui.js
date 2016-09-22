'use strict';

const app = require('../app');


const displayAlert = function (alert) {
  $('#misc-message').text(alert);
};


const resetAlert = function () {
  displayAlert('');
};


const clearFormFields = function () {
  $('form').find('input[type=password]').val('');
  $('form').find('input[type=email]').val('');
};


const resetBoard = function () {
  $('#game-board').find('.game-board-col').text('');
};


const showAuthView = function () {
  // hide the game board and info bar content
  $('#game-board').hide();
  $('#game-status-view').hide();
  $('#profile-view').hide();
  resetAlert();

  // change which buttons are visible
  $('#navbar-buttons').hide();
  $('#info-bar-buttons').hide();
  $('#show-game-status').hide();

  // show the authentication forms
  $('#auth-box').show();
};


const showGameView = function () {
  // hide authentication forms and show the game board
  $('#auth-box').hide();
  $('#game-board').show();
  resetAlert();

  // change which buttons are visible
  $('#info-bar-buttons').show();
  $('#navbar-buttons').show();
};


const signUpSuccess = (data) => {
  // write a greeting message confirming sign-up and instructing user to sign in
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
  console.log('app.user is', app.user);
  // show the game view
  showGameView();
};


const signInFailure = function () {
  displayAlert("incorrect email and/or password");
};


const signOutSuccess = () => {
  // clear the user object and any text left in the authorization forms
  app.user = null;

  // reset the view
  clearFormFields();
  resetBoard();
  showAuthView();

  // confirm sign-out with a friendly message
  displayAlert('thanks for playing!');
};


const signOutFailure = () => {
  displayAlert('cannot sign out at this time');
};


const changePasswordSuccess = () => {
  clearFormFields();
  displayAlert('password changed');
};


const changePasswordFailure = () => {
  displayAlert('incorrect password or invalid input');
};


module.exports = {
  showAuthView,
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
};
