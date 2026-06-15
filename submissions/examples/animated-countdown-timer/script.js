let totalSeconds = 2 * 3600 + 59 * 60 + 54;

const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function animateDigit(element, value) {
  element.classList.remove("flip");
  void element.offsetWidth; // Trigger reflow
  element.textContent = value;
  element.classList.add("flip");
}
function updateTimer() {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  animateDigit(hoursEl, String(hours).padStart(2, "0"));
  animateDigit(minutesEl, String(minutes).padStart(2, "0"));
  animateDigit(secondsEl, String(seconds).padStart(2, "0"));

  if (totalSeconds > 0) {
    totalSeconds--;
  }
}
updateTimer();
setInterval(updateTimer, 1000);
