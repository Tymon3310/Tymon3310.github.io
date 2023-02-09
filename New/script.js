var siteWidth = 1280;
var scale = screen.width /siteWidth;

document.querySelector('meta[name="viewport"]').setAttribute('content', 'width='+siteWidth+', initial-scale='+scale+'');

const mobile = document.querySelector(".mobile"),
pc = document.querySelector(".computer"),
media = window.matchMedia("(max-width: 1000px)")

  if (media.matches) {
mobile.style.display = "none"
pc.style.display = "block"
} else {
pc.style.display = "none"
mobile.style.display = "block" 
}