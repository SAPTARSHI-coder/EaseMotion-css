# CSS Shimmer Text Effect

A pure CSS shine/shimmer animation sweeping across text, commonly used for premium feature highlights, skeleton loaders, or 'new' badges. Achieved without JavaScript using `background-clip` and animated gradients.

## Features
- Pure CSS and HTML.
- **Theming & Dark Mode**: Utilizes CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), generating a sleek dark mode UI where the shimmer highlight contrasts appropriately against the dark background.
- **Component Architecture (Documented in Code)**: 
  - **The Masking Technique**: The core effect relies on CSS background masking. We apply a `linear-gradient` to the background of the text element. We then use `-webkit-background-clip: text` (and standard `background-clip: text`) to hide the background everywhere *except* where the actual font characters are drawn. Finally, we make the text color itself `transparent` so the background gradient shows through.
  - **The Sweep Animation**: The gradient is intentionally made much wider than the text using `background-size: 200% auto`. A `@keyframes` animation (`shimmerSweep`) continuously pans `background-position` from right to left, creating the illusion of a bright shine sweeping across the letters.
- Accessible structure. The visual effect does not interfere with screen readers, as the text content remains standard HTML. Honors the `prefers-reduced-motion` accessibility standard by disabling the sweeping gradient animation entirely for motion-sensitive users, reverting the text to a solid, highly-readable static color.

## Usage
Open `demo.html` in your browser to view the shimmer animation applied to various typography scenarios (headings, badges, inline text).

## Files
- `demo.html`: The HTML structure demonstrating the `.shimmer-text` class applied to different elements.
- `style.css`: The styling, CSS Custom Property theming blocks, and the heavily commented `background-clip` and gradient animation logic.
