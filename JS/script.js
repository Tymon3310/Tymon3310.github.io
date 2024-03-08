window.onload = function () {
    var aa = document.getElementById('aa');
    if (aa) {
        aa.innerHTML = "hello js";
    }
    console.log("wczytano");
    var x = 8;
    var y = 5;
    var wyn = document.getElementById('wyn');
    if (wyn) {
        wyn.innerHTML = "Wynik:" + (y ^ 2 + x) / 4 * 2;
    }
    var pi = 3.1459;
    // pi = 3.14
    console.log(pi);
    var rez = 5 % 2;
    console.log(rez);
    var licz = 10 / 2 + 7 * 4 - 3 + (20 / 4);
    console.log(licz);
    var pot = Math.pow(5, 3);
    console.log(pot);
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
            img.style.width = '100px';
            btn.innerHTML = 'Downgrade';
        }
        else {
            img.src = 'win10.png';
            img.style.width = '100px';
            btn.innerHTML = 'Upgrade';
        }
    }
}
function licz() {
    var a = document.getElementById('liczbaA');
    // a = parseFloat('a');
    var b = document.getElementById('liczbaB');
    var wyni = document.getElementById('wyni');
    // b = parseFloat('b')
    wyni.innerHTML = "Wynik: " + a + b;
}
function dod() {
    var a = parseFloat(document.getElementById('liczbaA').value);
    var b = parseFloat(document.getElementById('liczbaB').value);
    document.getElementById("wyni").innerHTML = (a + b).toString();
}
function odj() {
    var a = parseFloat(document.getElementById('liczbaA').value);
    var b = parseFloat(document.getElementById('liczbaB').value);
    document.getElementById("wyni").innerHTML = (a - b).toString();
}
function mnz() {
    var a = parseFloat(document.getElementById('liczbaA').value);
    var b = parseFloat(document.getElementById('liczbaB').value);
    document.getElementById("wyni").innerHTML = (a * b).toString();
}
function dze() {
    var a = parseFloat(document.getElementById('liczbaA').value);
    var b = parseFloat(document.getElementById('liczbaB').value);
    document.getElementById("wyni").innerHTML = (a / b).toString();
}
function old() {
    var wiek = parseInt(prompt("Podaj swój wiek:") || "0", 10);
    var wiekElement = document.getElementById("wiek");
    if (wiekElement) {
        wiekElement.innerHTML = (wiek <= 18) ? "Jesteś niepełnoletni" : "Możesz iść dalej".toString();
    }
}
