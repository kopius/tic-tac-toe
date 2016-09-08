'use strict';

const authEvents = require('./auth/events.js');
const gameEvents = require('./game/events.js');

// On document ready
$(() => {
  authEvents.addHandlers();
  gameEvents.addHandlers();
  $('#game-board').hide();
});
