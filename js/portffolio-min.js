function openModal(e, t) {
  let l = document.getElementById("myModal"),
    n = document.getElementById("modalImg"),
    o = document.getElementById("modalCaption");
  (l.style.display = "block"),
    (n.src = e),
    (o.innerHTML = t),
    (document.querySelector(".close").onclick = function () {
      l.style.display = "none";
    });
}
function filterSelection(e) {
  let t, l;
  if (((t = document.getElementsByClassName("column")), "all" == e))
    for (l = 0; l < t.length; l++) t[l].style.display = "block";
  else
    for (l = 0; l < t.length; l++)
      t[l].classList.contains(e)
        ? (t[l].style.display = "block")
        : (t[l].style.display = "none");
  let n = document.getElementsByClassName("btn");
  for (l = 0; l < n.length; l++) n[l].classList.remove("active");
  event.currentTarget.classList.add("active");
}
window.onclick = function (e) {
  let t = document.getElementById("myModal");
  e.target == t && (t.style.display = "none");
};
