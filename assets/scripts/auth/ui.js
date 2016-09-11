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
  $('#show-profile').show();
  $('#profile-view').hide();
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

  // display success message in the UI

};

const showProfile = function(data) {
  app.user.games = data.games;
  let games = app.user.games;

  // update the number of games shown in profile
  let numGames = games.length;
  $('#num-games').text(numGames);

  // show user profile
  $('#profile-view').show();



  // show change-password form
  // $('#change-pw-box').show();

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
  showProfile,
  changePasswordSuccess,
  failure,
};
