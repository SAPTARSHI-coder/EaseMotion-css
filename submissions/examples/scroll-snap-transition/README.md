# scroll-snap-transition — Fullscreen Scroll Snap Section Demo

## Feature overview

This demo showcases a CSS-only fullscreen scroll-snap utility for vertical section transitions. It includes:

- vertical fullscreen sections with `scroll-snap-type: y mandatory`
- smooth native snapping and `scroll-behavior: smooth`
- modern animated section backgrounds and transition effects
- fixed navigation dots for quick section jumps
- responsive layout across desktops, tablets, and mobile
- browser-friendly CSS with no external libraries

## Usage

Open `demo.html` directly in your browser. The page is self-contained and loads `style.css` from the same folder.

The demo includes:

- `section` elements sized to `100dvh`
- anchored navigation dots to jump between sections
- reusable utility pattern examples inside the second section
- supported transitions using `transform` and `opacity`

## Folder structure

```
submissions/examples/scroll-snap-transition/
├── demo.html
├── README.md
└── style.css
```

## Browser support

This example is designed for modern browsers and works well in:

- Chrome
- Edge
- Firefox
- Safari
- Mobile Safari
- WebKit-based mobile browsers

It uses `scroll-snap-type`, `scroll-snap-align`, `scroll-behavior`, and `100dvh` for viewport-safe fullscreen sections.

## Why it fits EaseMotion CSS

This submission expands EaseMotion CSS with a polished scroll-snap transition demo that keeps the implementation lightweight and CSS-first. It complements the existing utilities by demonstrating native browser motion, responsive section flow, and modern UI polish without introducing JavaScript or external dependencies.
