let currentPageIndex = 0;
let pdfInstance = null;
let totalPagesCount = 0;
//PDF Viewer open and close
var openPDF = document.querySelector("#pdfOpen");
var pdfBox = document.querySelector("#pdfBox");
var workingEnv = document.querySelector("#workingEnv");

//Initializing
openPDF.addEventListener('click', () => {
    workingEnv.remove();
    //Attaching template to job 2
    attachingPDFtemplate();
    //Initializing

    initPDFViewer("assets/presentation_Juan.pdf");
    initPageMode();
});


//Initializing function
function initPDFViewer(pdfURL) {
    pdfjsLib.getDocument(pdfURL).then(pdf => {
        pdfInstance = pdf;
        totalPagesCount = pdf.numPages;
        initPager();
        render();
    });
};

function attachingPDFtemplate() {
    pdfBox.innerHTML = pdfTemplate;
    const viewport = document.querySelector('#viewport');
    return viewport;
}

//PDF template to job 2
const pdfTemplate = `
<div id="pdfViwerApp">
<div role="toolbar" id="toolbar">
  <div id="pager">
    <button data-pager="prev">prev</button>
    <button data-pager="next">Go to Page</button>
  </div>
  <div id="page-mode">
    <label>Select Page <input type="number" value="1" min="1" /></label>
  </div>
  <div>
    <button style="cursor: pointer;" id="pdfClose">Close</button>
    <a href="./assets/presentation_Juan.pdf" download="Presentacion_JuanSebastian_Cabrera">Download</a>
  </div>
</div>
<div id="viewport-container">
  <div role="main" id="viewport"></div>
</div>
</div>`;

const workingEnvTemplate = `
<h3 id="gamerinfotitle2">Programmer</h3>
<h6 id="gamerinfosub2" class="text-secondary">Solution Provider</h6>
<p id="gamerinfo2"></p>
<ul id="ulist" style="text-align: left">
  <p id="enviroments">Working on Environments like :</p>
  <li>Javascript , ES6 , Typescript , Jquery Framework.</li>
  <li>Angular 2-4-5-6 Framework.</li>
  <li>PHP, laravel 5.7 Framework.</li>
  <li>Java, Spring Boot Framework.</li>
  <li>Phonegap , Ionic 3 Framework , Framework 7.</li>
  <li>
    CSS, SCSS, Material , Materialize , Bootstrap 3, 4, Phaser 3.
  </li>
  <li>
    NodeJS, Apache , nginx , Ajax , Mysql , mariaDB , JSON , Firebase
    , FireStore , GIT , Bitbucket, Composer , Docker.
  </li>
  <li>
    Google Cloud Plataform, Visual Studio Code , WebStorm , Eclipse
    photon - oxygen , Android Studio , AMPPS.
  </li>
  <li>Wordpress, PHPBB.</li>
</ul>
`;

function pdfViewDownload() {
    window.open(this.url + '#pdfjs.action=download', '_parent');
}

//Managing to have a pdf with many pages 
function render() {
    pdfInstance.getPage(currentPageIndex + 1)
        .then(page => {
            setTimeout(() => {
                viewport.innerHTML = `<div style="height: 500px; width: 500px;"><canvas></canvas></div>`
                renderPage(page)
            }, 500);
        })
}
// configurating the pages
function renderPage(page) {
    let pdfViewport = page.getViewport(1);

    const container =
        viewport.children[0];

    // Render at the page size scale.
    pdfViewport = page.getViewport(container.offsetWidth / pdfViewport.width);
    const canvas = container.children[0];
    const context = canvas.getContext("2d");
    canvas.height = pdfViewport.height;
    canvas.width = pdfViewport.width;

    page.render({
        canvasContext: context,
        viewport: pdfViewport
    });
}

function onPagerButtonsClick(event) {
    const action = event.target.getAttribute("data-pager");

    if (action === "prev") {
        if (currentPageIndex === 0) {
            return;
        }
        currentPageIndex -= pageMode;
        if (currentPageIndex < 0) {
            currentPageIndex = 0;
        }
        render();
    }
    if (action === "next") {
        if (currentPageIndex === totalPagesCount - 1) {
            return;
        }
        currentPageIndex += pageMode;
        if (currentPageIndex > totalPagesCount - 1) {
            currentPageIndex = totalPagesCount - 1;
        }
        render();
    }
}

function onPageModeChange(event) {
    pageMode = Number(event.target.value);
    render();
}

function initPageMode() {
    const input = document.querySelector("#page-mode input");
    input.setAttribute("max", totalPagesCount);
    input.addEventListener("change", onPageModeChange);
    return () => {
        input.removeEventListener("change", onPageModeChange);
    };
}



function initPager() {
    const pager = document.querySelector("#pager");
    const closePDF = document.querySelector("#pdfClose");
    const pdfViwerApp = document.querySelector("#pdfViwerApp");
    pager.addEventListener("click", onPagerButtonsClick);
    closePDF.addEventListener('click', () => {
        pdfViwerApp.remove();
        pdfBox.innerHTML = workingEnvTemplate;
    });
    return () => {
        pager.removeEventListener("click", onPagerButtonsClick);
    };

}