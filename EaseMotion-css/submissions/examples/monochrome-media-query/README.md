# Monochrome Media Query

Demonstrates the `monochrome` media query for optimizing designs on e-ink displays, grayscale monitors, and accessibility modes. Shows color-dependent UI elements with grayscale fallbacks, data visualization adaptations, and icon adjustments.

## Usage

Open `demo.html` and view on a monochrome device or use a browser emulator. Color swatches, status dots, and bar charts switch to grayscale when `monochrome` is detected. The reference table explains monochrome bit values.

## Browser Support

The `monochrome` media query is supported in all major browsers. Most desktop displays return `monochrome: 0` (color). E-ink devices and grayscale screens return `1` or higher. Dark theme `#0a0f1e` with `#e2e8f0` text provides good contrast even in monochrome.
