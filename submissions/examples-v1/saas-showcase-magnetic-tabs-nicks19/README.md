# SaaS Showcase Magnetic Pull Tabs

A pure CSS animated Tabs component utilizing a smooth "Magnetic Pull" interaction transition, styled to perfectly complement modern **SaaS Showcase** interface aesthetics (clean, shadow-lifted, vibrant indigo).

## Features

- **Pure CSS**: Fully functional tab switching using the CSS checkbox/radio hack (`:checked`), zero JavaScript required.
- **Magnetic Pull Effect**: The active state background "stretches and squeezes" naturally as it slides between tabs, giving a highly polished magnetic feel.
- **SaaS Aesthetic**: Implements a clean UI utilizing deep, colored shadows (`0 4px 14px 0 rgba(79, 70, 229, 0.39)`), rounded corners, and a high-contrast Indigo active state typical of modern landing pages.
- **Fully Responsive**: Adapts automatically based on the grid structure, gracefully collapsing into a vertical stack layout on screens smaller than 480px while maintaining full magnetic stretch animations.

## Installation

1. Copy the CSS from `style.css` into your project.
2. Structure your HTML as shown in `demo.html`, ensuring the radio inputs are siblings to the labels and indicator.

## Usage

```html
<div class="ease-saas-tabs-container">
    <input type="radio" id="tab1" name="tabs" checked>
    <input type="radio" id="tab2" name="tabs">

    <label for="tab1" class="ease-saas-tab">Automation</label>
    <label for="tab2" class="ease-saas-tab">Integrations</label>

    <div class="ease-saas-active-indicator"></div>
</div>
```

## Why it fits EaseMotion CSS

- **Motion-First Focus**: Transforms standard instantaneous UI switching into a playful, stretchy interaction using `transform` transitions and `@keyframes` squeezes.
- **Dependency Free**: Perfect for lightweight landing pages or dashboard settings where you want to minimize JavaScript bloat and maximize interaction delight.
