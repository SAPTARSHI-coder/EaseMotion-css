# Responsive Dashboard Magnetic Pull Tabs

A pure CSS animated Tabs component that utilizes a smooth "Magnetic Pull" interaction transition, styled to seamlessly integrate into modern **Dark/Responsive Dashboard** interface aesthetics.

## Features

- **Pure CSS**: Fully functional tab switching using the CSS checkbox/radio hack (`:checked`), meaning zero JavaScript is required.
- **Magnetic Pull Effect**: The active state background "stretches and squeezes" naturally as it slides between tabs, simulating spring-like magnetic physics.
- **Dashboard Aesthetic**: Implements a highly functional, compact dark-mode UI look using rich grays and high-contrast blue accents typical of admin panels.
- **Fully Responsive**: Adapts automatically based on the `flex` grid structure, gracefully collapsing into a vertical stack layout on screens smaller than 480px while maintaining full magnetic pull animations.
- **Customizable**: Built heavily around CSS Custom Properties (`--ease-dash-*`) allowing quick tweaks to timing, easing, and colors.

## Installation

1. Copy the CSS from `style.css` into your project.
2. Structure your HTML as shown in `demo.html`, ensuring the radio inputs are siblings to the labels and indicator.

## Usage

```html
<div class="ease-dash-tabs-container">
    <input type="radio" id="tab1" name="tabs" checked>
    <input type="radio" id="tab2" name="tabs">

    <label for="tab1" class="ease-dash-tab">Overview</label>
    <label for="tab2" class="ease-dash-tab">Analytics</label>

    <div class="ease-dash-active-indicator"></div>
</div>
```

## Why it fits EaseMotion CSS

- **Motion-First Focus**: Transforms standard instantaneous UI switching into a smooth, spatially-aware physical interaction using `transform` transitions and `@keyframes` squeezes.
- **Dependency Free**: Perfect for lightweight data dashboards requiring high-end polish without relying on JS frameworks for basic layout interactions.
