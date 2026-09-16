# CSS Glitch-Flicker Hero Section

A responsive fintech hero section created using pure HTML and CSS.

The component demonstrates a lightweight **Glitch-Flicker** effect without JavaScript or external animation libraries.

## Features

* Pure HTML and CSS
* No JavaScript
* No external frameworks
* Glitch text effect
* Flickering content effect
* Animated fintech dashboard card
* Hover transitions
* Responsive desktop, tablet, and mobile layouts
* CSS custom properties
* `prefers-reduced-motion` support

## Folder Structure

```text
glitch-flicker-hero/
├── demo.html
├── style.css
└── README.md
```

## Usage

Copy the folder into:

```text
submissions/examples/
```

Open `demo.html` in a browser.

No build tools or JavaScript are required.

## Glitch Effect

The glitch effect uses CSS pseudo-elements.

```css
.glitch-title::before,
.glitch-title::after {
  content: attr(data-text);
  position: absolute;
}
```

The `data-text` attribute provides the duplicate text used to create the glitch layers.

Two keyframe animations move the layers in opposite directions:

```css
@keyframes glitch-top {
  0%,
  88%,
  100% {
    opacity: 0;
  }

  90% {
    opacity: 0.8;
    transform: translate(-4px, -2px);
  }
}
```

## Flicker Effect

The hero content uses a subtle flicker animation:

```css
@keyframes flicker {
  0%,
  96%,
  100% {
    opacity: 1;
  }

  97% {
    opacity: 0.65;
  }

  99% {
    opacity: 0.75;
  }
}
```

The effect is intentionally subtle so the content remains readable.

## CSS Custom Properties

Customize the main colors from `:root`.

| Property            | Description               |
| ------------------- | ------------------------- |
| `--background`      | Page background           |
| `--card-background` | Dashboard card background |
| `--text`            | Main text color           |
| `--muted`           | Secondary text color      |
| `--accent`          | Main accent color         |
| `--success`         | Positive status color     |
| `--border`          | Border color              |

Example:

```css
:root {
  --accent: #38bdf8;
}
```

## Responsive Design

**Desktop:** Text and dashboard card are displayed side by side.

**Tablet:** Content is stacked vertically and centered.

**Mobile:** Buttons, statistics, typography, and dashboard card adapt to smaller screens.

## Accessibility

The component includes semantic HTML, readable contrast, and reduced-motion support.

Animations are disabled when the user has enabled:

```css
@media (prefers-reduced-motion: reduce)
```

This removes the glitch and flicker effects for users who prefer reduced motion.

## Contribution

Created for **EaseMotion CSS — GSSoC 2026**.

Issue: **#59396 — Add CSS Glitch-Flicker Hero Section for Fintech Dashboard Layouts**

## License

Follow the license and contribution guidelines of the parent EaseMotion CSS repository.
