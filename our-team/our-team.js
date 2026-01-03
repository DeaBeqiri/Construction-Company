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

const openFormBtn = document.getElementById("openFormBtn");
const applyForm = document.getElementById("applyForm");
const closeFormBtn = document.getElementById("closeForm");
const jobForm = document.getElementById("jobForm");

openFormBtn.addEventListener("click", () => {
  applyForm.classList.add("show");
});

closeFormBtn.addEventListener("click", () => {
  applyForm.classList.remove("show");
});

window.addEventListener("click", (e) => {
  if (e.target === applyForm) {
    applyForm.classList.remove("show");
  }
});

jobForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you! Your application has been submitted.");
  applyForm.classList.remove("show");
  jobForm.reset();
});
