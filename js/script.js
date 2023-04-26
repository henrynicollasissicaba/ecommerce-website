// menu interaction
const menuIcon = document.querySelector("#menu");

menuIcon.addEventListener("click", () => {
  document.querySelector(".navbar").classList.toggle("active");
  menuIcon.classList.toggle("bx-x");
});

// if click on the link, close menu
const navBar = document.querySelectorAll(".navbar ul li a");

navBar.forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".navbar").classList.remove("active");
    menuIcon.classList.remove("bx-x");
  });
});

// scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  header.classList.toggle("active", window.scrollY > 0);
});

// swiper
var swiper = new Swiper(".product-slider", {
  slidesPerView: 3,
  loop: true,
  spaceBetween: 30,
  grabCursor: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1056: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});