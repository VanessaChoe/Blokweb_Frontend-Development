/* https://codepen.io/shooft/pen/dyRVVRr */
 var deButton = document.querySelector("nav img");

 deButton.addEventListener("click", toggleMenu);

 function toggleMenu(event) {
   deNav = event.target.parentNode;
   deNav.classList.toggle("toonMenu");
 }

//  https://benfrain.com/converting-divs-into-accessible-pseudo-buttons//////

 var deButton = document.querySelector("nav img");

 deButton.addEventListener("keydown", e => {
  if (e.key === "Enter" || e.key === "Spacebar") {
    deNav = event.target.parentNode;
    deNav.classList.toggle("toonMenu");
  }
});

