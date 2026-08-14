# Animated Weather Card Component

## Overview

Animated Weather Card Component provides a lightweight, responsive weather dashboard built with pure CSS. It features animated weather icons, temperature, condition, and location details in a modern card layout.

## Features

- Modern weather card layout
- Animated weather icons for Sunny, Cloudy, Rainy, Snowy, Stormy, and Windy states
- Temperature, condition, and city/location display
- Smooth hover transitions and responsive design
- CSS-only implementation with zero JavaScript
- Customizable via CSS variables
- Compatible with EaseMotion CSS utilities
- Respects `prefers-reduced-motion`

## Available classes

- `.ease-weather-card` — Card container with hover motion and styling.
- `.ease-weather-icon` — Weather icon container with animated backgrounds.
- `.ease-weather-temp` — Temperature display.
- `.ease-weather-condition` — Weather condition label.
- `.ease-weather-location` — City or location name.
- `.sunny`, `.cloudy`, `.rainy`, `.snowy`, `.stormy`, `.windy` — Icon modifiers for weather states.

## Usage

```html
<div class="ease-weather-card">
  <div class="ease-weather-icon sunny" aria-hidden="true"><span>☀️</span></div>
  <div class="ease-weather-meta">
    <p class="ease-weather-temp">31°C</p>
    <p class="ease-weather-condition">Sunny</p>
  </div>
  <p class="ease-weather-location">Los Angeles</p>
</div>
```

## Customization

Override the CSS variables to adapt the component to your design system:

```css
:root {
  --ease-weather-card-bg: #0f172a;
  --ease-weather-primary: #f8fafc;
  --ease-weather-secondary: #cbd5e1;
  --ease-weather-border: rgba(255, 255, 255, 0.12);
  --ease-weather-card-shadow: 0 30px 80px rgba(15, 23, 42, 0.2);
  --ease-weather-radius: 2rem;
  --ease-weather-duration: 560ms;
}
```

## Browser compatibility

- Chrome
- Firefox
- Edge
- Safari

## Accessibility

- The animated weather icons are decorative; each card uses accessible text for condition and location.
- `prefers-reduced-motion` disables icon movement and card hover transitions.
- The component is responsive and maintains readability on smaller screens.
