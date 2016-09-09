'use strict';

const app = require('../app');

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
  $('#auth-box').hide();
  $('#game-board').show();
  $('#sign-out').show();
  $('#create-game').show();

  // console checks
  console.log("Signed in successfully");
  console.log("app.user is ", app.user);
};

const signOutSuccess = () => {
  // clear the user object
  app.user = null;

  // AUTH VIEW - hide the game board and display the login forms
  $('#game-board').hide();
  $('#auth-box').show();
  $('#game-status').hide();
  $('#misc-message').text('');

  // display success message in the UI

  // console checks
  console.log("Signed out successfully");
  console.log("app.user is ", app.user);
};

const changePasswordSuccess = () => {
  // display success message in the UI

  // console checks
  console.log("Password changed successfully");
};

const failure = (error) => {

  // console checks
  console.log("FAILURE");
  console.error(error);
};

module.exports = {
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  failure,
};
