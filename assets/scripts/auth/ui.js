'use strict';

const app = require('../app');

const signUpSuccess = (data) => {
  console.log("Signed up successfully");
  console.log("data is ", data);
};

const signInSuccess = (data) => {
  app.user = data.user;
  console.log("Signed in successfully");
  console.log("app.user is ", app.user);
};

const signOutSuccess = () => {
  app.user = null;
  console.log("Signed out successfully");
  console.log("app.user is ", app.user);
};

const changePasswordSuccess = () => {
  console.log("Password changed successfully");
};

const failure = (error) => {
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
