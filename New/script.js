// window.onload = (event) => {
//   const resizeOps = () => {
// document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
// };
// resizeOps();
// window.addEventListener("resize", resizeOps);
// };
// var siteWidth = 1280;
// var scale = screen.width /siteWidth;
// document.querySelector('meta[name="viewport"]').setAttribute('content', 'width='+siteWidth+', initial-scale='+scale+'');
// const mobile = document.querySelector(".mobile"),
// pc = document.querySelector(".computer"),
// media = window.matchMedia("(max-width: 1000px)")
//   if (media.matches) {
// mobile.style.display = "none"
// pc.style.display = "block"
//  } else {
// pc.style.display = "none"
// mobile.style.display = "block" 
// }
//theme switch
function dark() {
    var element = document.getElementById('content');
    if (element) {
        element.classList.toggle("dark-mode");
    }
}
//langugage
// function en(){
//   window.open('/EN', '_self');
// }
// function pl(){
//   window.open('/', '_self');
// }
