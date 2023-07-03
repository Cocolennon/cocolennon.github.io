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