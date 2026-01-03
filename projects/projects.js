$(document).ready(function () {
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  const hamburger = document.querySelector(".hamburger");

  const navMenu = document.querySelector("header nav");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("open");
  });

  document.querySelectorAll("header nav a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      hamburger.classList.remove("open");
    });
  });

  $(".hamburger").click(function () {
    $(this).toggleClass("active");
    $(".nav-menu").toggleClass("active");
  });

  $(".nav-menu a").click(function () {
    $(".hamburger").removeClass("active");
    $(".nav-menu").removeClass("active");
  });
});
