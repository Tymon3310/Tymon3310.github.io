window.onload = function() {
  displayTime();
};
//langugage

function en(){
  window.location.href = '/EN';
}

function pl(){
  window.location.href = '/';
}

//theme switch
function light() {
  var elements = document.getElementsByClassName('content');
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.toggle("light-mode");
  }
}

function displayTime() {
  console.log("time updated");
  const options: Intl.DateTimeFormatOptions = { timeZone: "Europe/Warsaw", hour: "2-digit", minute: "2-digit", hour12: false };
  const event = new Date();
  const timeString = event.toLocaleTimeString('pl-PL', options);
  const timeElement = document.getElementById('time');
  if (timeElement !== null) {
    timeElement.innerText = timeString;
  }
}

// Run the function every minute
setInterval(displayTime, 30000);

