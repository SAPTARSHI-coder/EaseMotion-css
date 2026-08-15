# Glassmorphism Weather Widget

A frosted-glass weather card with a gently floating weather icon and a clean stats row. Pure HTML and CSS — no JavaScript required.

## Features

- 🧊 Frosted glass card using `backdrop-filter: blur()` over a gradient sky background
- ☁️ Weather icon gently floats up and down continuously
- 📊 Bottom stats row for humidity, wind, and UV index
- 📱 Responsive — scales padding and font sizes on small screens
- ♿ Respects `prefers-reduced-motion`
- 🧩 Pure HTML + CSS — no JavaScript dependencies

## Usage

```html
<div class="weather-card">
  <div class="weather-header">
    <p class="weather-location">San Francisco</p>
    <p class="weather-date">Friday, Aug 14</p>
  </div>

  <div class="weather-main">
    <span class="weather-icon">⛅</span>
    <span class="weather-temp">68°</span>
  </div>

  <p class="weather-desc">Partly Cloudy</p>

  <div class="weather-stats">
    <div class="weather-stat">
      <p class="weather-stat-label">Humidity</p>
      <p class="weather-stat-value">62%</p>
    </div>
    <!-- more stats -->
  </div>
</div>
```

## Why it fits EaseMotion CSS

The float animation is a single `@keyframes translateY` loop, and the card entrance uses a `transition`-free `@keyframes` fade/scale — both pure CSS. Class names stay simple and readable.

## Files

- `demo.html` — an example weather card with sample data
- `style.css` — all styles, glass effect, and animations
- `README.md` — this file

## Notes

Location, temperature, and stats are static placeholder content — wiring this up to a live weather API would be handled in your app's JavaScript, swapping the text content while keeping this component's markup and styling as-is.