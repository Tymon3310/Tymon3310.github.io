"use strict";
window.onload = function () {
    var aa = document.getElementById('aa');
    if (aa) {
        aa.innerHTML = "hello js";
    }
    console.log("wczytano");
};
function broke() {
    var body = document.getElementById('body');
    if (body) {
        body.style.fontSize = '10000px';
    }
    console.error("i co zrobiłeś??");
    setTimeout(function () {
        if (body) {
            body.style.fontSize = '14px';
        }
        alert("Naprawiono");
        console.warn("Naprawiono, i lepej nie rób tego więcej");
    }, 3000);
}
function mode() {
    var content = document.getElementById('content');
    var btn = document.getElementById('modebtn');
    if (content && btn) {
        if (content.style.backgroundColor === 'white') {
            content.style.backgroundColor = 'black';
            btn.innerHTML = 'white mode';
        }
        else {
            content.style.backgroundColor = 'white';
            btn.innerHTML = 'dark mode';
        }
    }
}
function image() {
    var img = document.getElementById('win');
    var btn = document.getElementById('winbtn');
    if (img && btn) {
        if (img.src.match('win10.png')) {
            img.src = 'win11.png';
            btn.innerHTML = 'Downgrade';
        }
        else {
            img.src = 'win10.png';
            btn.innerHTML = 'Upgrade';
        }
    }
}
