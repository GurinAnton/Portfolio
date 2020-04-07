const mobileMenu = document.querySelector("#nav");
const mobileMenuBtn = document.querySelector("#menu-toggle input");

mobileMenuBtn.addEventListener("click", function() {
  mobileMenu.classList.toggle("show");
});


// FAVICON
jQuery(document).ready(function($) {
  $.iMissYou({
    title: "I Miss you !",
    favicon: {
      enabled: true,
      src: "./img/iMissYouFavicon.ico"
    }
  });
});
