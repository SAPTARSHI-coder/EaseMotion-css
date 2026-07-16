# Interactive Social Media Icon Dock

An animated icon dock inspired by modern OS docks (like macOS), where icons smoothly enlarge and lift on hover, built using pure HTML and CSS.

## What it does

- Displays a row of social media icons in a frosted-glass dock container.
- Hovering an icon scales it up and lifts it, with neighboring icons subtly scaling too (via `:has()`), mimicking a magnification effect.
- Fully responsive — dock padding and icon size shrink on smaller screens.

## How to use

1. Copy `demo.html` and `style.css` into your project.
2. Open `demo.html` directly in a browser — no build step or server required.
3. Reuse the `.dock` and `.dock-item` markup/classes, swapping in your own icons and links.

## Why it fits EaseMotion CSS

- Pure HTML/CSS, no JavaScript or external dependencies.
- Beginner-friendly: clear class names, transform-based hover animation.
- Meets all requirements from issue #48348: icons enlarge smoothly on hover, responsive layout, pure HTML & CSS, attractive modern design.

## Browser support note

The neighbor-magnification effect uses the CSS `:has()` selector, which is supported in all current major browsers (Chrome, Edge, Safari, Firefox 121+). The dock still works and icons still enlarge on hover without it — only the subtle neighbor-lift effect is skipped in older browsers.