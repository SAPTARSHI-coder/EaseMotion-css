# Contrast & Color Adjust

Demonstrates WCAG contrast ratio comparisons and the `forced-colors` media query. Shows low to ultra contrast levels with WCAG AA/AAA ratings, a forced-colors mode detector, and an accessible color palette.

## Usage

Open `demo.html` to view contrast ratio cards and an interactive forced-colors status indicator. The forced-colors section detects if the OS is in high-contrast mode. Buttons demonstrate `forced-color-adjust: none` preservation.

## Browser Support

`forced-colors` is supported in Chrome 89+, Firefox, and Edge. Contrast ratio cards are styled with CSS variables. The `color-contrast()` functional notation is experimental — this demo focuses on manual ratio comparison. Dark background `#0a0f1e` with `#e2e8f0` text ensures a constant baseline.
