# Holographic Map Embed

A modern **Holographic Map Embed** component built for **EaseMotion CSS**. The component wraps a standard map embed with a lightweight holographic animation using pure CSS, providing a polished and reusable UI block for websites and dashboards.

---

## Features

- ✨ Pure CSS holographic animation
- 🗺️ Works with any embedded map
- 📱 Fully responsive
- 🎨 Uses EaseMotion CSS variables and design tokens
- 🚫 No JavaScript required
- ♿ Accessible iframe implementation

---

## Files

```
holographic-map-embed-as/
├── demo.html
├── style.css
└── README.md
```

---

## Usage

```html
<div class="ease-map-container">

  <iframe
    src="https://www.google.com/maps?q=India+Gate+New+Delhi&output=embed">
  </iframe>

</div>
```

---

## Accessibility

- Uses a descriptive `title` on the iframe
- Responsive across desktop and mobile
- Decorative animation does not interfere with interaction

---

## Responsive

The embedded map automatically scales to the available width while maintaining an appropriate height across different screen sizes.

---

## Why it fits EaseMotion CSS

This component enhances a common UI pattern with a subtle holographic animation while keeping the implementation lightweight, reusable, and fully CSS-based.

---

## Author

Created as a GSSoC'26 contribution for **EaseMotion CSS**.