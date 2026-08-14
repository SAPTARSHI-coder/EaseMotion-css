# CSS Receipt Component

A pure CSS digital receipt card component featuring classic POS (Point of Sale) thermal paper aesthetics, including a jagged torn-paper edge and semantic dotted separator lines, built entirely without JavaScript.

## Features
- Pure CSS and HTML.
- **Theming & Dark Mode**: Utilizes CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), generating a modern, dark "terminal-style" receipt in dark mode contexts (while gracefully handling QR code color inversion).
- **Component Architecture (Documented in Code)**: 
  - **Grid Alignments**: The itemized list relies on a robust `display: grid; grid-template-columns: 1fr auto auto;` layout to perfectly align item names (left), quantities (center), and prices (right) regardless of content length.
  - **The Jagged Torn Edge**: Achieved purely in CSS using the `::after` pseudo-element positioned at the bottom of the card. We use a repeating `radial-gradient` to draw transparent circles over the solid background color along the X-axis, creating a classic "torn paper" tooth effect without requiring external SVG assets.
  - **Typography**: Inherits the `JetBrains Mono` (or system monospace) font to simulate the classic look of thermal receipt printers.
- Fully accessible with semantic HTML `<hr>` elements for the dotted separators.

## Usage
Open `demo.html` in your browser to view the digital receipt card.

## Files
- `demo.html`: The HTML structure containing the receipt header, the grid-based itemized body, totals, and the QR code footer.
- `style.css`: The styling, robust CSS Custom Property theming blocks, and the heavily commented `radial-gradient` torn-edge trick.
