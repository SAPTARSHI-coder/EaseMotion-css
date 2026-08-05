# Twirl Button · 360° spin on hover

A clean, interactive UI component where an icon spins a full 360° when you hover over the button.  
Built with HTML, CSS (external), and a tiny bit of embedded JavaScript for click feedback.

---

## 📦 Files

- `index.html` – main structure + embedded JS
- `style.css` – all styling & the spin animation
- `README.md` – this file

---

## 🚀 How to use

1. Place `index.html` and `style.css` in the same folder.
2. Open `index.html` in any modern browser.
3. Hover over the button → the icon spins smoothly.
4. Click the button → you get a subtle pulse (and a console log).

No build tools, no dependencies (except Font Awesome CDN for the icon).

---

## 🎨 Customisation

You can easily tweak the button to fit your brand:

- **Change the icon** – replace `fa-sync-alt` with any [Font Awesome](https://fontawesome.com/icons) icon.
- **Adjust spin speed** – in `style.css`, change `0.5s` inside:
  ```css
  .spin-icon {
    transition: transform 0.5s cubic-bezier(...);
  }
Change colours – update background, color, and box-shadow on .twirl-btn and .twirl-btn:hover.

🧠 How it works
The button contains a <i> (icon) inside a wrapper.

On hover, the CSS rule .twirl-btn:hover .spin-icon applies transform: rotate(360deg).

A smooth transition makes it spin elegantly.

JavaScript adds a tiny click pulse for extra feedback (optional, non-intrusive).

📁 Folder structure
text
/twirl-button/
├── index.html
├── style.css
└── README.md