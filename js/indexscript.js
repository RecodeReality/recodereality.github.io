/*
Recode Reality Home Page Javascript
*/

// -----
// Components
// -----

//const debugText = document.getElementById('debug');

// -----
// Variables
// -----

let menuSlide = false;
let isAboutShown = false;

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

const showAbout = () => {
  if (isAboutShown) {
    // Reverse the animation
    document.getElementById("aboutText").classList.remove("aboutDivText");
    document.getElementById("aboutText").classList.add("reverseAboutText");
    document.getElementById("aboutImg").classList.remove("aboutDivImage");
    document.getElementById("aboutImg").classList.add("reverseAboutImage");
    
    // Set a timeout to hide the #aboutPage element after a short delay
    setTimeout(() => {
      document.getElementById("aboutPage").style.display = "none";
      slide();
    }, 2000); // Adjust the delay to match the animation duration
  } else {
    // Show the about page with animation
    slide();
    document.getElementById("aboutPage").style.display = "block";
    document.getElementById("aboutText").classList.remove("reverseAboutText");
    document.getElementById("aboutText").classList.add("aboutDivText");
    document.getElementById("aboutImg").classList.remove("reverseAboutImage");
    document.getElementById("aboutImg").classList.add("aboutDivImage");
  }
  isAboutShown = !isAboutShown;
}