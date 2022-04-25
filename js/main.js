let aboutMeOnOff = 1;
// function to remove clip-path then display the content
function showAboutMeDropdown() {
  if (aboutMeOnOff === 1) {
    document.getElementById("about-me-section").style.clipPath = "none"
    document.getElementById("about-me-section").style.animationName = "fadeIn"
    aboutMeOnOff = 0;
    document.getElementById("about-me-dropdown").style.display = "block"
    document.getElementById("about-me-section").style.height = "100%"
    document.getElementById("about-me-title").style.display = "none"
  } else {
    document.getElementById("about-me-section").style.clipPath = "polygon(0 0%, 100% 0, 100% 100%, 0 0%)"
    document.getElementById("about-me-section").style.animationName = "fadeOut"
    aboutMeOnOff = 1;
    document.getElementById("about-me-dropdown").style.display = "none"
    // document.getElementById("about-me-section").style.height = "10em"
    document.getElementById("about-me-title").style.display = "block"
  }
}

let experienceOnOff = 1;
// function to remove clip-path then display the content
function showExperienceDropdown() {
  if (experienceOnOff === 1) {
    document.getElementById("experience-section").style.clipPath = "none"
    experienceOnOff = 0;
    document.getElementById("experience-dropdown").style.display = "block"
    document.getElementById("experience-section").style.height = "100%"
    document.getElementById("experience-title").style.display = "none"
  } else {
    document.getElementById("experience-section").style.clipPath = "polygon(100% 0, 0 0, 0 100%, 100% 0)"
    experienceOnOff = 1;
    document.getElementById("experience-dropdown").style.display = "none"
    document.getElementById("experience-section").style.height = "10em"
    document.getElementById("experience-title").style.display = "block"
  }
}


let projectOnOff = 1;
// function to remove clip-path then display the content
function showProjectDropdown() {
  if (projectOnOff === 1) {
    document.getElementById("project-section").style.clipPath = "none"
    projectOnOff = 0;
    document.getElementById("project-dropdown").style.display = "block"
    document.getElementById("project-section").style.height = "100%"
    document.getElementById("project-title").style.display = "none"
  } else {
    document.getElementById("project-section").style.clipPath = "polygon(0 0%, 100% 0, 100% 100%, 0 0%)"
    projectOnOff = 1;
    document.getElementById("project-dropdown").style.display = "none"
    document.getElementById("project-section").style.height = "10em"
    document.getElementById("project-title").style.display = "block"
  }
}

let socialOnOff = 1;

function showSocialDropdown() {
  if (socialOnOff === 1) {
    document.getElementById("social-section").style.clipPath = "none"
    socialOnOff = 0;
    document.getElementById("social-dropdown").style.display = "block"
    document.getElementById("social-section").style.height = "100%"
    document.getElementById("social-title").style.display = "none"
  } else {
    document.getElementById("social-section").style.clipPath = "polygon(100% 0, 0 0, 0 100%, 100% 0)"
    socialOnOff = 1;
    document.getElementById("social-dropdown").style.display = "none"
    document.getElementById("social-section").style.height = "10em"
    document.getElementById("social-title").style.display = "block"
  }
}


let contactOnOff = 1;

function showContactDropdown() {
  if (contactOnOff === 1) {
    document.getElementById("contact-section").style.clipPath = "none"
    contactOnOff = 0;
    document.getElementById("contact-dropdown").style.display = "block"
    document.getElementById("contact-section").style.height = "100%"
    document.getElementById("contact-title").style.display = "none"
  } else {
    document.getElementById("contact-section").style.clipPath = "polygon(0 0%, 100% 0, 100% 100%, 0 0%)"
    contactOnOff = 1;
    document.getElementById("contact-dropdown").style.display = "none"
    document.getElementById("contact-section").style.height = "10em"
    document.getElementById("contact-title").style.display = "block"
  }
}
