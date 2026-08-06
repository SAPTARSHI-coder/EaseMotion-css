# CSS Scale-Hover Tabs

A premium, responsive, and highly interactive Scale-Hover Checkout Tabs component built entirely with pure HTML and CSS, designed for modern e-commerce checkout flows.

## Overview

This component implements a fluid, tactile navigation experience where hovering over inactive tabs smoothly scales them up, elevates them with a floating effect, and applies a soft glow. The active tab remains clearly distinguished with gradient highlights. All state management and animations are driven natively by CSS without relying on JavaScript.

## Features

- **Scale-Hover Animation**: Tabs expand gracefully when hovered, creating an inviting interactive area.
- **Hover Elevation**: Along with scaling, tabs lift upwards on the Y-axis accompanied by dynamic drop shadows.
- **Gradient Glows**: Soft, multi-layered box shadows and linear gradients simulate light emission.
- **Glassmorphism Base**: The container uses backdrop-filters for a frosted glass aesthetic suitable for light and dark modes.
- **Zero JavaScript**: Powered entirely by visually hidden radio buttons and the `:has()` selector.
- **Fully Accessible**: Focus management via keyboard tabbing and support for `prefers-reduced-motion`.

## Folder Structure

```text
submissions/examples/scale-hover-tabs-checkout/
├── demo.html
├── style.css
└── README.md
```

## Installation

Simply copy `demo.html` and `style.css` into your web project.

## Usage

The logic relies on linking `label` tags to hidden `input[type="radio"]` tags via the `for` attribute. 

When a user interacts with a tab, the corresponding radio input receives the `:checked` state. The outer `.checkout-wrapper` uses the CSS `:has()` pseudo-class to detect this and styles the labels and content panels accordingly.

## HTML Example

```html
<!-- Hidden State Element -->
<input type="radio" id="step-cart" name="checkout-step" class="sr-only" checked>

<!-- Navigation Tab -->
<label for="step-cart" class="tab-item">
  <span class="step-num">1</span>
  <span class="step-text">Cart</span>
  <span class="active-indicator"></span>
</label>
```

## CSS Variables

Theme the component by tweaking variables within the `:root` scope in `style.css`:

```css
:root {
  --primary: #6366f1;
  --primary-gradient: linear-gradient(135deg, #6366f1, #a855f7);
  --glow-hover: 0 0 20px rgba(99, 102, 241, 0.4);
  --easing: cubic-bezier(0.25, 1, 0.33, 1);
  --duration: 0.4s;
}
```

## Customization

- **Hover Intensity**: To change how much the tab scales on hover, find `.tab-item:hover` in the CSS and adjust `transform: scale(1.08) translateY(-4px)`.
- **Transitions**: The custom `--easing` variable controls the curve of the animation. Change it to `ease-out` for a standard transition, or keep the default cubic-bezier for a snappier feel.

## Responsive Behaviour

The tabs shrink and remove textual labels (`.step-text`) below `768px`, relying solely on numbered icons. The hover scale intensity is also reduced dynamically on mobile devices to prevent layout shifts or screen overflow.

## Accessibility

- **Keyboard Tabbing**: Although the radio inputs are hidden visually using `.sr-only`, they remain fully focusable by the browser. CSS sibling selectors draw a high-contrast focus ring around the associated label.
- **Motion Sensitivity**: Users with OS-level `prefers-reduced-motion` settings will see instant state changes with no scaling, floating, or continuous pulse animations.

## Browser Support

Works seamlessly across modern browsers (Chrome 105+, Safari 15.4+, Edge 105+, Firefox 121+) supporting `:has()` and `backdrop-filter`.

## Preview Description

This demo presents a 5-step checkout card. Hovering over any inactive step scales it up into a glass-like pill. Clicking a step smoothly fades out the old content and scales the new content into view.
