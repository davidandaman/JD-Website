// Dark Mode Toggle
function darkLight() {
  const switcher = document.querySelector(".switch input");

  if (switcher.checked) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
  localStorage.setItem("darkModeEnabled", switcher.checked);
}

// Activer le mode sombre
function enableDarkMode() {
  const element = document.body;
  const header = document.querySelector(".header");
  const txtLogo = document.querySelector(".txt-logo");
  const triangleLangue = document.getElementById("triangle-langue");
  const langueLinks = document.querySelectorAll(".langue a");
  const skillsImages = document.querySelectorAll(".skills-section img");
  const skillBars = document.querySelectorAll(".skill-bar");

  element.classList.add("dark-mode");
  header.classList.add("dark-mode-header");
  txtLogo.classList.add("dark-mode-text");

  triangleLangue.classList.add("dark-mode-triangle");
  langueLinks.forEach((link) => {
    link.classList.add("dark-mode-langue");
  });

  skillBars.forEach((bar) => {
    bar.classList.add("dark-mode-skill-bar");
  });

  const skillsSection = document.querySelector(".skills-section");
  skillsSection.style.backgroundColor = "var(--dark)";

  const skillsTab = document.querySelector(".skills-tab");
  skillsTab.style.backgroundColor = "var(--secondary)";
  skillsTab.style.border = "1px solid var(--darkmedium)";

  const flipBoxFront = document.querySelectorAll(".flip-box-front");
  flipBoxFront.forEach((front) => {
    front.style.backgroundColor = "var(--primary)";
  });

  const flipBoxBack = document.querySelectorAll(".flip-box-back");
  flipBoxBack.forEach((back) => {
    back.style.backgroundColor = "var(--darkmedium)";
  });

  const h3Elements = document.querySelectorAll("h3");
  h3Elements.forEach((h3) => {
    h3.style.color = "var(--secondary)";
  });

  skillsImages.forEach((img) => {
    if (!img.src.includes("_bk.png")) {
      img.src = img.src.replace(".png", "_bk.png");
    }
  });
}

// Désactiver le mode sombre
function disableDarkMode() {
  const element = document.body;
  const header = document.querySelector(".header");
  const txtLogo = document.querySelector(".txt-logo");
  const triangleLangue = document.getElementById("triangle-langue");
  const langueLinks = document.querySelectorAll(".langue a");
  const skillsImages = document.querySelectorAll(".skills-section img");
  const skillBars = document.querySelectorAll(".skill-bar");

  element.classList.remove("dark-mode");
  header.classList.remove("dark-mode-header");
  txtLogo.classList.remove("dark-mode-text");

  triangleLangue.classList.remove("dark-mode-triangle");
  langueLinks.forEach((link) => {
    link.classList.remove("dark-mode-langue");
  });

  skillBars.forEach((bar) => {
    bar.classList.remove("dark-mode-skill-bar");
  });

  const skillsSection = document.querySelector(".skills-section");
  skillsSection.style.backgroundColor = "";

  const skillsTab = document.querySelector(".skills-tab");
  skillsTab.style.backgroundColor = "";
  skillsTab.style.border = "";

  const flipBoxFront = document.querySelectorAll(".flip-box-front");
  flipBoxFront.forEach((front) => {
    front.style.backgroundColor = "";
  });

  const flipBoxBack = document.querySelectorAll(".flip-box-back");
  flipBoxBack.forEach((back) => {
    back.style.backgroundColor = "";
  });

  const h3Elements = document.querySelectorAll("h3");
  h3Elements.forEach((h3) => {
    h3.style.color = "";
  });

  skillsImages.forEach((img) => {
    if (img.src.includes("_bk.png")) {
      img.src = img.src.replace("_bk.png", ".png");
    }
  });
}

// Initialiser le mode sombre
function initializeDarkMode() {
  let darkModeEnabled = localStorage.getItem("darkModeEnabled");
  // Si la valeur n'est pas déjà stockée dans le localStorage, on va considérer le mode sombre par défaut
  if (darkModeEnabled === null) {
    darkModeEnabled = true;
  } else {
    darkModeEnabled = darkModeEnabled === "true";
  }
  const switcher = document.querySelector(".switch input");
  switcher.checked = darkModeEnabled;
  if (darkModeEnabled) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }

  switcher.addEventListener("change", darkLight);
}

window.onload = initializeDarkMode;
