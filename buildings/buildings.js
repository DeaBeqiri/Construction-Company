const galleryImages = document.querySelectorAll('#image-gallery img');
let currentIndex = 0;

function showImage(index) {
  galleryImages.forEach((img, i) => {
    img.style.display = i === index ? 'block' : 'none';
  });
}

showImage(currentIndex);

const prevButton = document.createElement('button');
const nextButton = document.createElement('button');

prevButton.innerHTML = '&#10094;';
nextButton.innerHTML = '&#10095;';

prevButton.classList.add('arrow', 'left');
nextButton.classList.add('arrow', 'right');

const galleryContainer = document.getElementById('image-gallery');
galleryContainer.style.position = 'relative';
galleryContainer.appendChild(prevButton);
galleryContainer.appendChild(nextButton);

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  showImage(currentIndex);
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  showImage(currentIndex);
});


const header = document.querySelector('header');
const maxScroll = 200;

window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset;
  const progress = Math.min(scrollY / maxScroll, 1);

  header.style.transform = `translateY(-${progress * 100}%)`;
  header.style.opacity = `${1 - progress}`;
});


const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.classList.add('active');
  });
});

lightbox.addEventListener('click', () => {
  lightbox.classList.remove('active');
});

const lbPrev = document.getElementById('lightbox-prev');
const lbNext = document.getElementById('lightbox-next');

lbPrev.addEventListener('click', (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  lightboxImg.src = galleryImages[currentIndex].src;
});

lbNext.addEventListener('click', (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex + 1) % galleryImages.length;
  lightboxImg.src = galleryImages[currentIndex].src;
});