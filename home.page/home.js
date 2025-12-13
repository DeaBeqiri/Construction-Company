const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

document.querySelectorAll(".worker-img, .bottom-img").forEach((img) => {
  img.addEventListener("mouseover", () => {
    img.style.transform = "scale(1.03)";
  });
  img.addEventListener("mouseout", () => {
    img.style.transform = "scale(1)";
  });
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

const counters = document.querySelectorAll(".count");

counters.forEach((counter) => {
  const target = +counter.getAttribute("data-target");
  let count = 0;

  const updateCount = () => {
    if (target > 100) {
      count += 10;
    } else {
      count++;
    }
    counter.innerText = count;

    if (count < target) {
      setTimeout(updateCount, 50);
    }
  };
  updateCount();
});
