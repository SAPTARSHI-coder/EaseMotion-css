# CSS Bounce-Pulse Pricing Table

A responsive pricing table built with pure HTML and CSS for fintech dashboard layouts.

The component demonstrates a **Bounce-Pulse** animation. Pricing cards bounce into view when the page loads, while the featured plan uses a subtle pulsing border.

## Features

* Pure HTML and CSS
* No JavaScript
* No external frameworks
* Bounce entrance animation
* Pulse effect on the featured plan
* Staggered card animations
* Hover interactions
* Responsive desktop, tablet, and mobile layouts
* CSS custom properties
* `prefers-reduced-motion` support

## Folder Structure

```text
bounce-pulse-pricing-table/
├── demo.html
├── style.css
└── README.md
```

## Usage

Copy the folder into:

```text
submissions/examples/
```

Open `demo.html` directly in a browser.

No build tools or JavaScript are required.

## Bounce Animation

The pricing cards use the `bounce-in` keyframe animation.

```css
@keyframes bounce-in {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }

  60% {
    opacity: 1;
    transform: translateY(-12px);
  }

  80% {
    transform: translateY(5px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
```

The cards use different animation delays to create a staggered entrance.

## Pulse Animation

The featured pricing card uses a CSS pseudo-element to create a subtle pulse effect.

```css
@keyframes pulse {
  0% {
    opacity: 0;
    transform: scale(1);
  }

  50% {
    opacity: 0.45;
    transform: scale(1.02);
  }

  100% {
    opacity: 0;
    transform: scale(1.05);
  }
}
```

## CSS Custom Properties

The main visual properties can be customized through `:root`.

| Property            | Description             |
| ------------------- | ----------------------- |
| `--background`      | Page background         |
| `--card-background` | Pricing card background |
| `--text`            | Main text color         |
| `--muted`           | Secondary text color    |
| `--accent`          | Accent color            |
| `--border`          | Card border color       |

Example:

```css
:root {
  --accent: #38bdf8;
}
```

## Responsive Design

**Desktop:** Three pricing cards are displayed in a row.

**Tablet:** Cards are displayed vertically with a limited width.

**Mobile:** Cards adapt to smaller screen sizes with reduced spacing and typography.

## Accessibility

The component includes semantic HTML and reduced-motion support.

When a user has enabled reduced motion preferences, CSS animations and transitions are disabled:

```css
@media (prefers-reduced-motion: reduce)
```

## Contribution

Created for **EaseMotion CSS — GSSoC 2026**.

Issue: **#59409 — Add CSS Bounce-Pulse Pricing Table for Fintech Dashboard Layouts**

## License

Follow the license and contribution guidelines of the parent EaseMotion CSS repository.
