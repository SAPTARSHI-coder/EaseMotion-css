# Dynamic Gradient Navbar (Minimal)

## Abstract

The Dynamic Gradient Navbar provides a sleek, modern glassmorphism navigation interface with a smooth magnetic spotlight dynamic radial gradient background. Designed using zero JavaScript, it leverages modern CSS features such as the `:has()` parent selector and `@property` custom property interpolations to dynamically calculate smooth transitions for background gradients on hover.

## Bypassing JS Event Listeners

Traditionally, tracking mouse movements or tab hover states to animate a background indicator across navigation items required JavaScript event listeners (`pointermove` or `mouseenter`) and manual positioning computations via DOM `getBoundingClientRect()`. 

This implementation bypasses JavaScript entirely by transforming the navigation container (`.ease-nav`) into a CSS state machine using the `:has()` relational pseudo-class:

```css
.ease-nav:has(.ease-nav-item:nth-child(1):hover) { --glow-x: 10%; }
.ease-nav:has(.ease-nav-item:nth-child(2):hover) { --glow-x: 35%; }
.ease-nav:has(.ease-nav-item:nth-child(3):hover) { --glow-x: 65%; }
.ease-nav:has(.ease-nav-item:nth-child(4):hover) { --glow-x: 90%; }
```

By querying child state from the parent container, CSS reactively updates custom properties based on which child element is active/hovered.

## The @property Interpolation Engine

Standard CSS custom variables are treated as plain tokens or strings, meaning browsers cannot natively interpolate or animate gradient positions defined with arbitrary variables.

By explicitly declaring custom properties using `@property`, we define strict syntax types (`<percentage>` and `<number>`):

```css
@property --glow-x {
  syntax: '<percentage>';
  initial-value: 50%;
  inherits: true;
}

@property --glow-opacity {
  syntax: '<number>';
  initial-value: 0;
  inherits: true;
}
```

Defining `--glow-x` as `<percentage>` enables the browser's rendering engine to perform continuous mathematical calculations between percentage steps (e.g., `10%` to `90%`). Combined with standard CSS `transition: --glow-x 0.4s cubic-bezier(0.4, 0, 0.2, 1)`, the `radial-gradient` background position slides smoothly across the navbar using GPU-accelerated rendering.
