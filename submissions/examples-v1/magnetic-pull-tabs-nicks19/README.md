# CSS Magnetic Pull Tabs (Neumorphic Soft Layouts)

A pure CSS animated Tabs component that utilizes a smooth "Magnetic Pull" interaction transition, styled perfectly for modern **Neumorphic Soft** interface aesthetics.

## Features

- **Pure CSS**: Fully functional tab switching using the CSS checkbox/radio hack (`:checked`), meaning zero JavaScript is required.
- **Magnetic Pull Effect**: The active state background "stretches and squeezes" naturally as it slides between tabs, simulating spring-like magnetic physics.
- **Neumorphic Aesthetic**: Implements a deeply integrated soft-UI look using inset and outset drop-shadows on a unifying background color.
- **Customizable**: Built heavily around CSS Custom Properties (`--ease-neu-*`) allowing quick tweaks to timing, easing, and colors.
- **Fully Responsive**: Adapts automatically based on the `flex` grid structure.

## Installation

1. Copy the CSS from `style.css` into your project.
2. Structure your HTML as shown in `demo.html`, ensuring the radio inputs are siblings to the labels and indicator.

## Usage

```html
<div class="ease-neu-tabs-container">
    <input type="radio" id="tab1" name="tabs" checked>
    <input type="radio" id="tab2" name="tabs">

    <label for="tab1" class="ease-neu-tab">Tab 1</label>
    <label for="tab2" class="ease-neu-tab">Tab 2</label>

    <div class="ease-neu-active-indicator"></div>
</div>
```

## Why it fits EaseMotion CSS

- **Motion-First Focus**: Transforms standard instantaneous UI switching into a smooth, spatially-aware physical interaction using `transform` transitions and `@keyframes` squeezes.
- **Dependency Free**: Perfect for lightweight landing pages requiring high-end polish without relying on JS frameworks like React or Vue.
