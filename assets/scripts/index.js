'use strict';

const authEvents = require('./auth/events.js');
const gameEvents = require('./game/events.js');

// On document ready
$(() => {
  // add event handlers
  authEvents.addHandlers();
  gameEvents.addHandlers();

  // hide buttons that should not show until login
  $('#game-board').hide();
  $('#sign-out').hide();
  $('#create-game').hide();
});
