// Mobile navigation toggle
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.getElementById("navToggle");
  var wrap = document.getElementById("navWrap");
  if (toggle && wrap) {
    toggle.addEventListener("click", function () {
      var isOpen = wrap.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    // close menu when a link is clicked (mobile)
    wrap.querySelectorAll(".nav-links a").forEach(function (link) {
      link.addEventListener("click", function () {
        wrap.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }
});
