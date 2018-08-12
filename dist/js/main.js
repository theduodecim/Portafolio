// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");

const navItems = document.querySelectorAll(".nav-item"); // selecting all & putting all the elements in a nodelist array

// Set Iniitial State Of Menu (here will set the animation of the state if is true do something)
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu); // adding an event for the button that takes the
// callback function

function toggleMenu() {
  if (!showMenu) {
    // if menu button is not close if not false
    // here all elements get the class show and the menubtn get close class
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    //all items
    navItems.forEach(item => item.classList.add("show"));

    showMenu = true;
  } else {
    // here all elements get the class show and the menubtn get close class
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    //all items
    navItems.forEach(item => item.classList.remove("show"));

    //set menu false
    showMenu = false;
  }
}
