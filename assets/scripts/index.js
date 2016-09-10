'use strict';

const authEvents = require('./auth/events.js');
const gameEvents = require('./game/events.js');

// On document ready
$(() => {
  // add event handlers
  authEvents.addHandlers();
  gameEvents.addHandlers();

  // hide elements that should not show at load
  $('#game-status').hide();
  $('#game-board').hide();
  $('#sign-out').hide();
  $('#create-game').hide();
  $('#show-profile').hide();
  $('#profile-box').hide();
});
