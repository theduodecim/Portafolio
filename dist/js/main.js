// Select DOM Items
/*
$( document ).ready(function() {
  console.log( "document loaded" );
});
*/
/*

*/


const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const es = document.querySelector(".es");
const gamer = document.querySelector("#gamer");
const normal = document.querySelector("#normal");
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
const avatar = document.getElementById("avatar");
const gamerInfoTitle1 = document.getElementById("gamerinfotitle1");
const gamerInfoSub1 = document.getElementById("gamerinfosub1");
const gamerInfoTitle2 = document.getElementById("gamerinfotitle2");
const gamerInfoSub2 = document.getElementById("gamerinfosub2");
const ulist = document.getElementById("ulist");
const gamerInfo2 = document.getElementById("gamerinfo2");
gamerInfo3 = workingarround;
gamerInfoTitle3 = workingarroundtitle;
const gamerInfoSub3 = document.getElementById("gamerinfosub3");
const wolfaceImg = document.getElementById("wolfaceImg");
const wolfaceUrl = document.getElementById("wolfaceUrl");
const aboutTitle = document.getElementById("aboutTitle");
const aboutSubTitle = document.getElementById("aboutSubTitle");
const workTitle = document.getElementById("workTitle");
var workTitleSpan;
const workSubTitle = document.getElementById("workSubTitle");
const contactTitle = document.getElementById("contactTitle");
const en = document.querySelector(".en");
const esp = document.getElementById("esp");
const duodecimStudiobutton = document.getElementById("duodecimStudiobutton");
const trekkiebutton = document.getElementById("trekkiebutton");



const navItems = document.querySelectorAll(".nav-item"); // selecting all & putting all the elements in a nodelist array
// Set Iniitial State Of Menu (here will set the animation of the state if is true do something)
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu); // adding an event for the button that takes the

const nivaxel = document.querySelector("#nivaxel");
const naiades = document.querySelector("#naiades");
const mintec = document.querySelector("#mintec");



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


function ChangeToES() {

  homelink.innerHTML = "Inicio";
  aboutlink.innerHTML = "Sobre Mi";
  worklink.innerHTML = "Mi Trabajo";
  aboutoldwork.innerHTML = "Soporte Tecnico";
  reachMelink.innerHTML = "Como Contactarme";
}
/*
en.addEventListener("click", function () {
  localStorage.removeItem("language");
  window.location.reload();
});
*/




es.addEventListener("click", function () {
  ChangeToES();
  infoES.innerHTML =
    "Press F5 if page language of the page don´t change automatically " +
    "<br>" +
    " Presione F5 si la pagina no cambia de idioma";

  localStorage.setItem("language", true);
  window.location.reload();
});

en.addEventListener("click", function () {
  localStorage.removeItem("language");
  window.location.reload();
});


function index() {
  if (localStorage.getItem("language")) {
    ChangeToES();
    console.log("is in es?");
  } else {
    console.log("en");
  }
}

function about() {
  if (localStorage.getItem("language")) {
    ChangeToES();
    aboutContentES();
    console.log("is in es?");
  } else {
    console.log("en");
  }
}

