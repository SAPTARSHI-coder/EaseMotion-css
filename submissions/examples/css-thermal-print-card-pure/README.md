# CSS Thermal Print Card

A hardware-accelerated, JavaScript-free UI element. Features a realistic monochrome receipt aesthetic with jagged torn edges, monospace typography, and a stepped "printing" animation.

## Features
- Pure CSS and HTML implementation. Absolutely no JavaScript required for the layout, the jagged edge geometry, or the printing animation.
- **Component Architecture**: 
  - **The Printer Slot**: The parent container (`.printer-slot`) utilizes `overflow: hidden`. A `.printer-casing` element sits on top (`z-index: 10`) to simulate the physical machine housing.
  - **The Stepped Printing Animation**: The `.thermal-receipt` element sits behind the casing. It uses a `@keyframes` animation to slide up from `translateY(100%)` to `0%`. The keyframes are spaced evenly (20%, 40%, 60%) to simulate the stepped, jerky motion of an actual thermal printer feeding paper.
  - **The Jagged Edges Hack**: Creating perfectly jagged, repeating torn paper edges is difficult. We achieve this purely in CSS using `mask-image`:
    1. We create thin `.receipt-edge` strips at the top and bottom of the card.
    2. We apply a `radial-gradient` mask to these strips: `radial-gradient(circle at 5px 0px, transparent 5px, black 5.5px)`.
    3. We set `-webkit-mask-repeat: repeat-x`.
    4. **Result**: The mask cuts perfect repeating semi-circles out of the edge of the paper strip, creating a flawless zig-zag "torn" aesthetic without requiring SVGs.
  - **The Thermal Aesthetic**: The typography uses a `monospace` font (Courier). The text is given a very subtle `text-shadow` to simulate the slight bleed/blur of cheap thermal ink on receipt paper.
  - **CSS Barcode**: The barcode at the bottom is an inline SVG utilizing standard `currentColor` filling for easy theming.
- **Theming**: Configured via CSS Custom Properties. Fully responsive to OS-level dark mode (`prefers-color-scheme`). Note: The receipt paper remains light in dark mode for physical realism, while the machine casing and background adjust.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard. For motion-sensitive users, the printing animation is disabled and the receipt is statically presented.

## Usage
Open `demo.html` in your browser. Watch the receipt print out of the slot. Click the "Print Receipt" button to re-trigger the stepped CSS animation.

## Files
- `demo.html`: The HTML structure defining the printer casing, the jagged edges, the semantic receipt data, and the SVG barcode.
- `style.css`: The styling, the `mask-image` jagged edge mathematics, the `monospace` typography styling, and the stepped `@keyframes` printing animation.
