const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
    if(window.scrollY > 50){
        navbar.classList.add("scrolled");
    }
    else{
        navbar.classList.remove("scrolled");
    }
});

document.querySelectorAll('.worker-img, .bottom-img').forEach(img =>{
    img.addEventListener('mouseover', () =>{
        img.style.transform = "scale(1.03)";
    });
    img.addEventListener('mouseout', () =>{
        img.style.transform = "scale(1)";
    });
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("header nav");

hamburger.addEventListener("click", ()=>{
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("open");
});

document.querySelectorAll("header nav a").forEach(link => {

    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        hamburger.classList.remove("open");
    });
});

const userName = "Filan";
const userSpan = document.createElement("span");
userSpan.style.marginLeft = "20px";
userSpan.style.color = "#ff7a29";
userSpan.textContent=`Welcome, ${username}`;
document.querySelector(".logo").appendChild(userSpan);



