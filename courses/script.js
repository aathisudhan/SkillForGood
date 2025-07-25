document.addEventListener("DOMContentLoaded", function () {
  const navButtons = document.querySelectorAll(".nav-link");
  const contentBlocks = document.querySelectorAll(".module-content");

  function showModule(moduleId) {
    contentBlocks.forEach(block => {
      block.classList.remove("active");
    });
    navButtons.forEach(btn => {
      btn.classList.remove("active");
    });

    document.getElementById(moduleId).classList.add("active");
    document.querySelector(`.nav-link[data-module="${moduleId}"]`).classList.add("active");
  }

  navButtons.forEach(button => {
    button.addEventListener("click", () => {
      const moduleId = button.getAttribute("data-module");
      showModule(moduleId);
    });
  });

  // Default load
  showModule("intro");
});
