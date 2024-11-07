function initializeHeader() {
  const productsHeader = document.querySelector(".header-products");

  productsHeader.addEventListener("mouseenter", openExpandHeaderModal);
  const headerExpandProducts = document.querySelector(
    ".header-expand-products"
  );
  headerExpandProducts.addEventListener(
    "mouseleave",
    closeExpandHeaderProductsModal
  );

  function openExpandHeaderModal() {
    document.querySelector(".header-expand-products").style.display = "grid";
    document.querySelector(".modal-overlay").style.display = "block";
    productsHeader.style.background = "#FFF";
    productsHeader.style.border = "1px solid rgb(0 0 0 / 10%)";
    productsHeader.querySelector(".arrow-down").classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeExpandHeaderProductsModal() {
    document.querySelector(".header-expand-products").style.display = "none";
    document.querySelector(".modal-overlay").style.display = "none";
    productsHeader.style.background = "#ffecec";
    productsHeader.style.border = "1px solid rgb(255 58 58 / 20%)";
    productsHeader.style.borderBottom = "0";
    productsHeader.querySelector(".arrow-down").classList.remove("active");
    document.body.style.overflow = "scroll";
  }
}

document.addEventListener("header", initializeHeader);
