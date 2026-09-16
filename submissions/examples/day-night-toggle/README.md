# CSS-Only Animated Day/Night Theme Toggle Switch

A modern, interactive toggle switch that animates between a "Day/Sun" mode and a "Night/Moon" mode, utilizing pure CSS and HTML checkboxes.

## Features
- Pure CSS, zero JavaScript
- Hidden checkbox state management (`input[type="checkbox"]:checked ~ label`)
- Smooth sliding thumb animation (`transform: translateX()`)
- Morphing sun-to-moon shape transition using box-shadow techniques
- Star and cloud background elements within the toggle track
- Dynamic page background transition based on toggle state

## Usage
Simply drop the HTML and CSS into your project. To listen for state changes, add an event listener to the `#theme-toggle` input element in your JavaScript logic.
