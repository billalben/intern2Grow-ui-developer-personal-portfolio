"use strict";

const addEventOnElements = (elements, eventType, callback) => {
  for (const element of elements) {
    element.addEventListener(eventType, callback);
  }
};

// Nav bar toggle
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = () => {
  if (window.innerWidth >= 992) return;

  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("active");
};

addEventOnElements(navTogglers, "click", toggleNavbar);

// Close navbar when clicking on link
const navLinks = document.querySelectorAll("[data-nav-link]");
addEventOnElements(navLinks, "click", toggleNavbar);

// Dynamic year copyright
const year = new Date().getFullYear();
document.querySelector(".copyright span").textContent = year;