function aboutContentES() {

  aboutTitle.style.color = "#eece1e";
  aboutTitle.innerHTML = "Sobre";

  aboutSpan = document.createElement("span");
  aboutSpan.innerHTML = " Mi";
  aboutSpan.style.color = "white";
  aboutTitle.appendChild(aboutSpan);


  aboutSubTitle.innerHTML = "Dejame contarte algunas cosas...";

  biotext.innerHTML =
    "Soy una persona dedicada y comprometida a finalizar un trabajo en condiciones, " +
    "tengo gran conocimiento en Software y Hardware esto me permite detectar el problema velozmente y manteniendo la paciencia sobre todas las cosas, estoy dispuesto a expandir mis conocimientos de desarrollo" +
    "y diseño de aplicaciones web cumpliendo los requisitos necesesarios según el proyecto dado.";

  trekkie.innerHTML =
    "Creador de trekkiechat, una aplicación creada utilizando Ionic, con las siguientes especificaciones: " +
    "Inicio de sesión y registro internos con Firebase." +
    "Google autenticación para almacenar en su perfil personal imágenes y editar su nombre. " +
    " Chat en tiempo real con todos los usuarios registrados, también podrán agregar a amigos para chatear individualmente. " +
    " Ésta aplicación utiliza Firebase RealTimeDatebase para alojar usuarios, request, chats e imágenes." +
    "<br>" +
    "Diceñe este proyecto en dos meses " +
    "que continuo mejorando, adaptando y aprendiendo nuevas " +
    "funcionalidades.";

  workingarroundtitle.innerHTML = "Trabajando con clientes alrededor del mundo";
  workingarround.innerHTML =
    "Trabajando en distintos países con clientes de  Honduras, Argentina y Alemania;" +
    "\n" +
    "Hablando profesionalmente con orden y claridad, escribiendo código utilizando una estructura de programación de manera profesional.";
  enviroments.innerHTML = "Trabajando en ambientes de trabajo como";
}

/// About Work Job
nivaxel.addEventListener("click", function () {
  window.location.href = 'https://www.nivaxel.com/';
});
naiades.addEventListener("click", function () {
  window.location.href = 'https://www.naiades.com.ar/';
});
mintec.addEventListener("click", function () {
  window.location.href = 'https://mintec.co/es/';
});





function aboutoldworkES() {

  aboutOldTitle.style.color = "#eece1e";
  aboutOldTitle.innerHTML = "Sobre";

  aboutOldSpan = document.createElement("span");
  aboutOldSpan.innerHTML = " Mi";
  aboutOldSpan.style.color = "white";
  aboutOldTitle.appendChild(aboutOldSpan);

  aboutOldSubTitle.innerHTML = "Dejame contarte algunas cosas...";

  biotextoldowork.innerHTML =
    "Experiencia en resolución de problemas de red y soporte técnico de software de administración. " +
    "Conocimiento y excelente administración de sistemas operativos estilo Unix, Ubuntu Ubuntu Server y Windows." +
    "Excelente administración de PC: Word, Excel, Power Point, " +
    "editores de Google Docs Reparación privada de PC-Tablets-Smartphones-GPS-Netbooks-Notebooks-Routers ";

  SECCO.innerHTML =
    "Trabajo en el área de soporte técnico con el fin de brindar soluciones" +
    "remotamente a usuarios finales en todo el país, mediante el uso de sistema de tickets OTRS," +
    "realizando configuraciones de MS Outlook, proxy, firewalls, administración de usuarios en Windows 7,8 y 10, drivers y diagnóstico de hardware. " +
    "Así como migraciones en Active Directory y MS Exchange. " +
    "Dentro de la empresa se realiza una configuración avanzada de Windows para actualizar todas las pc con sus respectivos programas dependiendo el sector correspondiente. ";

  eCorp.innerHTML =
    "Mantenimiento del PC:" +
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
    WorkES();
    console.log("is in es?");
  } else {
    console.log("en");
  }
}

function WorkES() {
  workTitle.innerHTML = "Mi";
  workTitleSpan = document.createElement("span");
  workTitleSpan.innerHTML = " Trabajo";
  workTitleSpan.style.color = "#eece1e";
  workTitle.appendChild(workTitleSpan);

  workSubTitle.innerHTML = "Mira alguno de mis proyectos";
};
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
    console.log("is in es?");
  } else {
    console.log("en");
  }
}

function contact() {
  if (localStorage.getItem("language")) {
    ChangeToES();
    console.log("is in es?");
  } else {
    console.log("en");
  }
}


