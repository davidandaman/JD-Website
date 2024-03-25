// Fonction pour afficher le modal lorsqu'une image est cliquée
function openModal(imgSrc, imgAlt) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modalImg");
  var modalCaption = document.getElementById("modalCaption");

  modal.style.display = "block";
  modalImg.src = imgSrc;
  modalCaption.innerHTML = imgAlt;

  // Attachement du gestionnaire d'événement au bouton de fermeture
  var closeButton = document.querySelector(".close");
  closeButton.onclick = function () {
    modal.style.display = "none";
  };
}

// Fermer le modal lorsqu'on clique en dehors de l'image
window.onclick = function (event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Fonction pour filtrer les images
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") {
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "block";
    }
  } else {
    for (i = 0; i < x.length; i++) {
      if (x[i].classList.contains(c)) {
        x[i].style.display = "block";
      } else {
        x[i].style.display = "none";
      }
    }
  }
}
