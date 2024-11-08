function initializeNavbar() {
  const navbarFeature = document.querySelector("#features");
  const navbarSolution = document.querySelector("#solutions");
  const navbarResource = document.querySelector("#resources");
  const modalOverlay = document.querySelector(".modal-overlay");
  const expandNavbarFeatures = document.querySelector(
    ".navbar-features-expand-container"
  );
  const expandNavbarSolutions = document.querySelector(
    ".navbar-solutions-expand-container"
  );
  const expandNavbarResources = document.querySelector(
    ".navbar-resources-expand-container"
  );
  navbarFeature.addEventListener("click", () => {
    expandNavbarSolutions.classList.remove("active");
    expandNavbarResources.classList.remove("active");
    expandNavbarFeatures.classList.toggle("active");
    if (modalOverlay) {
      if (expandNavbarFeatures.classList.contains("active")) {
        modalOverlay.style.display = "block";
        modalOverlay.style.top = "7rem";
        document.body.style.overflow = "hidden";
      } else {
        modalOverlay.style.display = "none";
        document.body.style.overflow = "auto";
      }
    }
  });
  navbarSolution.addEventListener("click", () => {
    expandNavbarFeatures.classList.remove("active");
    expandNavbarResources.classList.remove("active");
    expandNavbarSolutions.classList.toggle("active");
    if (modalOverlay) {
      if (expandNavbarSolutions.classList.contains("active")) {
        modalOverlay.style.display = "block";
        modalOverlay.style.top = "7rem";
        document.body.style.overflow = "hidden";
      } else {
        modalOverlay.style.display = "none";
        document.body.style.overflow = "auto";
      }
    }
  });
  navbarResource.addEventListener("click", () => {
    expandNavbarFeatures.classList.remove("active");
    expandNavbarSolutions.classList.remove("active");
    expandNavbarResources.classList.toggle("active");
    if (modalOverlay) {
      if (expandNavbarResources.classList.contains("active")) {
        modalOverlay.style.display = "block";
        modalOverlay.style.top = "7rem";
        document.body.style.overflow = "hidden";
      } else {
        modalOverlay.style.display = "none";
        document.body.style.overflow = "auto";
      }
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth < 1200) {
      modalOverlay.style.display = "none";
      document.body.style.overflow = "auto";
      expandNavbarFeatures.classList.remove("active");
      expandNavbarSolutions.classList.remove("active");
      expandNavbarResources.classList.remove("active");
    }
  });
}

document.addEventListener("navbar", initializeNavbar);
