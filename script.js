//langugage
function en() {
    window.location.href = '/EN';
}
function pl() {
    window.location.href = '/';
}
//theme switch\
function light() {
    var elements = document.getElementsByClassName('content');
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.toggle("dark-mode");
    }
}
