const input = document.getElementById("typingInput");

const texts = [
  "Search animations...",
  "Find UI effects...",
  "Discover CSS tricks...",
  "Explore components..."
];

let textIndex = 0;
let charIndex = 0;

function typeText() {
  const currentText = texts[textIndex];

  input.setAttribute(
    "placeholder",
    currentText.slice(0, charIndex++)
  );

  if (charIndex <= currentText.length) {
    setTimeout(typeText, 100);
  } else {
    setTimeout(() => {
      charIndex = 0;
      textIndex = (textIndex + 1) % texts.length;
      typeText();
    }, 1500);
  }
}

typeText();