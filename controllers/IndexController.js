let currentSection = "home";
const activeLink = document.querySelectorAll("#nav-bar .nav-link");

function logout() {
  window.location.href = "/indexLogin.html";
}

function showSection(section) {
  document.getElementById(currentSection).classList.add("hide");
  document.getElementById(section).classList.remove("hide");

  activeLink.forEach((link) => link.classList.remove("active"));
  document
    .querySelector(
      `#nav-bar .nav-item[onclick="showSection('${section}')"] .nav-link`
    )
    .classList.add("active");

  currentSection = section;

  collapseNavbar();
}

function collapseNavbar() {
  const navbarCollapse = document.getElementById("navbarNav");
  if (navbarCollapse.classList.contains("show")) {
    navbarCollapse.classList.remove("show");
  }
}

window.onload = () => {
  showSection(currentSection);
  initializeNextCustomerId();
};
