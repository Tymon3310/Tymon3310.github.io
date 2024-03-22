// window.onload = function() {
{
    const aa = document.getElementById('aa');
    if (aa) {
        aa.innerHTML = "hello js";
    }
    console.log("wczytano");
    let x = 8;
    let y = 5;
    const wyn = document.getElementById('wyn');
    if (wyn) {
        wyn.innerHTML = "Wynik:" + (y ^ 2 + x) / 4 * 2;
    }
}
const pi = 3.1459;
// pi = 3.14
console.log(pi);
{
    let rez = 5 % 2; //reszta
    console.log(rez);
    let licz = 10 / 2 + 7 * 4 - 3 + (20 / 4);
    console.log(licz);
    let pot = 5 ** 3; //potęgowanie
    console.log(pot);
}
{
    let xy = 0;
    console.log(xy); //wys
    console.log(++xy); //zwiększ i wys
    console.log(xy++); //wys i zwi
    console.log(xy); //wys
    console.log(--xy); //zmi i wys
    console.log(xy--); //wys i zmi
    console.log(xy); //wys
    xy += 5; //dodaj zwiększ xy o 5
    let xyz = 3;
    let pow = Math.pow(xy, xyz); //potęgowanie
    console.log(pow);
    console.log(typeof xyz);
    let stri = "text";
    console.log(typeof stri);
}
{
    let BitA = 192; //binarny
    let BitB = 255;
    let BitC = BitA & BitB;
    console.log(BitC.toString(2));
    console.log(BitA & BitB);
}
// }
function broke() {
    const body = document.getElementById('body');
    if (body) {
        body.style.fontSize = '10000px';
    }
    console.error("i co zrobiłeś??");
    setTimeout(() => {
        if (body) {
            body.style.fontSize = '14px';
        }
        alert("Naprawiono");
        console.warn("Naprawiono, i lepej nie rób tego więcej");
    }, 3000);
}
function mode() {
    const content = document.getElementById('content');
    const btn = document.getElementById('modebtn');
    if (content.style.backgroundColor === 'white') {
        content.style.backgroundColor = 'black';
        btn.innerHTML = 'white mode';
    }
    else {
        content.style.backgroundColor = 'white';
        btn.innerHTML = 'dark mode';
    }
}
function image() {
    const img = document.getElementById('win');
    const btn = document.getElementById('winbtn');
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
{ //kalkulator
    function dod() {
        let a = parseFloat(document.getElementById('liczbaA').value);
        let b = parseFloat(document.getElementById('liczbaB').value);
        document.getElementById("wyni").innerHTML = (a + b).toString();
    }
    function odj() {
        let a = parseFloat(document.getElementById('liczbaA').value);
        let b = parseFloat(document.getElementById('liczbaB').value);
        document.getElementById("wyni").innerHTML = (a - b).toString();
    }
    function mnz() {
        let a = parseFloat(document.getElementById('liczbaA').value);
        let b = parseFloat(document.getElementById('liczbaB').value);
        document.getElementById("wyni").innerHTML = (a * b).toString();
    }
    function dze() {
        let a = parseFloat(document.getElementById('liczbaA').value);
        let b = parseFloat(document.getElementById('liczbaB').value);
        document.getElementById("wyni").innerHTML = (a / b).toString();
    }
}
function old() {
    let wiek = parseInt(prompt("Podaj swój wiek:") || "0", 10);
    let wiekElement = document.getElementById("wiek");
    if (wiekElement) {
        wiekElement.innerHTML = (wiek <= 18) ? "Jesteś niepełnoletni" : "Możesz iść dalej".toString();
    }
}
{ //temp convert
    {
        function celsjusze(kelwin) {
            let stopnie = kelwin + 273.15;
            return stopnie;
        }
        console.log(celsjusze(1));
    }
    {
        function kelwiny(celsjusze) {
            let stopnie = celsjusze - 273.15;
            return stopnie;
        }
        console.log(kelwiny(255));
    }
}
function zmLocal() {
    let xxx = 5;
    console.log(xxx);
}
zmLocal();
let xxx = 10; //zmienna globalna
console.log(xxx);
const auto = {
    marka: "Oplel",
    model: "Astra",
    silnk: 1.6,
    paliwo: "disel",
    kolor: "czarny",
    rocznik: "2002",
    markaModel: function () {
        return "Marka samochodu to: " + this.marka + ", a model to: " + this.model;
    },
    cnsp: function () {
        console.log(this.markaModel());
    },
};
console.log(auto.markaModel());
auto.cnsp();
function zmn() {
    document.getElementById("najed").innerHTML = "<img src='win11.png' id='najed'>";
}
function zmn_p() {
    const p = document.getElementById('najedz');
    const img = document.createElement('img');
    img.src = 'win11.png';
    p.parentNode.replaceChild(img, p);
}
