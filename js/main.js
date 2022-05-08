let aboutMeOnOff = 1;
// function to remove clip-path then display the content
function showAboutMeDropdown() {
  if (aboutMeOnOff === 1) {
    document.getElementById("about-me-section").style.clipPath = "none"
    document.getElementById("about-me-section").style.animationName = "fadeInAboutMe"
    aboutMeOnOff = 0;
    document.getElementById("about-me-dropdown").style.display = "block"
    document.getElementById("about-me-section").style.height = "100%"
    document.getElementById("about-me-title").style.display = "none"
  } else {
    document.getElementById("about-me-section").style.clipPath = "polygon(0 0%, 100% 0, 100% 100%, 0 0%)"
    document.getElementById("about-me-section").style.animationName = "fadeOutAboutMe"
    aboutMeOnOff = 1;
    document.getElementById("about-me-dropdown").style.display = "none"
    document.getElementById("about-me-title").style.display = "block"
  }
}

let experienceOnOff = 1;
// function to remove clip-path then display the content
function showExperienceDropdown() {
  if (experienceOnOff === 1) {
    document.getElementById("experience-section").style.clipPath = "none"
    document.getElementById("experience-section").style.animationName = "fadeInExperience"
    experienceOnOff = 0;
    document.getElementById("experience-dropdown").style.display = "block"
    document.getElementById("experience-section").style.height = "100%"
    document.getElementById("experience-title").style.display = "none"
  } else {
    document.getElementById("experience-section").style.clipPath = "polygon(100% 0, 0 0, 0 100%, 100% 0)"
    document.getElementById("experience-section").style.animationName = "fadeOutExperience"
    experienceOnOff = 1;
    document.getElementById("experience-dropdown").style.display = "none"
    document.getElementById("experience-title").style.display = "block"
  }
}


let projectOnOff = 1;
// function to remove clip-path then display the content
function showProjectDropdown() {
  if (projectOnOff === 1) {
    document.getElementById("project-section").style.clipPath = "none"
    document.getElementById("project-section").style.animationName = "fadeInProject"
    projectOnOff = 0;
    document.getElementById("project-dropdown").style.display = "block"
    document.getElementById("project-section").style.height = "100%"
    document.getElementById("project-title").style.display = "none"
  } else {
    document.getElementById("project-section").style.clipPath = "polygon(0 0%, 100% 0, 100% 100%, 0 0%)"
    document.getElementById("project-section").style.animationName = "fadeOutProject"
    projectOnOff = 1;
    document.getElementById("project-dropdown").style.display = "none"
    document.getElementById("project-title").style.display = "block"
  }
}

let socialOnOff = 1;

function showSocialDropdown() {
  if (socialOnOff === 1) {
    document.getElementById("social-section").style.clipPath = "none"
    document.getElementById("social-section").style.animationName = "fadeInSocial"
    socialOnOff = 0;
    document.getElementById("social-dropdown").style.display = "block"
    document.getElementById("social-section").style.height = "100%"
    document.getElementById("social-title").style.display = "none"
  } else {
    document.getElementById("social-section").style.clipPath = "polygon(100% 0, 0 0, 0 100%, 100% 0)"
    document.getElementById("social-section").style.animationName = "fadeOutSocial"
    socialOnOff = 1;
    document.getElementById("social-dropdown").style.display = "none"
    document.getElementById("social-title").style.display = "block"
  }
}


let contactOnOff = 1;

function showContactDropdown() {
  if (contactOnOff === 1) {
    document.getElementById("contact-section").style.clipPath = "none"
    document.getElementById("contact-section").style.animationName = "fadeInContact"
    contactOnOff = 0;
    document.getElementById("contact-dropdown").style.display = "block"
    document.getElementById("contact-section").style.height = "100%"
    document.getElementById("contact-title").style.display = "none"
  } else {
    document.getElementById("contact-section").style.clipPath = "polygon(0 0%, 100% 0, 100% 100%, 0 0%)"
    document.getElementById("contact-section").style.animationName = "fadeOutContact"
    contactOnOff = 1;
    document.getElementById("contact-dropdown").style.display = "none"
    document.getElementById("contact-title").style.display = "block"
  }
}

let text = ["we are", "I am"];
let counter = 0;
let elem1 = document.getElementById("changeText1");
let elem2 = document.getElementById("changeText2");
setInterval(change, 2500);

function change() {
  elem1.classList.add('hide');
  elem2.classList.add('hide');
  setTimeout(function () {
    elem1.innerHTML = text[counter];
    elem2.innerHTML = text[counter];
    elem1.classList.remove('hide');
    elem2.classList.remove('hide');
    counter++;
    if (counter >= text.length) {
      counter = 0;
    }
  }, 500);
}




