# CSS Zoom-In Tabs

A modern, responsive, and highly polished Zoom-In Checkout Tabs component built entirely with HTML and CSS for premium e-commerce interfaces.

## Overview

The Zoom-In Tabs component uses advanced CSS selectors (`:has()`) and scale transformations to create an elegant zooming effect for the active tab. It requires zero JavaScript, making it incredibly lightweight and performant. With soft shadows, glowing gradients, and glassmorphism styling, it mimics the high-end feel of platforms like Stripe and Linear.

## Features

- **Zoom-In Animation**: The active tab fluidly scales up and creates a floating depth effect.
- **Pulse Glow Effect**: Active tabs emit a continuous, subtle CSS box-shadow pulse.
- **Underline Reveal**: A tiny, elegant underline scales from the center upon activation.
- **Glassmorphism**: Built inside a frosted glass card using `backdrop-filter`.
- **Pure CSS State**: Managed entirely via visually hidden radio inputs.
- **Accessible & Responsive**: Keyboard navigable, respects `prefers-reduced-motion`, and gracefully degrades text on mobile.

## Folder Structure

```text
submissions/examples/zoom-in-tabs-checkout/
├── demo.html
├── style.css
└── README.md
```

## Installation

Simply copy the HTML structure from `demo.html` and the corresponding styles from `style.css` into your project.

## Usage

This component relies on tying `label` elements to hidden `input[type="radio"]` tags. 

When a user clicks a tab label (or triggers it via keyboard), the radio becomes `:checked`. The parent `.checkout-wrapper` detects this using `:has()` and applies the zoom transform, glow, and color changes to the specific `.tab-item`.

## HTML Example

```html
<!-- Hidden State Management -->
<input type="radio" id="step-cart" name="checkout-step" class="sr-only" checked>

<!-- Navigation Label -->
<label for="step-cart" class="tab-item">
  <span class="tab-content">
    <span class="step-num">1</span>
    <span class="step-text">Cart</span>
  </span>
  <span class="active-underline"></span>
</label>
```

## CSS Variables

Modify the `:root` variables to match your brand design:

```css
:root {
  --color-primary: #3b82f6;
  --color-secondary: #8b5cf6;
  --glow-color: rgba(59, 130, 246, 0.4);
  --easing: cubic-bezier(0.34, 1.56, 0.64, 1);
  --transition-speed: 0.5s;
}
```

## Customization

- **Zoom Intensity**: To adjust how much the active tab zooms in, modify the `transform: scale(1.1)` value inside the `.checkout-wrapper:has(...) .tab-item` CSS block.
- **Easing**: The custom `cubic-bezier(0.34, 1.56, 0.64, 1)` provides a bouncy, spring-like feel. Change this to `ease-in-out` for a flatter transition.

## Responsive Behaviour

The tabs utilize `flex: 1` to equally divide the space. On viewports smaller than `768px`, the `.step-text` is hidden, leaving only the circular step numbers. The zoom intensity is also slightly reduced on screens under `480px` to prevent overflow.

## Accessibility

- **Keyboard Focus**: Native radio buttons handle the focus order. The `.sr-only` class hides them visually but keeps them focusable. When focused, the `~` sibling selector draws a high-contrast outline around the corresponding label.
- **Reduced Motion**: If the OS setting for reduced motion is detected, all transforms and infinite pulse animations are halted.

## Browser Support

Works in all modern browsers supporting the CSS `:has()` pseudo-class (Chrome 105+, Safari 15.4+, Edge 105+, Firefox 121+).

## Preview Description

This demo displays a 5-step floating checkout card. Navigating between the steps triggers a bouncy zoom-in scale, gradient fill, and a subtle glowing pulse, while the relevant checkout content slides into view gracefully.
