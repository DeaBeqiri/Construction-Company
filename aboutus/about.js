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
const lightbox=document.getElementById("lightbox");
const lbImg=document.getElementById("lbImg");
const lbCap=document.getElementById("lbCap");
const lbclose=document.getElementById("lbClose")
