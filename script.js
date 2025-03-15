document.addEventListener('contextmenu', event => event.preventDefault());

var lang = navigator.language.substring(0, 2);

function getLanguageFile(_callback) {
    $.getJSON("https://bio.cocolennon.xyz/language/" + lang + ".json", function(data) {
        _callback(data);
    });
}

function setLang(l) {
    if(l != lang) lang = l;
    getLanguageFile(function(lf) {
        document.getElementById("abme").textContent = lf.abme;
        document.getElementById("nprojects").textContent = lf.projects;
        document.getElementById("flgt").textContent = lf.lang;
        document.getElementById("flg").src = "images/svgs/flags/" + lang + ".svg";
        document.title = lf.title;
        document.getElementById("lname").textContent = lf.myname;
        document.getElementById("laka").textContent = lf.aka;
        document.getElementById("lshort").textContent = lf.dev;
        document.getElementById("about-me").textContent = lf.aboutme;
        document.getElementById("devlang").textContent = lf.devlang;
        document.getElementById("tools").textContent = lf.tools;
        document.getElementById("projects").textContent = lf.projects;
        document.getElementById("projs").textContent = lf.psub;
    });
}

$(document).ready(function(){
    setLang(lang);
});