function Gamer() {
  gamerInfoTitle1.innerHTML = "Gamer";
  gamerInfoTitle1.style.color = "Gold";
  gamerinfosub1.innerHTML = "Tiny Gamer History";
  avatar.removeAttribute("src");
  avatar.setAttribute("src", "img/pentium2.jpg");
  trekkie.innerHTML =
    "Gamer Aspects : " +
    "<br>" +
    "I made a living for 3 years selling Counter Strike skins known as a Trader. " +
    "<br>" +
    "I play magic the Gathering with friends and tournaments." +
    "<br>" +
    "My first time playing on a computer was in a friend PC Pentium 1 model ," +
    "<br>" +
    " the first Tomb Raider and continue playing on a rare model processor the Pentium 2 processor my first PC." +
    "<br>" +
    "I play games like Diablo, Warcraft 3 with the custom maps made by the community that inspire a lot of games nowadays, " +
    "Neverwinter Nights and another epics games of that time." +
    "<br>" +
    "I'm very sure that I play every genre up to day, so I understand functionality aspects with gamer/and programmer point of view.";
  ulist.remove();
  gamerInfoTitle2.innerHTML = "Forum :";
  gamerInfoTitle2.style.color = "Gold";
  gamerInfoSub2.innerHTML = "a Forum type of Player";
  gamerInfo2.innerHTML =
    "I Participate in world of Warcraft & Unreal Tournament 3 Forums." +
    "<br>" +
    "I can talk with people with patience and " +
    " looking for the best answer." +
    "<br>" +
    "I already setup an PHP BB environment from scratch.";

  gamerInfoTitle3.innerHTML = "Of Topic about of me";
  gamerInfoTitle3.style.color = "Gold";
  gamerInfoSub3.innerHTML = "Music Player";
  gamerInfo3.innerHTML =
    "I play guitar, piano, and violin and i release a disc with my old band Wolface" +
    "<br>" +
    "A project created within 4 years of work and Metal.";
  wolfaceUrl.innerHTML = "https://wolface.bandcamp.com/releases ";
  wolfaceImg.style.borderRadius = "50px";
  wolfaceImg.style.display = "block";
  wolfaceImg.setAttribute("src", "img/wolface.jpg");

  nivaxel.remove();
  naiades.remove();
  mintec.remove();
}

function changeToGamer() {
  if (localStorage.getItem("gamer")) {
    Gamer();
    console.log("Gamer");
  }
}

gamer.addEventListener("click", function () {
  gamer.setAttribute("class", "gameroff");
  localStorage.setItem("gamer", true);
  changeToGamer();
  normal.style.visibility = "visible";
});

normal.style.visibility = "hidden";

normal.addEventListener("click", function () {
  gamerOff();
});

function gamerOff() {
  localStorage.removeItem("gamer");
  window.location.reload(true);
}


duodecimStudiobutton.addEventListener("click", function () {
  trekkie.innerHTML = `Creator of DuodecimStudio, DuodecimStudio
    Was developed from the ground to make a simple interaction with the client and obtain the best customization
    for the new site to be developed. <br>
    By utilizing the tools: figma, google forms, google presentations. <br>
    The site was developed in Angular 8 Framework for the Front-End & for the Back-End nodeJS & Wordpress. <br>
    <br>
    <a href="https://duodecimstudio.website/?utm_source=portfolio&utm_medium=portfolio&utm_campaign=portfolio_Promo&utm_term=Promotion">www.duodecimStudio.website</a>`
});

trekkiebutton.addEventListener("click", function () {
  trekkie.innerHTML = `Creator of trekkiechat, an application made in Ionic, with the 
    following specifications: Start of internal session and registration
    with Firebase. Google authentication to store in your profile
    Personal images and edit your name. Chat in real time with all
    registered users, they can also add friends to chat individually.
    This application uses Firebase RealTimeDatebase to host users,
    request, chats and images. I made this application in two months and
    the continuous improving, adapting and learning new functionalities
    I will be happy to work on a new project in your team. <br>
    <br>
    <a href="https://play.google.com/store/apps/details?id=com.TrekkieChat.App&hl=en">Google Play Trekkie Chat</a>  `
});
