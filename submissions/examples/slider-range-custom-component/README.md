# Slider Range Custom Component Showcase

A versatile, responsive, and beautifully styled collection of Custom Range Slider components built entirely with pure HTML5 and CSS3.

## Project Overview

Default browser range sliders often look inconsistent and unappealing across different operating systems and browsers. This showcase demonstrates how to fully customize `<input type="range">` elements using advanced CSS pseudo-elements, providing 12 distinct styles ranging from sleek minimal designs to cyberpunk neon glows, glassmorphism, and specialized UI components (like volume and brightness sliders).

## Folder Structure

```text
submissions/examples/slider-range-custom-component/
├── demo.html
├── style.css
└── README.md
```

## Features

- **Pure CSS Styling:** Zero JavaScript is needed for the rendering and styling of the sliders.
- **Cross-Browser Compatibility:** Implements both `::-webkit-slider-thumb` / `::-webkit-slider-runnable-track` (Chrome, Safari, Edge) and `::-moz-range-thumb` / `::-moz-range-track` (Firefox) for seamless cross-browser experiences.
- **12 Unique Variants:** Basic, Gradient, Glassmorphism, Neon, Rounded, Minimal, Dark Mode, Dual Color, Pricing, Volume, Brightness, and Progress timelines.
- **Accessible Design:** High contrast colors, proper `aria-labels`, and custom `:focus-visible` outlines ensure keyboard navigability.
- **Responsive Layout:** Fluid CSS Grid structures ensure the showcase and the sliders adapt perfectly to mobile, tablet, and desktop viewports.

## HTML Usage Example

```html
<div class="slider-wrapper">
    <input type="range" class="slider slider-basic" min="0" max="100" value="50" aria-label="Basic Range Slider">
</div>
```

## CSS Classes Explained

- `.slider`: A base class to strip out default browser styling (`-webkit-appearance: none;`).
- `.slider-[variant]`: e.g., `.slider-gradient`, `.slider-neon`. These target the specific thematic styling for the track and the thumb.

### Important Note on Custom CSS Sliders

Styling inputs of type `range` in CSS requires prefixing. You must style the thumb and the track separately using browser-specific pseudo-elements:
- Webkit/Blink (Chrome/Safari/Edge): `::-webkit-slider-thumb`, `::-webkit-slider-runnable-track`
- Gecko (Firefox): `::-moz-range-thumb`, `::-moz-range-track`

## Customization Guide

To modify a slider, target the thumb and track properties. For example, to change the size of the thumb on the basic slider:

```css
/* Change Webkit */
.slider-basic::-webkit-slider-thumb {
    height: 24px;
    width: 24px;
    margin-top: -9px; /* Adjust margin-top to center on the track */
}

/* Change Firefox */
.slider-basic::-moz-range-thumb {
    height: 24px;
    width: 24px;
}
```

## How to Run

1. Navigate to the project directory:
   ```bash
   cd submissions/examples/slider-range-custom-component/
   ```
2. Open `demo.html` in your web browser. No local server or build tools are required.
