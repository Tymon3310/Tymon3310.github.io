window.onload = function() {
    const aa = document.getElementById('aa') as HTMLElement;
    if (aa) {
        aa.innerHTML = "hello js";
    }
    console.log("wczytano");
};

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
            btn.innerHTML = 'Downgrade';
        } else {
            img.src = 'win10.png';
            btn.innerHTML = 'Upgrade';
        }
    }
}
