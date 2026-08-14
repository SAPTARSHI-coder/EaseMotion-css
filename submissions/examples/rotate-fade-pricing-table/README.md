# CSS Rotate-Fade Pricing Table

A responsive pricing table built using pure HTML and CSS for fintech dashboard layouts.

The pricing cards use a **Rotate-Fade** entrance animation where each card smoothly rotates into position while fading in.

## Features

* Pure HTML and CSS
* No JavaScript
* No external frameworks
* Rotate-fade entrance animation
* Staggered card animations
* Hover effects
* Responsive layout
* Mobile and tablet support
* CSS custom properties
* `prefers-reduced-motion` support
* Accessible pricing buttons

## Folder Structure

```text
rotate-fade-pricing-table/
├── demo.html
├── style.css
└── README.md
```

## Usage

Copy this folder into:

```text
submissions/examples/
```

Then open `demo.html` in your browser.

No build tools or JavaScript are required.

## Animation

The pricing cards use the `rotate-fade` keyframe animation.

```css
@keyframes rotate-fade {
  from {
    opacity: 0;
    transform: rotate(-8deg) translateY(30px);
  }

  to {
    opacity: 1;
    transform: rotate(0) translateY(0);
  }
}
```

Each card has a different animation delay to create a staggered entrance effect.

```css
.pricing-card:nth-child(1) {
  animation-delay: 0.1s;
}

.pricing-card:nth-child(2) {
  animation-delay: 0.3s;
}

.pricing-card:nth-child(3) {
  animation-delay: 0.5s;
}
```

## CSS Custom Properties

The main colors can be changed from the `:root` section.

| Property            | Description             |
| ------------------- | ----------------------- |
| `--background`      | Page background         |
| `--card-background` | Pricing card background |
| `--text`            | Main text color         |
| `--muted`           | Secondary text color    |
| `--accent`          | Accent and button color |
| `--border`          | Card border color       |

Example:

```css
:root {
  --accent: #38bdf8;
}
```

## Responsive Design

### Desktop

Three pricing cards are displayed side by side.

### Tablet

The cards are displayed in a single column with a limited width.

### Mobile

The pricing cards become full-width and adapt to smaller screens.

## Accessibility

The component includes:

* Semantic `<article>` elements for pricing plans
* Accessible links
* Responsive text
* Reduced-motion support

Animations are disabled when the user has enabled:

```css
@media (prefers-reduced-motion: reduce)
```

## Contribution

Created for:

**EaseMotion CSS — GSSoC 2026**

Issue:

**#59408 — Add CSS Rotate-Fade Pricing Table for Fintech Dashboard Layouts**

## License

Follow the license and contribution guidelines of the parent EaseMotion CSS repository.
