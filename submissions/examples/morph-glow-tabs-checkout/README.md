# CSS Morph Glow Tabs

A premium, responsive, and accessible Morph-Glow Checkout Tabs component built entirely with HTML and CSS for modern e-commerce checkout interfaces.

## Overview

This component provides a sleek, modern navigation experience for multi-step checkout processes. It features a glowing, morphing indicator pill that glides smoothly behind the active tab. No JavaScript is required for the animation or state management, thanks to advanced CSS selectors like `:has()` and hidden radio buttons.

## Features

- **Morphing Active Tab**: Uses CSS transforms to fluidly slide the active background pill between tabs.
- **Glow Effects**: Soft pulse animations using filters and layered gradients for a premium SaaS feel.
- **Glassmorphism UI**: Backdrop filters and semi-transparent surfaces create depth.
- **Pure HTML & CSS**: Zero JavaScript required for state management or animations.
- **Accessible**: Fully keyboard navigable via native radio inputs and screen-reader friendly.
- **Responsive Layout**: Text labels hide on small screens while maintaining elegant touch targets.

## Folder Structure

```
submissions/examples/morph-glow-tabs-checkout/
├── demo.html
├── style.css
└── README.md
```

## Installation

Simply copy `demo.html` and `style.css` into your project. 

## Usage

The tabs operate using hidden radio inputs. By linking the `label` elements to the `input` IDs via the `for` attribute, clicking the label updates the radio state. The CSS `:has()` pseudo-class listens for these checked states and updates the position of the `.morph-indicator` dynamically.

## HTML Example

```html
<!-- Hidden State Management -->
<input type="radio" id="step-cart" name="checkout-step" class="sr-only" checked>

<!-- Navigation -->
<nav class="tabs-nav">
  <div class="morph-indicator">
    <div class="glow-pulse"></div>
    <div class="indicator-bg"></div>
  </div>
  
  <label for="step-cart" class="tab-item">
    <span class="step-num">1</span>
    <span class="step-text">Cart</span>
  </label>
</nav>
```

## CSS Variables

You can easily theme the component by modifying the variables in the `:root` pseudo-class:

```css
:root {
  --tab-count: 5;
  --color-primary: #8b5cf6;
  --color-secondary: #ec4899;
  --color-bg: #0f172a;
  --transition-morph: 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

## Customization

- **Tab Count**: If you add or remove tabs, ensure you update the `--tab-count` variable in CSS so the indicator calculates width accurately.
- **Timing**: Change `--transition-morph` to control the easing and duration of the sliding pill animation.

## Responsive Behaviour

Below `768px`, the text labels (`.step-text`) are hidden, and the tabs collapse gracefully to show only the step numbers, conserving horizontal space for mobile devices.

## Accessibility

- **Keyboard Focus**: Hidden radio buttons are positioned off-screen using `.sr-only`. When focused via keyboard, an outline is drawn on the corresponding label using the `:focus-visible` pseudo-class.
- **Reduced Motion**: If a user prefers reduced motion, transitions and continuous glowing animations are instantly disabled.

## Browser Support

Works perfectly in modern browsers (Chrome 105+, Edge 105+, Safari 15.4+, Firefox 121+) supporting the `:has()` selector and backdrop-filter.

## Preview Description

This demo simulates a 5-step checkout process. Click any tab or use your keyboard's Tab and Arrow keys to navigate between Cart, Shipping, Payment, Review, and Complete. Notice the smooth glowing indicator morphing seamlessly across the glass surface.
