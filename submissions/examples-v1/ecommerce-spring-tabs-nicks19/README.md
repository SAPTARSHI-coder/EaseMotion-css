# E-Commerce Checkout Spring Physics Tabs

A pure CSS animated Tabs component utilizing a realistic **Spring Physics** interaction transition, styled to complement modern **E-Commerce Checkout** interface aesthetics (clean, trustworthy, rounded).

## Features

- **Pure CSS**: Fully functional tab switching using the CSS checkbox/radio hack (`:checked`), zero JavaScript required.
- **Spring Physics**: The active state background snaps into place using a heavily elastic `cubic-bezier(0.68, -0.4, 0.265, 1.55)` transition, mimicking a physical spring.
- **E-Commerce Aesthetic**: Implements a highly trustworthy, clean UI utilizing soft shadows, rounded pill shapes, and a high-contrast green active state.
- **Fully Responsive**: Adapts automatically based on the grid structure, gracefully collapsing into a vertical stack layout on screens smaller than 480px while maintaining full spring physics.

## Installation

1. Copy the CSS from `style.css` into your project.
2. Structure your HTML as shown in `demo.html`, ensuring the radio inputs are siblings to the labels and indicator.

## Usage

```html
<div class="ease-ecom-tabs-container">
    <input type="radio" id="tab1" name="tabs" checked>
    <input type="radio" id="tab2" name="tabs">

    <label for="tab1" class="ease-ecom-tab">Delivery</label>
    <label for="tab2" class="ease-ecom-tab">Pickup</label>

    <div class="ease-ecom-active-indicator"></div>
</div>
```

## Why it fits EaseMotion CSS

- **Motion-First Focus**: Transforms standard instantaneous UI switching into a playful, springy interaction using `transform` transitions and `cubic-bezier`.
- **Dependency Free**: Perfect for checkout funnels where you want to minimize JavaScript bloat and maximize interaction delight.
