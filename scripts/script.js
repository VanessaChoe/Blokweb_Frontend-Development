/* https://codepen.io/shooft/pen/dyRVVRr */
var deButton = document.querySelector("nav img");

deButton.addEventListener("click", toggleMenu);

function toggleMenu(event) {
  deNav = event.target.parentNode;
  deNav.classList.toggle("toonMenu");
}