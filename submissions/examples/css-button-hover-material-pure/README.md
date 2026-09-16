# Material Design Hover Button

A precise, pure CSS implementation of Google's Material Design button specifications, featuring accurate elevation shadows, typography, and a CSS-only pseudo-ripple interaction effect.

## Features
- **Three Material Variants**: Includes code for Contained (high emphasis), Outlined (medium emphasis), and Text (low emphasis) button styles as defined in the Material Design system.
- **Accurate Elevation Physics**: Uses highly specific multi-layered `box-shadow` values matching Material Design's dp elevation scale (Elevation 2 for rest, 4 for hover, 8 for active press).
- **CSS-Only Ripple Engine**: Simulates the iconic JavaScript-based Material ripple using only CSS. It achieves this by instantly scaling a `.md-ripple` span to 100% on `:active`, and using a slow `transition` to fade and expand it further when `:not(:active)` (the release state).
- **Interactive State Overlays**: Uses the `::before` pseudo-element linked to `currentColor` to dynamically create the correct 8% opacity hover state overlay, ensuring the hover color mathematically matches the text color for outlined and text variants.
- **Typography Standards**: Conforms strictly to Material guidelines for buttons: uppercase text, `0.875rem` font size, `500` font weight, and `0.0892em` letter spacing using the `Roboto` font.

## Usage
Include `demo.html` and `style.css` in your project. Ensure the `Roboto` font is loaded in your `<head>` for accurate rendering.
