/*
Recode Reality Home Page Javascript
*/

// -----
// Components
// -----

const debugText = document.getElementById('debug');

// -----
// Variables
// -----

// -----
// Script
// -----

const showSize = () => {
  let width = window.innerWidth;
  debugText.innerText = "Window width: " + width + "px";
}

showSize();
