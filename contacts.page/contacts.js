//NAVBAR SCROLL EFFECT

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

//LEAFLET MAP

var map = L.map("map").setView([42.64881601977948, 21.16718912832117], 16);

// Add OpenStreetMap tiles
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Add marker with popup
L.marker([42.64881601977948, 21.16718912832117])
  .addTo(map)
  .bindPopup("Urban Build Office")
  .openPopup();

//CONTACT FORM VALIDATION

$(document).ready(function () {
  $(".contact-form").on("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    $(".form-input").each(function () {
      const value = $(this).val().trim();
      const type = $(this).attr("type");

      // check for empty fields
      if (value === "") {
        $(this).css("border", "2px solid red"); //borders red
        isValid = false;
      } else {
        $(this).css("border", "none"); //remove borders on no error
      }

      // email validation
      if (type === "email" && value !== "") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //email regex pattern
        if (!emailRegex.test(value)) {
          $(this).css("border", "2px solid red"); //borders red
          isValid = false;
        } else {
          $(this).css("border", "none"); //remove borders on no error
        }
      }
    });

    if (!isValid) {
      shakeButton(); // shake if any field invalid
      return;
    }

    // on no error proceeds
    const button = $(".submit-button");
    button.text("Sending...").prop("disabled", true); //disable button & 'Sending...' for 1.2 seconds

    setTimeout(function () {
      button.text("Message Sent"); //resets form after 2 seconds of 'Message Sent'

      setTimeout(function () {
        button.text("Submit").prop("disabled", false); //enable button
        $(".contact-form")[0].reset(); //reset form
        $(".form-input").css("border", "none"); // reset borders
      }, 2000);
    }, 1200);
  });

  // Remove red border when input field is filled
  $(".form-input").on("input", function () {
    const value = $(this).val().trim();
    const type = $(this).attr("type");

    if (value !== "") {
      if (type === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //email regex pattern
        if (emailRegex.test(value)) {
          $(this).css("border", "none"); //removes border if email regex valid & not empty
        }
      } else {
        $(this).css("border", "none"); //removes border if not empty
      }
    }
  });
});

// SHAKE FUNCTION

function shakeButton() {
  $(".submit-button")
    .animate({ left: "-6px" }, 60)
    .animate({ left: "6px" }, 60)
    .animate({ left: "-6px" }, 60)
    .animate({ left: "6px" }, 60)
    .animate({ left: "0px" }, 60);
}
