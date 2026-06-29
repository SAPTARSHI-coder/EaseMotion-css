# Theme Support Showcase

This example demonstrates how to utilize EaseMotion's built-in theme support to seamlessly switch between light mode, dark mode, and custom color palettes.

## Features Demonstrated

1. **System Preference Awareness**: EaseMotion natively supports `@media (prefers-color-scheme: dark)` which responds to the user's OS preference.
2. **Manual Theme Toggling**: Using the `data-theme` attribute, you can override system preferences and force a specific theme (`data-theme="dark"` or `data-theme="light"`).
3. **Custom Theme Creation**: By targeting a custom `data-theme` attribute (e.g., `data-theme="ocean"`), you can effortlessly create entirely new color schemes by simply overriding the CSS custom properties (`--ease-color-*`) provided by the framework.

## How it works

The `demo.html` file includes a set of interactive buttons that use JavaScript to change the `data-theme` attribute on the root `<html>` element. The `style.css` file defines a custom "Ocean" theme by overriding core EaseMotion variables. All components dynamically respond to the changes without requiring any extra CSS classes.

## Usage

1. Open `demo.html` in your browser.
2. Click the theme buttons in the navigation bar to see the themes swap instantly.
3. Inspect `style.css` to see how easy it is to implement a custom palette.
