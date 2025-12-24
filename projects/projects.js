const header = document.querySelector('header');
const maxScroll = 200; 

window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset;

  let progress = Math.min(scrollY / maxScroll, 1);


  header.style.transform = `translateY(-${progress * 100}%)`;

  header.style.opacity = `${1 - progress}`;
});