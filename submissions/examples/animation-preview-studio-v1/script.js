const animations = {

  "fade-in":{
    className:"fade-in",
    description:"Gradually increases opacity from 0 to 1."
  },

  "fade-out":{
    className:"fade-out",
    description:"Gradually decreases opacity."
  },

  "slide-up":{
    className:"slide-up",
    description:"Moves upward while appearing."
  },

  "slide-down":{
    className:"slide-down",
    description:"Moves downward while appearing."
  },

  "bounce":{
    className:"bounce",
    description:"Creates a bouncing effect."
  },

  "pulse":{
    className:"pulse",
    description:"Gently scales in and out."
  },

  "rotate":{
    className:"rotate",
    description:"Rotates 360 degrees."
  },

  "zoom-in":{
    className:"zoom-in",
    description:"Zooms into view."
  }

};

const previewBox = document.getElementById("previewBox");
const select = document.getElementById("animationSelect");

const duration = document.getElementById("duration");
const delay = document.getElementById("delay");
const iterations = document.getElementById("iterations");

const status = document.getElementById("status");

const animationName = document.getElementById("animationName");
const animationDescription =
document.getElementById("animationDescription");

Object.keys(animations).forEach(key => {

  const option = document.createElement("option");
  option.value = key;
  option.textContent = key;

  select.appendChild(option);

});

function applyAnimation(){

  const animation = animations[select.value];

  previewBox.className = "preview-box";

  void previewBox.offsetWidth;

  previewBox.classList.add(animation.className);

  previewBox.style.animationDuration =
    duration.value + "s";

  previewBox.style.animationDelay =
    delay.value + "s";

  previewBox.style.animationIterationCount =
    iterations.value;

  animationName.textContent =
    animation.className;

  animationDescription.textContent =
    animation.description;

  status.textContent = "Animation Running...";
}

document.getElementById("playBtn")
.addEventListener("click", applyAnimation);

document.getElementById("pauseBtn")
.addEventListener("click", () => {

  previewBox.style.animationPlayState =
    "paused";

  status.textContent = "Paused";

});

document.getElementById("resetBtn")
.addEventListener("click", () => {

  previewBox.className = "preview-box";

  status.textContent = "Reset";

});

document.getElementById("copyBtn")
.addEventListener("click", async () => {

  const className =
    animations[select.value].className;

  await navigator.clipboard.writeText(className);

  status.textContent =
    `Copied: ${className}`;

});

select.addEventListener("change", applyAnimation);

applyAnimation();