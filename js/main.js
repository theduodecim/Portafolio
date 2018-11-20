// Select DOM Items

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const es = document.querySelector(".es");
const homelink = document.getElementById("homelink");
const aboutlink = document.getElementById("aboutMelink");
const worklink = document.getElementById("myWorklink");
const aboutoldwork = document.getElementById("aboutoldwork");
const reachMelink = document.getElementById("howtoReachMelink");
const biotext = document.getElementById("biotext");
const biotextoldowork = document.getElementById("biotextoldowork");
const trekkie = document.getElementById("trekkie");
const SECCO = document.getElementById("SECCO");
const headingtext1 = document.getElementById("headingtext1");
const headingtext2 = document.getElementById("headingtext2");
const workingarround = document.getElementById("workingarround");
const eCorp = document.getElementById("eCorp");
const workingarroundtitle = document.getElementById("workingarroundtitle");
const enviroments = document.getElementById("enviroments");
const Letmetell = document.getElementById("Letmetell");
const EasyCall = document.getElementById("EasyCall");
const infoES = document.getElementById("infoES");

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
  infoES.innerHTML = "Press F5 if page language of the page don´t change automatically " + '<br>' + " Presione F5 si la pagina no cambia de idioma";
  localStorage.setItem("language", true);
  const en = document.querySelector(".en");
  en.addEventListener("click", function () {
    localStorage.removeItem("language");
    window.location.reload(true);
  });
});

function ChangeToES() {
  es.classList.remove("es");
  es.classList.add("en");
  es.innerHTML = "EN";

  homelink.innerHTML = "Inicio";
  aboutlink.innerHTML = "Sobre Mi";
  worklink.innerHTML = "Mi Trabajo";
  aboutoldwork.innerHTML = "Soporte Tecnico";
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
    " Ésta aplicación utiliza Firebase RealTimeDatebase para alojar usuarios, request, chats e imágenes." + '<br>' +
    "Diceñe este proyecto en dos meses " +
    "que continuo mejorando, adaptando y aprendiendo nuevas " +
    "funcionalidades.";

  workingarroundtitle.innerHTML = "Trabajando con clientes alrededor del mundo";
  workingarround.innerHTML = "Trabajando en distintos países con clientes de  Honduras, Argentina y Alemania;" + "\n" +
    "Hablando profesionalmente con orden y claridad, escribiendo código utilizando una estructura de programación de manera profesional.";
  enviroments.innerHTML = "Trabajando en ambientes de trabajo como";
}

function aboutoldworkES() {
  biotextoldowork.innerHTML = "Experiencia en resolución de problemas de red y soporte técnico de software de administración. " +
    "Conocimiento y excelente administración de sistemas operativos estilo Unix, Ubuntu Ubuntu Server y Windows." +
    "Excelente administración de PC: Word, Excel, Power Point, " +
    "editores de Google Docs Reparación privada de PC-Tablets-Smartphones-GPS-Netbooks-Notebooks-Routers ";

  SECCO.innerHTML = "Trabajo en el área de soporte técnico con el fin de brindar soluciones" +
    "remotamente a usuarios finales en todo el país, mediante el uso de sistema de tickets OTRS," +
    "realizando configuraciones de MS Outlook, proxy, firewalls, administración de usuarios en Windows 7,8 y 10, drivers y diagnóstico de hardware. " +
    "Así como migraciones en Active Directory y MS Exchange. " +
    "Dentro de la empresa se realiza una configuración avanzada de Windows para actualizar todas las pc con sus respectivos programas dependiendo el sector correspondiente. ";

  eCorp.innerHTML = "Mantenimiento del PC:" +
    "Desfragmentar los discos duros Eliminación de TMP (Temporales) Revisar Eventos de Windows. " +
    " Realizar respaldos de los datos almacenados. (Perfiles de Windows, documentación sensible.)" +
    " Instalar las actualizaciones de seguridad de nuestro sistema operativo. Mantener aplicaciones actualizadas." +
    " Revisar herramientas antimalware y hacer un scan con el antivirus que tenga la Sucursal o descargarle alguno.  " +
    " Administrar los programas que inician con el sistema y remover los que sean innecesarios. " +
    "Monitorear el consumo de recursos de las aplicaciones para saber cuándo es necesario un upgrade de nuestro hardware. " +
    "Mantener limpio el case por dentro y por fuera para evitar que se bloquee la ventilación." +
    "Realizar inventario de las workstation. http://www.ecorp.com.ar/" +
    "Estas tareas fueron realizadas en las empresas: Medife, Simmons, Lo Jack, Cauciones, Efectivo SI, Garbarino." +
    "Relevamiento de infraestructura de sucursales" +
    "Diagrama de rack en Excel incluyendo la cantidad de unidades del rack y el equipamiento electrónico que contiene." +
    "Se verifica el equipamiento informático y los riesgos generales de las diferentes áreas" +
    "Trabajos efectuados dentro y fuera de la provincia";
  EasyCall.innerHTML =
    "Experiencia en resolución de problemas de red y soporte técnico de software de administración." +
    "Conocimiento y excelente administración de sistemas operativos estilo Unix, Ubuntu Ubuntu Server y Windows." +
    "Excelente administración de PC: Word, Excel, Power Point, editores de Google Docs Reparación privada de PC - Tablets - Smartphones - GPS - Netbooks - Notebooks - Routers";
}

/// work

function work() {
  if (localStorage.getItem("language")) {
    ChangeToES();
    console.log("is in es?")
  } else {
    console.log("en");
  }
}

$('#project1').hover(function () {
  $('#project1').attr('src', 'img/project 3.jpg');
  $('#project1').remove();
});

/*
$('#work').hover(function () {
  $('#work').css('color', 'red');
});

*/
///


function oldwork() {
  if (localStorage.getItem("language")) {
    aboutoldworkES();
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