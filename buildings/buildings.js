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
/* Galeria e imazheve */
const galleryImages = document.querySelectorAll("#image-gallery img");
let currentIndex = 0;

/* Shfaqja e imazheve me tranzicijon mes tyre */
function showImage(index) {
  galleryImages.forEach((img, i) => {
    img.style.opacity = "0";
    img.style.display = i === index ? "block" : "none";
  });

  setTimeout(() => {
    if (galleryImages[index]) galleryImages[index].style.opacity = "1";
  }, 20);
}

showImage(currentIndex);

/* Butonat shigjeta per navigimin ne galeri */
const galleryContainer = document.getElementById("image-gallery");

const prevButton = document.createElement("button");
const nextButton = document.createElement("button");

prevButton.innerHTML = "&#10094;";
nextButton.innerHTML = "&#10095;";

prevButton.classList.add("arrow", "left");
nextButton.classList.add("arrow", "right");

galleryContainer.style.position = "relative";
galleryContainer.append(prevButton, nextButton);

/* ======================================================
   NAVIGATION EVENTS
   ====================================================== */
prevButton.addEventListener("click", () => {
  currentIndex =
    (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  showImage(currentIndex);
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  showImage(currentIndex);
});

/* Elementet e Lightbox-it per fullscreen */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lbPrev = document.getElementById("lightbox-prev");
const lbNext = document.getElementById("lightbox-next");

/* Hapja e lightbox-it me prekje te imazhit */
galleryImages.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    lightboxImg.src = img.src;
    lightbox.classList.add("active");
  });
});

/* Mbyllja e lightbox-it */
lightbox.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

/* Navigimi me shigjeta ne lightbox*/
lbPrev.addEventListener("click", (e) => {
  e.stopPropagation();
  currentIndex =
    (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  lightboxImg.src = galleryImages[currentIndex].src;
});

lbNext.addEventListener("click", (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex + 1) % galleryImages.length;
  lightboxImg.src = galleryImages[currentIndex].src;
});

/* Kontrollimi i lightbox me tastature */
document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("active")) return;

  switch (e.key) {
    case "Escape":
      lightbox.classList.remove("active");
      break;
    case "ArrowLeft":
      currentIndex =
        (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      lightboxImg.src = galleryImages[currentIndex].src;
      break;
    case "ArrowRight":
      currentIndex = (currentIndex + 1) % galleryImages.length;
      lightboxImg.src = galleryImages[currentIndex].src;
      break;
  }
});

/* Integrimi i hartes */
const map = L.map("map").setView([42.650611, 21.182639], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

/* Use scalable marker map */
const buildingMarkers = {
  "building1.html": [42.650611, 21.182639, "Complex 1 Location"],
  "building2.html": [42.655, 21.19, "Complex 2 Location"],
  "building3.html": [42.66, 21.2, "Complex 3 Location"],
  "building4.html": [42.665, 21.21, "Complex 4 Location"],
  "building5.html": [42.67, 21.22, "Complex 5 Location"],
  "building6.html": [42.675, 21.23, "Complex 6 Location"],
};

const page = window.location.pathname.split("/").pop();
if (buildingMarkers[page]) {
  const [lat, lng, popup] = buildingMarkers[page];
  L.marker([lat, lng]).addTo(map).bindPopup(popup);
}
