const el = document.getElementById("typewriterText");
const phrases = [
  "a developer.",
  "a designer.",
  "a creator.",
  "a problem solver.",
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const current = phrases[phraseIndex];
  if (isDeleting) {
    el.textContent = current.substring(0, charIndex--);
  } else {
    el.textContent = current.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === current.length + 1) {
    isDeleting = true;
    setTimeout(type, 1500);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
  }

  const delay = isDeleting ? 50 : 100;
  setTimeout(type, delay);
}

type();
