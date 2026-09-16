# Ease Sticky Reveal

This demo implements a **sticky + animation combination pattern** where an element becomes sticky at the top of the viewport and triggers an animation when it reaches that position.

## 🧠 How It Works
- Uses `position: sticky` for the header.
- A sentinel element is observed using `IntersectionObserver`.
- When the sentinel leaves the viewport, the header receives an `.reveal` class.
- The `.reveal` class triggers a scale and background color animation.

## 🧩 Files
- `demo.html` — main demo structure.
- `style.css` — styling and animation logic.
- `script.js` — intersection observer logic.
- `README.md` — documentation and usage notes.

## 🚀 Usage
1. Open `demo.html` in a browser.
2. Scroll down — the header animates when it becomes sticky.
3. Adjust animation styles in `style.css` as needed.

## 🧰 Technologies
- HTML5
- CSS3 (transitions, sticky positioning)
- JavaScript (IntersectionObserver)
