const hamburger = document.getElementsByClassName("hamburger")[0];
const sidebar = document.getElementsByClassName("sidebar")[0];
const closeIcon = document.getElementsByClassName("close-icon")[0];

hamburger.addEventListener("click", function () {
  sidebar.style.display = "flex";
});

closeIcon.addEventListener("click", function () {
  sidebar.style.display = "none";
});
