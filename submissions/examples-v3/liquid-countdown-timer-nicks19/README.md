# Liquid Countdown Timer (Travel App Theme)

A pure CSS-driven liquid filling animation designed for a travel or booking application. The "liquid" organically waves and drops in height as the countdown progresses, providing a relaxing, organic visual instead of a stressful ticking clock.

## Features

- **Pure CSS Liquid Physics**: The organic liquid wave effect is achieved entirely through CSS using oversized, rounded rectangles (`border-radius: 40%`) that rotate infinitely using `@keyframes`.
- **Dynamic CSS Variable Leveling**: The height of the liquid is controlled by a single CSS Custom Property (`--ease-liquid-level`), making it incredibly easy to hook up to any backend logic or JS timer.
- **Tropical Travel Aesthetic**: Styled with refreshing Cyan and Ocean Blue layers, evoking water, vacations, and tropical destinations.
- **Legible Overlay Typography**: Uses stark text shadows (`text-shadow`) to ensure the countdown digits remain perfectly readable regardless of whether the dark liquid or the light background is currently behind them.

## Installation

1. Copy the CSS from `style.css` into your project.
2. Copy the HTML structure from `demo.html`.
3. To make the timer functional, implement the provided JavaScript snippet (or your own framework's equivalent) to dynamically update the text inside `.ease-time` and the `--ease-liquid-level` variable on the parent container.

## Usage Example

```html
<!-- Set the --ease-liquid-level inline or via JS (0% to 100%) -->
<div class="ease-liquid-countdown" style="--ease-liquid-level: 75%;">
  
  <!-- The Liquid Waves -->
  <div class="ease-liquid-wave ease-liquid-wave-back"></div>
  <div class="ease-liquid-wave ease-liquid-wave-front"></div>
  
  <!-- Overlay Content -->
  <div class="ease-countdown-content">
    <div class="ease-time" id="countdown-text">03:45:12</div>
    <div class="ease-label">Time Remaining</div>
  </div>
  
</div>
```

## Why it fits EaseMotion CSS

- **Creative Use of Basics**: The liquid effect is a classic CSS trick—using an `overflow: hidden` circle with rotating `border-radius: 40%` squares inside. It demonstrates how complex, organic shapes can be generated without SVG or Canvas.
- **Data-Driven Animation**: By linking the `top` position of the waves to `--ease-liquid-level` via a CSS `calc()` function, it creates a seamless bridge between application state (JavaScript) and rendering physics (CSS).
- **Smooth Interpolation**: The `transition: top 1s linear;` rule ensures that even if the JS updates the level sporadically, the liquid level drops buttery-smooth.
