# Ease Scroll Reveal Scale

This demo implements a **scroll reveal scale animation** where elements scale up and fade in as they enter the viewport.

## 🧠 How It Works
- Elements start at `scale(0.9)` and `opacity(0)`.
- When visible, they transition to `scale(1)` and `opacity(1)` using the `.ease-visible` class.
- The effect is triggered by `IntersectionObserver`.

## 🧩 Files
- `demo.html` — main demo with grid layout.
- `style.css` — styling and animation logic.
- `script.js` — intersection observer for scroll reveal.
- `README.md` — documentation and usage notes.

## 🚀 Usage
1. Open `demo.html` in a browser.
2. Scroll down — cards scale and fade in as they appear.
3. Adjust transition duration or threshold in `style.css` and `script.js`.

## 🧰 Technologies
- HTML5
- CSS3 (transitions, transforms)
- JavaScript (IntersectionObserver)
