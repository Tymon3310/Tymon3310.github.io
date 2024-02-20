window.onload = function() {
    document.getElementById('aa').innerHTML = "hello js";
};

function abc() {
    document.getElementById('body').style.fontSize = '10000px'
    setTimeout(def, 3000)
}

function def() {
    document.getElementById('body').style.fontSize = '14px'
    alert("Naprawiono")
}

function toggleMode() {
    var content = document.getElementById('content');
    var btn = document.getElementById('modebtn');
    if (content.style.backgroundColor === 'white') {
        content.style.backgroundColor = 'black';
        btn.innerHTML = 'white mode';
    } else {
        content.style.backgroundColor = 'white';
        btn.innerHTML = 'dark mode';
    }
}

function toggleImage() {
    var img = document.getElementById('win');
    var btn = document.getElementById('winbtn');
    if (img.src.match('win10.png')) {
        img.src = 'win11.png';
        btn.innerHTML = 'Downgrade';
    } else {
        img.src = 'win10.png';
        btn.innerHTML = 'Upgrade';
    }
}
