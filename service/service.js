const menuBtn=document.querySelector(".menuButton");
const nav=document.getElementById('nav');

if(menuBtn && nav){
    menuBtn.addEventListener("click", ()=> {
        nav.classList.toggle("open");
    });
}



const faqToggleBtn=document.getElementById("faqQ");
const faqBox=document.getElementById("faq");

if(faqToggleBtn &&faqBox){
    faqToggleBtn.addEventListener("click", () =>{
        const isHidden=getComputedStyle(faqBox).display=== "none";
        faqBox.style.display= isHidden ? "block" : "none";
    });
}



const faqButtons=document.querySelectorAll(".faqe-q");
faqButtons.forEach((btn) =>{
    btn.addEventListener("click", ()=> {
        const item=btn.closest(".faq-item");
        if(!item) return;
        const answer=item.querySelector(".faq-a");
        const icon=btn.querySelector("span");
     if(!answer)return;

        document.querySelectorAll(".faq-item").forEach((other)=> {
            if(other !== item){
              
                const otherAnswer=other.querySelector(".faq-a");
                const otherIcon=other.querySelector(".faqe-q span");
                if(otherAnswer)otherAnswer.style.display="none";
                if(otherIcon) otherIcon.textContent="+";
            }
        });

const isOpen=answer.style.display==="block";
answer.style.display= isOpen? "none": "block";
icon.textContent=isOpen ? "+" :"-";



    });
});








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
