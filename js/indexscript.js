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

let menuSlide = false;

// -----
// Script
// -----

const showSize = () => {
  let width = window.innerWidth;
  debugText.innerText = "Window width: " + width + "px";
}

//showSize();

const slide = () => {
  if (!menuSlide) {
    document.getElementById("headerImage").classList.add("pageOpen");
    document.getElementById("menu").classList.add("menuSlide");
    document.getElementById("about").classList.add("openAbout");
    document.getElementById("library").classList.add("openLibrary");
    document.getElementById("discord").classList.add("openDiscord");
    document.getElementById("contact").classList.add("openContact");

    let elements = document.getElementsByClassName("oct-text");
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.add("titleText");
    }
  } else {
    document.getElementById("headerImage").classList.remove("pageOpen");
    document.getElementById("menu").classList.remove("menuSlide");
    document.getElementById("about").classList.remove("openAbout");
    document.getElementById("library").classList.remove("openLibrary");
    document.getElementById("discord").classList.remove("openDiscord");
    document.getElementById("contact").classList.remove("openContact");

    let elements = document.getElementsByClassName("oct-text");
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.remove("titleText");
    }
  }

  menuSlide = !menuSlide;
}