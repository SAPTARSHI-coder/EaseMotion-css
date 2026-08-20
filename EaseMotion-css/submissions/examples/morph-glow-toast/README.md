# CSS Morph-Glow Toast

A responsive fintech dashboard toast notification created using pure HTML and CSS.

The component demonstrates a **Morph-Glow** entrance effect using scale, border-radius, rotation, and box-shadow animations.

## Features

* Pure HTML and CSS
* No JavaScript
* No external dependencies
* Morphing entrance animation
* Glow effect using CSS box-shadow
* Subtle scale and rotation
* Responsive dashboard layout
* Hover interactions
* Keyboard-accessible close button
* CSS custom properties
* `prefers-reduced-motion` support

## Folder Structure

```text
morph-glow-toast/
├── demo.html
├── style.css
└── README.md
```

## Usage

Place the folder inside:

```text
submissions/examples/
```

Then open `demo.html` in a browser.

No build process or JavaScript is required.

## Morph-Glow Animation

The main animation is created with the `morph-glow` keyframes:

```css
@keyframes morph-glow {
  0% {
    opacity: 0;
    transform: scale(0.75) translateY(30px) rotate(-2deg);
    border-radius: 40px;
  }

  45% {
    opacity: 1;
    transform: scale(1.04) translateY(-5px) rotate(1deg);
    border-radius: 24px;
    box-shadow: 0 0 30px rgba(56, 189, 248, 0.35);
  }

  100% {
    opacity: 1;
    transform: scale(1) translateY(0) rotate(0);
    border-radius: 18px;
  }
}
```

The animation combines:

* Scale
* Translation
* Rotation
* Border-radius morphing
* Glow using `box-shadow`

This creates the Morph-Glow visual effect without JavaScript.

## CSS Custom Properties

The component uses CSS custom properties for easy customization.

| Property             | Description          |
| -------------------- | -------------------- |
| `--background`       | Dashboard background |
| `--card-background`  | Card background      |
| `--toast-background` | Toast background     |
| `--text`             | Primary text         |
| `--muted`            | Secondary text       |
| `--accent`           | Accent color         |
| `--success`          | Success color        |
| `--border`           | Border color         |

Example:

```css
:root {
  --accent: #38bdf8;
  --success: #34d399;
}
```

## Responsive Design

On desktop, the toast appears in the bottom-right corner.

On tablets, dashboard cards stack into a single column.

On mobile, the toast automatically expands within the available viewport width.

## Accessibility

The notification uses:

```html
<aside class="toast" role="status" aria-live="polite">
```

The close control is a semantic button with an accessible label.

The component also supports:

```css
@media (prefers-reduced-motion: reduce)
```

Animations and transitions are disabled when the user prefers reduced motion.

## Contribution

Created for **EaseMotion CSS — GSSoC 2026**.

Issue: **#59368 — Add CSS Morph-Glow Toast for Fintech Dashboard Layouts**

## License

Follow the license and contribution guidelines of the parent EaseMotion CSS repository.
