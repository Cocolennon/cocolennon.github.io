if(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
    window.location = "mobile";
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
        document.getElementById("abme").textContent = lf.abme;
        document.getElementById("flgt").textContent = lf.lang;
        document.getElementById("flg").src = "images/svgs/flags/" + lang + ".svg";
        document.title = lf.title;
        document.getElementById("lname").textContent = lf.myname;
        document.getElementById("laka").textContent = lf.aka;
        document.getElementById("lshort").textContent = lf.dev;
        document.getElementById("about-me").textContent = lf.aboutme;
        document.getElementById("devlang").textContent = lf.devlang;
        document.getElementById("tools").textContent = lf.tools;
    });
}

$(document).ready(function(){
    setLang(lang);
});