"use strict";
let headerLogo = document.querySelector(".header-logo");
let headerSvg = document.querySelector(".header-logo__icon");
headerLogo.addEventListener("mouseenter", function () {
  let logoSrc = headerSvg.src;
  headerSvg.src = "./dist/img/header/logo-hover1.svg";
  headerLogo.addEventListener("mouseleave", function () {
    headerSvg.src = logoSrc;
  });
});
const burgerBtn = document.querySelector(".burger-btn");
const burgerMenu = document.querySelector(".header-navbar__list");
burgerBtn.addEventListener("mouseup", function () {
  burgerBtn.classList.toggle("burger--active");
  burgerMenu.classList.toggle("header-navbar__mobile");
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".burger-btn")) {
    burgerBtn.classList.remove("burger--active");
    burgerMenu.classList.remove("header-navbar__mobile");
  }
});

window.addEventListener("resize", function () {
  burgerMenu.classList.remove("header-navbar__mobile");
  burgerBtn.classList.remove("burger--active");
});
const burgerMenuItem = document.querySelectorAll(".header-navbar__list li a");
burgerMenu.addEventListener("mouseup", function (e) {
  e.preventDefault();
  let target = e.target;
  burgerMenuItem.forEach((e) => {
    if (target !== e) {
      e.classList.remove("navbar__link--active");
    } else {
      e.classList.add("navbar__link--active");
    }
  });
});
