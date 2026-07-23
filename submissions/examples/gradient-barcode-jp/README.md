# Gradient Barcode

## What does this do?

This submission creates a responsive, decorative barcode-style UI component with animated gradient bars and a scanning highlight using only HTML and CSS.

## How is it used?

```html
<div
  class="gradient-barcode-jp ease-gradient-barcode-jp"
  role="img"
  aria-label="Decorative barcode for license ID EM-8427-QL"
>
  <span class="barcode-bars-jp" aria-hidden="true"></span>
  <span class="scan-line-jp" aria-hidden="true"></span>
  <span class="barcode-number-jp">EM 8427 0051 QL</span>
</div>
```

Customize the component through CSS variables:

```css
:root {
  --ease-barcode-duration-jp: 2.8s;
  --ease-barcode-curve-jp: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-barcode-primary-jp: #7a68ff;
  --ease-barcode-secondary-jp: #e35cba;
  --ease-barcode-highlight-jp: #ffffff;
  --ease-barcode-radius-jp: 1.2rem;
  --ease-barcode-height-jp: 10rem;
}
```

The bars are produced with a repeating linear gradient. A second gradient layer shifts across them while a separate scan line travels from left to right.

Open `demo.html` directly in a browser. No server, JavaScript, CDN, or external framework is required.

## Why is it useful?

Decorative barcode components can be used in digital passes, licenses, inventory cards, asset tags, tickets, membership cards, and corporate dashboards.

This example fits EaseMotion CSS because it:

- combines gradient motion with a scanning transition;
- exposes reusable animation and color variables;
- includes readable identification text;
- provides an accessible image description;
- adapts to smaller screens;
- respects `prefers-reduced-motion`;
- requires zero JavaScript and zero external dependencies.

> This component is decorative and is not designed to generate a machine-scannable barcode.
