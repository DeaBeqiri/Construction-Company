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

document.addEventListener("DOMContentLoaded", () => {
    const lightbox=document.getElementById("lightbox");
    const lbImg=document.getElementById("lbImg");
    const lbCap=document.getElementById("lbCap");
    const lbClose=document.getElementById("lbClose");

    const cards=document.querySelectorAll(".card");

    function openLightbox(imgSrc,caption){
        lbImg.src=imgSrc;
        lbCap.textContent=caption;
        lightbox.classList.add("show");
        document.body.style.overflow="hidden";
    }
    function closeLightbox(){
        lightbox.classList.remove("show");
        lbImg.src="";
        lbCap.textContent="";
        document.body.style.overflow="";

    }
    cards.forEach((card) =>{

        const img=card.querySelector("img");
          const title=card.querySelector(".cap b");
            const desc=card.querySelector(".cap span");
              const fullImg=card.querySelector("a.src");

              if(!img) return;

              img.style.cursor="pointer";


              img.addEventListener("click",(e)=> {

                e.preventDefault();
                e.stopPropagation();
                const imgSrc=(fullImg && fullImg.getAttribute("href"))||img.src;
                const caption=`${title?.textContent||""} - ${desc?.textContent||""}`;
                openLightbox(imgSrc,caption);

              });
            });
            lbClose.addEventListener("click",closeLightbox);

            lightbox.addEventListener("click",(e) =>{

                if(e.target === lightbox)closeLightbox();
            });

            document.addEventListener("keydown",(e) =>{
                if(e.key==="Escape") closeLightbox();
            });
            console.log("lightbox ready",document.querySelectorAll(".card").length);

    });



  