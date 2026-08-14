# Scroll-to-Top UI Enhancement

A lightweight UI enhancement for EaseMotion CSS that improves navigation and visual appeal with a floating **Scroll-to-Top** button and an animated gradient background.

---

## Features

- ⬆️ Floating Scroll-to-Top button
- 🎨 Animated gradient background
- ✨ Floating background glow effect
- 📱 Fully responsive layout
- ⚡ Lightweight CSS animations
- 🚀 Smooth scrolling interaction
- 🎯 Uses EaseMotion CSS utility classes

---

## Demo

Open `demo.html` directly in your browser.

The showcase demonstrates:

- Scroll-triggered floating action button
- Smooth scrolling back to the top
- Animated gradient background
- Responsive cards using EaseMotion utility classes

---

## Folder Structure

```text
submissions/
└── examples/
    └── scroll-to-top-ui-enhancement/
        ├── demo.html
        ├── style.css
        └── README.md
```

---

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- EaseMotion CSS

---

## How It Works

### Scroll-to-Top Button

The button remains hidden until the page is scrolled down. Once visible, clicking it smoothly scrolls the page back to the top.

```javascript
window.scrollTo({
  top: 0,
  behavior: "smooth"
});
```

---

### Animated Background

A CSS keyframe animation moves a multi-color gradient continuously across the background.

```css
background-size: 400% 400%;
animation: gradientMove 15s ease infinite;
```

Additional blurred floating elements create subtle motion without affecting performance.

---

## EaseMotion Classes Used

- `ease-fade-in`
- `ease-hover-lift`

These utility classes enhance entrance and hover interactions while keeping the implementation lightweight.

---

## Customization

You can easily customize:

- Background colors
- Animation duration
- Scroll button color
- Card transparency
- Floating glow size
- Hover effects

All values are defined in `style.css`.

---

## Performance

The animations use GPU-friendly CSS properties such as:

- `transform`
- `opacity`
- `background-position`

This helps maintain smooth rendering while minimizing layout recalculations.

---

## Browser Support

- ✅ Chrome
- ✅ Firefox
- ✅ Edge
- ✅ Safari

---

## Accessibility

- Semantic HTML structure
- Accessible scroll button with `aria-label`
- Responsive layout for different screen sizes
- Smooth interactions without interfering with keyboard navigation

---

## Why It Fits EaseMotion CSS

This enhancement follows the EaseMotion CSS philosophy by providing:

- Lightweight animations
- Human-readable structure
- Modern visual design
- Reusable UI enhancement
- Zero external JavaScript dependencies beyond minimal vanilla JS for interaction

It serves as a practical example of how subtle animations can improve usability while maintaining excellent performance.

---

## License

Created as an example contribution for the EaseMotion CSS examples library.