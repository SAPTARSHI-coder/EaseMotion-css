# CSS Blur-Entrance Carousel — Fintech Dashboard

A **Blur-Entrance Carousel** for fintech dashboard layouts, built with pure **HTML, CSS and minimal JS**. Slides fade in from a blurred state to deliver a premium feel when navigating investment cards.

---

## Features

- Smooth blur-to-clear entrance on each slide transition
- Responsive design — stacks gracefully on mobile
- CSS custom properties for quick theming
- `prefers-reduced-motion` support
- Semantic HTML with ARIA roles for screen readers
- Lightweight — no external libraries

---

## Folder Structure

```
blur-entrance-carousel-fintech/
├── demo.html
├── style.css
└── README.md
```

---

## Usage

1. Open `demo.html` in any modern browser.
2. Use the **‹** / **›** buttons to navigate between slides.
3. Adjust colours and timing via the CSS custom properties in `style.css`.

---

## Custom Properties

```css
--bg: #0a0e1a;
--surface: #121829;
--accent: #3b82f6;
--positive: #22c55e;
--negative: #ef4444;
--radius: 20px;
--speed: 0.55s;
```

---

## Accessibility

- `prefers-reduced-motion` disables all animations
- ARIA `role="region"`, `aria-roledescription="carousel"` and per-slide labels
- Keyboard-focusable navigation buttons
- `:focus-visible` outlines on interactive elements

---

## Browser Support

Chrome · Firefox · Edge · Safari (latest two versions)

---

## Technologies

HTML5 · CSS3 · CSS Variables · Keyframe Animations · Vanilla JS
