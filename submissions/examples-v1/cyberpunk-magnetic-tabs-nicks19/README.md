# Cyberpunk Neon Magnetic Pull Tabs

A pure CSS animated Tabs component utilizing a smooth "Magnetic Pull" interaction transition, styled to perfectly complement modern **Cyberpunk Neon** interface aesthetics.

## Features

- **Pure CSS**: Fully functional tab switching using the CSS checkbox/radio hack (`:checked`), zero JavaScript required.
- **Magnetic Pull Effect**: The active state outline "stretches and squeezes" naturally as it slides between tabs, simulating an elastic magnetic interaction.
- **Cyberpunk Aesthetic**: Implements a high-contrast dark mode design with `clip-path` angular corners, glowing magenta box-shadows, and bright cyan text-shadows.
- **Customizable**: Built heavily around CSS Custom Properties (`--ease-cyber-*`) allowing quick tweaks to timing, glowing colors, and fonts.

## Installation

1. Copy the CSS from `style.css` into your project.
2. Structure your HTML as shown in `demo.html`, ensuring the radio inputs are siblings to the labels and indicator.

## Usage

```html
<div class="ease-cyber-tabs-container">
    <input type="radio" id="tab1" name="tabs" checked>
    <input type="radio" id="tab2" name="tabs">

    <label for="tab1" class="ease-cyber-tab">Core</label>
    <label for="tab2" class="ease-cyber-tab">Proxy</label>

    <div class="ease-cyber-active-indicator"></div>
</div>
```

## Why it fits EaseMotion CSS

- **Motion-First Focus**: Upgrades standard instantaneous tab switching into a smooth, spatial physical interaction using `transform` transitions and `@keyframes` squeezes.
- **Dependency Free**: Perfect for lightweight sci-fi interfaces and landing pages requiring high-end polish without relying on JS frameworks for basic layout interactions.
