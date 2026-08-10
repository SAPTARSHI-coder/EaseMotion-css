# CSS Bounce-Pulse Stepper

A minimalist, responsive CSS stepper component with a sleek bounce-pulse animation for active steps. Designed for modern, tech-focused layouts and SaaS platforms.

## Usage

```html
<div class="stepper-container">
  <div class="stepper">
    <div class="step completed">
      <div class="step-indicator">1</div>
      <div class="step-label">Account</div>
    </div>
    
    <!-- Active step with bounce-pulse animation -->
    <div class="step active">
      <div class="step-indicator">2</div>
      <div class="step-label">Settings</div>
    </div>
    
    <div class="step">
      <div class="step-indicator">3</div>
      <div class="step-label">Payment</div>
    </div>
  </div>
</div>
```

## Features
- **Pure CSS**: No JavaScript required for the layout or animations.
- **Bounce-Pulse Animation**: The active step features a smooth, continuous bounce and pulse effect using CSS `@keyframes`.
- **Responsive**: Adapts perfectly to mobile viewports, scaling down text and spacing for small screens.
- **Accessible**: Fully supports `prefers-reduced-motion` to disable animations for users who prefer static interfaces.

## Why is it useful?
This component fits seamlessly into EaseMotion's philosophy by providing a high-quality, lightweight, and modern UI element that enhances user experience through subtle, performant motion, without relying on bloated JS frameworks.
