let navLinks = document.getElementById("navLinks");

function showMenu() {
  navLinks.style.right = "0";
  document.body.classList.add("bodyOpacity");
}

function hideMenu() {
  navLinks.style.right = "-240px";
  document.body.classList.remove("bodyOpacity");
}
