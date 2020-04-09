const mobileMenu = document.querySelector("#nav");
const mobileMenuBtn = document.querySelector("#menu-toggle input");
const bodyElement = document.querySelector("body");
const overlayBlock = document.querySelector("#overlay");
const menuOpenButton = document.querySelector(".menu-toggle__input");

mobileMenuBtn.addEventListener("click", function () {
  mobileMenu.classList.toggle("show");
  bodyElement.classList.toggle("noscroll");
  overlayBlock.classList.toggle("show");
});

// RESIZE
window.addEventListener("resize", function () {
  mobileMenu.classList.remove("show");
  bodyElement.classList.remove("noscroll");
  overlayBlock.classList.remove("show");
  menuOpenButton.checked = false;
});

// FAVICON
jQuery(document).ready(function ($) {
  $.iMissYou({
    title: "I Miss you !",
    favicon: {
      enabled: true,
      src: "./img/iMissYouFavicon.ico",
    },
  });
});
