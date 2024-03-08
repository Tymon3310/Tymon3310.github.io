window.onload = function() {
    const aa = document.getElementById('aa') as HTMLElement;
    if (aa) {
        aa.innerHTML = "hello js";
    }
    console.log("wczytano");
    let x = 8;
    let y = 5;
    const wyn = document.getElementById('wyn') as HTMLLIElement;
    if (wyn) {
        wyn.innerHTML = "Wynik:" + (y^2 + x) / 4 * 2;
    }

    const pi = 3.1459;
    // pi = 3.14
    console.log(pi);
    
    let rez = 5 % 2;
    console.log(rez);

    
    let licz: number = 10 / 2 + 7 * 4 - 3 + (20 / 4);
    console.log(licz);
    
    let pot = 5**3;
    console.log(pot);

function broke() {
    const body = document.getElementById('body') as HTMLElement;
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
    const content = document.getElementById('content') as HTMLElement;
    const btn = document.getElementById('modebtn') as HTMLElement;
    if (content && btn) {
        if (content.style.backgroundColor === 'white') {
            content.style.backgroundColor = 'black';
            btn.innerHTML = 'white mode';
        } else {
            content.style.backgroundColor = 'white';
            btn.innerHTML = 'dark mode';
        }
    }
}

function image() {
    const img = document.getElementById('win') as HTMLImageElement;
    const btn = document.getElementById('winbtn') as HTMLElement;
    if (img && btn) {
        if (img.src.match('win10.png')) {
            img.src = 'win11.png';
            img.style.width = '100px';
            btn.innerHTML = 'Downgrade';
        } else {
            img.src = 'win10.png';
            img.style.width = '100px';
            btn.innerHTML = 'Upgrade';
        }
    }
}

function licz() {
    let a = document.getElementById('liczbaA') as HTMLElement; 
    // a = parseFloat('a');
    let b = document.getElementById('liczbaB') as HTMLElement;
    let wyni = document.getElementById('wyni') as HTMLElement;
    // b = parseFloat('b')
    wyni.innerHTML = "Wynik: " + a + b;
}

function dod() {
    let a = parseFloat((document.getElementById('liczbaA') as HTMLInputElement).value);
    let b = parseFloat((document.getElementById('liczbaB') as HTMLInputElement).value);
    document.getElementById("wyni")!.innerHTML = (a + b).toString();
}

function odj() {
    let a = parseFloat((document.getElementById('liczbaA') as HTMLInputElement).value);
    let b = parseFloat((document.getElementById('liczbaB') as HTMLInputElement).value);
    document.getElementById("wyni")!.innerHTML = (a - b).toString();
}

function mnz() {
    let a = parseFloat((document.getElementById('liczbaA') as HTMLInputElement).value);
    let b = parseFloat((document.getElementById('liczbaB') as HTMLInputElement).value);
    document.getElementById("wyni")!.innerHTML = (a * b).toString();
}

function dze() {
    let a = parseFloat((document.getElementById('liczbaA') as HTMLInputElement).value);
    let b = parseFloat((document.getElementById('liczbaB') as HTMLInputElement).value);
    document.getElementById("wyni")!.innerHTML = (a / b).toString();
}

function old(): void {
    let wiek: number = parseInt(prompt("Podaj swój wiek:") || "0", 10);
    let wiekElement = document.getElementById("wiek");
    if (wiekElement) {
        wiekElement.innerHTML = (wiek <= 18) ? "Jesteś niepełnoletni" : "Możesz iść dalej".toString();
    }
}

