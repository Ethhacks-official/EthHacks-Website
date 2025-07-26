const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const dropdownitems = document.querySelectorAll(".dropdown .dropdown-item");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");



menuOpenButton.addEventListener("click", () => {

    document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => menuOpenButton.click());

navLinks.forEach(link => {
  link.addEventListener("click", ()=> {if (!link.textContent.includes("DOCUMENTATION")) {
    menuOpenButton.click(); }})
});

dropdownitems.forEach(dropdownitem => {
  dropdownitem.addEventListener("click", ()=> menuOpenButton.click())
});


/// Slider code:
new Swiper(".wrapper", {
  loop: true,
  spaceBetween: 30,
  // Autoplay
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  // Pagination bullets
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

