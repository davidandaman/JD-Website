function darkLight() {
  const e = document.querySelector(".switch input");
  e.checked ? enableDarkMode() : disableDarkMode(),
    localStorage.setItem("darkModeEnabled", e.checked);
}
function enableDarkMode() {
  const e = document.body,
    o = document.querySelector(".header"),
    r = document.querySelector(".txt-logo"),
    l = document.getElementById("triangle-langue"),
    t = document.querySelectorAll(".langue a"),
    c = document.querySelectorAll(".skills-section img"),
    a = document.querySelectorAll(".skill-bar");
  e.classList.add("dark-mode"),
    o.classList.add("dark-mode-header"),
    r.classList.add("dark-mode-text"),
    l.classList.add("dark-mode-triangle"),
    t.forEach((e) => {
      e.classList.add("dark-mode-langue");
    }),
    a.forEach((e) => {
      e.classList.add("dark-mode-skill-bar");
    }),
    (document.querySelector(".skills-section").style.backgroundColor =
      "var(--dark)");
  const d = document.querySelector(".skills-tab");
  (d.style.backgroundColor = "var(--secondary)"),
    (d.style.border = "1px solid var(--darkmedium)"),
    document.querySelectorAll(".flip-box-front").forEach((e) => {
      e.style.backgroundColor = "var(--primary)";
    }),
    document.querySelectorAll(".flip-box-back").forEach((e) => {
      e.style.backgroundColor = "var(--darkmedium)";
    }),
    document.querySelectorAll("h3").forEach((e) => {
      e.style.color = "var(--secondary)";
    }),
    c.forEach((e) => {
      e.src.includes("_bk.png") || (e.src = e.src.replace(".png", "_bk.png"));
    });
}
function disableDarkMode() {
  const e = document.body,
    o = document.querySelector(".header"),
    r = document.querySelector(".txt-logo"),
    l = document.getElementById("triangle-langue"),
    t = document.querySelectorAll(".langue a"),
    c = document.querySelectorAll(".skills-section img"),
    a = document.querySelectorAll(".skill-bar");
  e.classList.remove("dark-mode"),
    o.classList.remove("dark-mode-header"),
    r.classList.remove("dark-mode-text"),
    l.classList.remove("dark-mode-triangle"),
    t.forEach((e) => {
      e.classList.remove("dark-mode-langue");
    }),
    a.forEach((e) => {
      e.classList.remove("dark-mode-skill-bar");
    }),
    (document.querySelector(".skills-section").style.backgroundColor = "");
  const d = document.querySelector(".skills-tab");
  (d.style.backgroundColor = ""),
    (d.style.border = ""),
    document.querySelectorAll(".flip-box-front").forEach((e) => {
      e.style.backgroundColor = "";
    }),
    document.querySelectorAll(".flip-box-back").forEach((e) => {
      e.style.backgroundColor = "";
    }),
    document.querySelectorAll("h3").forEach((e) => {
      e.style.color = "";
    }),
    c.forEach((e) => {
      e.src.includes("_bk.png") && (e.src = e.src.replace("_bk.png", ".png"));
    });
}
function initializeDarkMode() {
  const e = "true" === localStorage.getItem("darkModeEnabled"),
    o = document.querySelector(".switch input");
  (o.checked = e),
    e ? enableDarkMode() : disableDarkMode(),
    o.addEventListener("change", darkLight);
}
window.onload = initializeDarkMode;
