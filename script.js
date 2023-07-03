if(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
    window.location = "mobile";
}

let grid = document.getElementById("grid");
let gridHalfWidth = grid.offsetWidth / 2;

let crs = document.getElementById("cursor");
let crsHalfWidth = crs.offsetWidth / 2;

document.onmousemove = function(e) {
    grid.style.left = e.pageX - gridHalfWidth + "px";
    grid.style.top = e.pageY - gridHalfWidth + "px";

    crs.style.left = e.pageX - crsHalfWidth + "px";
    crs.style.top = e.pageY - crsHalfWidth + "px";
}

document.addEventListener('contextmenu', event => event.preventDefault());

var lang = navigator.language.substring(0, 2);

function getLanguageFile(_callback) {
    $.getJSON("https://www.cocolennon.xyz/language/" + lang + ".json", function(data) {
        _callback(data);
    });
}

function setLang(l) {
    if(l != lang) lang = l;
    getLanguageFile(function(lf) {
        document.title = lf.title;
        document.getElementById("lname").textContent = lf.myname;
        document.getElementById("laka").textContent = lf.aka;
        document.getElementById("lshort").textContent = lf.dev;
    });
}

$(document).ready(function(){
    setLang(lang);
});