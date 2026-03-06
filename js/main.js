(function () {
  const toggleButton = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");

  if (!toggleButton || !nav) {
    return;
  }

  toggleButton.addEventListener("click", function () {
    const isOpen = nav.classList.toggle("open");
    toggleButton.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("open");
      toggleButton.setAttribute("aria-expanded", "false");
    });
  });
})();