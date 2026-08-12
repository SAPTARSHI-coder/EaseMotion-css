# High‑Contrast Accessibility Mode Demo

This example showcases how to add a high‑contrast accessibility mode to a CSS library while preserving smooth color transitions. The demo includes:

- **demo.html** – A simple page with a toggle button that switches between the default theme and a high‑contrast palette.
- **style.css** – CSS variables for the default theme and overrides for the high‑contrast mode. All colour changes transition gracefully.
- **README.md** – Instructions on how to view the demo and integrate the high‑contrast mode into your own projects.

## How it works

The implementation uses CSS custom properties (`--bg-color`, `--text-color`, etc.) that define the colour palette. When the `<html>` element receives the `high-contrast` class (toggled by the button in `demo.html`), a set of overrides replace the variables with a dark background and bright accent colours. The CSS `transition` property on the root variables ensures a smooth fade between palettes.

## Viewing the demo

1. Open `demo.html` in a browser.
2. Click the **Switch to High‑Contrast** button.
   - The page background, text, header, card, and buttons will transition to the high‑contrast palette.
   - Click again to revert to the default theme.

## Integration guide

To add high‑contrast support to your own project:

1. Copy the CSS from `style.css` into your stylesheet, or import it as a separate file.
2. Add the `high-contrast` class toggle logic (similar to the script in `demo.html`) to your site’s navigation or settings.
3. Ensure any custom elements use the CSS variables for colours so they automatically adapt.

Feel free to customize the colour values in the `html.high-contrast` block to match your brand while keeping the accessible contrast ratio.
