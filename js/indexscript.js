/*
Recode Reality Home Page Javascript
*/

// -----
// Components
// -----


// -----
// Variables
// -----

let menuSlide = false;
let isAboutShown = false;
let currentPage = 'home';

// -----
// Script
// -----

const showSize = () => {
  let width = window.innerWidth;
  console.log("Window width: " + width + "px");
}

//showSize();

const slide = () => {
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
}

const slideBack = () => {
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

const hideAbout = () => {
  // Reverse animation
  document.getElementById("aboutText").classList.remove("aboutDivText");
  document.getElementById("aboutText").classList.add("reverseAboutText");
  document.getElementById("aboutImg").classList.remove("aboutDivImage");
  document.getElementById("aboutImg").classList.add("reverseAboutImage");

  currentPage = 'home';
  
  setTimeout(() => {
    document.getElementById("aboutPage").style.display = "none";
  }, 2000);
}

const showAbout = () => {
  if (currentPage != 'about') {
    slide();
    // Play animation
    document.getElementById("aboutPage").style.display = "block";
    document.getElementById("aboutText").classList.remove("reverseAboutText");
    document.getElementById("aboutText").classList.add("aboutDivText");
    document.getElementById("aboutImg").classList.remove("reverseAboutImage");
    document.getElementById("aboutImg").classList.add("aboutDivImage");

    currentPage = 'about';

  } else {
    hideAbout();
    setTimeout(() => {
      slideBack();
    }, 2000);
  }
}

const hideContact = () => {
  // Reverse animation

  currentPage = 'home';
  
  setTimeout(() => {
    document.getElementById("aboutPage").style.display = "none";
  }, 2000);
}

const showContact = () => {
  if (currentPage != 'contact') {
    slide();
    // Play animation

    currentPage = 'contact';

  } else {
    hideContact();
    setTimeout(() => {
      slideBack();
    }, 2000);
  }
}

const showPage = (newPage) => {
  switch(newPage) {
    case 'home':

      break;
    case 'about':
      console.log(newPage);
      showAbout();
      break;
    case 'library':
      console.log(newPage);
      break;
    case 'discord':
      console.log(newPage);
      break;
    case 'contact':
      console.log(newPage);
      showContact();
    break;
    default:
      break;
  }
}