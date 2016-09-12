'use strict';

const authEvents = require('./auth/events.js');
const gameEvents = require('./game/events.js');
const authUi = require('./auth/ui.js');

// On document ready
$(() => {
  // add event handlers
  authEvents.addHandlers();
  gameEvents.addHandlers();

  // show the authorization view
  authUi.showAuthView();
});
