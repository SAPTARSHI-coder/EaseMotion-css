# CSS-only Animated Map Marker

An interactive and beautifully animated CSS-only map marker/pin component. No JavaScript required.

## Overview

This component features a 3D-styled map pin that bounces continuously. Beneath it, a shadow scales and a ripple effect pulses outwards in sync with the bounce. When the user hovers over the pin, the animations pause, the pin scales up, and an informative tooltip pops up with a clean spring-like transition.

## Features

- ✨ 100% CSS-only (no JavaScript)
- 📍 Bouncing map pin using `rotate` and `translate` transforms
- 🌊 Synchronized pulsing ripple and shadow effects
- 💬 Interactive pop-up tooltip with spring transition (`cubic-bezier`)
- ⏸️ Hover state pauses animations (`animation-play-state: paused`)

## Files

- `demo.html`: The HTML structure including the marker, ripple, shadow, and tooltip.
- `style.css`: The styling, geometry of the pin, keyframes, and transitions.

## Usage

Simply copy the HTML structure and link the CSS file to use this component. You can change the text inside the `.ease-marker-tooltip` to display specific location names or details.

## Customization

Adjust the styles by modifying the properties in `style.css`:

- Pin Color: `#ef4444` (Red) - Change the `background` property of `.ease-marker-pin`.
- Ripple Color: Change the `border` color of `.ease-marker-ripple`.
- Bounce Speed: Modify the `2s` duration in the `animation` properties.
