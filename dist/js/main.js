// Select DOM Items

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const es = document.querySelector(".es");
const homelink = document.getElementById("homelink");
const aboutlink = document.getElementById("aboutMelink");
const worklink = document.getElementById("myWorklink");
const reachMelink = document.getElementById("howtoReachMelink");
const biotext = document.getElementById("biotext");
const trekkie = document.getElementById("trekkie");
const headingtext1 = document.getElementById("headingtext1");
const headingtext2 = document.getElementById("headingtext2");
const workingarround = document.getElementById("workingarround");
const workingarroundtitle = document.getElementById("workingarroundtitle");
const enviroments = document.getElementById("enviroments");
const Letmetell = document.getElementById("Letmetell");



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

es.addEventListener("click", function () {
  ChangeToES();
  localStorage.setItem("language", true);
  const en = document.querySelector(".en");
  en.addEventListener("click", function () {
    window.location.reload(true);
    localStorage.removeItem("language");
  });
});

function ChangeToES() {
  es.classList.remove("es");
  es.classList.add("en");
  es.innerHTML = "EN";


  homelink.innerHTML = "Inicio";
  aboutlink.innerHTML = "Sobre Mi";
  worklink.innerHTML = "Mi Trabajo";
  reachMelink.innerHTML = "Como Contactarme";
};


function index() {
  if (localStorage.getItem("language")) {
    ChangeToES();
    console.log("is in es?")
  } else {
    console.log("en");
  }
}



function about() {
  if (localStorage.getItem("language")) {
    ChangeToES();
    aboutContentES();
    console.log("is in es?")
  } else {
    console.log("en");
  }
}

function aboutContentES() {
  biotext.innerHTML = "Soy una persona dedicada y comprometida a finalizar un trabajo en condiciones, " +
    "tengo gran conocimiento en Software y Hardware esto me permite detectar el problema velozmente y manteniendo la paciencia sobre todas las cosas, estoy dispuesto a expandir mis conocimientos de desarrollo" +
    "y diseño de aplicaciones web cumpliendo los requisitos necesesarios según el proyecto dado.";

  trekkie.innerHTML = "Creador de trekkiechat, una aplicación creada utilizando Ionic, con las siguientes especificaciones: " +
    "Inicio de sesión y registro internos con Firebase." +
    "Google autenticación para almacenar en su perfil personal imágenes y editar su nombre. " +
    " Chat en tiempo real con todos los usuarios registrados, también podrán agregar a amigos para chatear individualmente. " +
    " Ésta aplicación utiliza Firebase RealTimeDatebase para alojar usuarios, requets, chats e imágenes." +
    " Hice esta aplicación en dos meses y la continuo" +
    " mejorando, adaptando y aprendiendo nuevas funcionalidades." +
    " Estaré encantado de trabajar en un nuevo proyecto con su equipo. ";

  workingarroundtitle.innerHTML = "Trabajando con clientes alrededor del mundo";
  workingarround.innerHTML = "Trabajando en distintos países con clientes de  Honduras, Argentina y Alemania;" + "\n" +
    "Hablando profesionalmente con orden y claridad, escribiendo código utilizando una estructura de programación de manera profesional.";
  enviroments.innerHTML = "Trabajando en ambientes de trabajo como";
}

function work() {
  if (localStorage.getItem("language")) {
    ChangeToES();
    console.log("is in es?")
  } else {
    console.log("en");
  }
}

function contact() {
  if (localStorage.getItem("language")) {
    ChangeToES();
    console.log("is in es?")
  } else {
    console.log("en");
  }
}