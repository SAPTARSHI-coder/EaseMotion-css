# CSS Colored Cell Table (Heatmap)

A data table that automatically colors its cells in a heatmap gradient based on their numerical value. Built entirely without JavaScript, utilizing modern CSS features.

## Features
- Pure CSS and HTML implementation.
- **Component Architecture (Documented in Code)**: 
  - **CSS Variable Mapping**: In traditional CSS, it's impossible for styles to read the text content of a DOM element to determine its background color. To solve this without JS, we use inline CSS Custom Properties on the HTML element: `<td style="--val: 85">`. This passes the raw data directly into the CSS engine.
  - **Color Math via `color-mix()`**: The stylesheet defines absolute cold (low) and hot (high) colors. It then uses the modern CSS `color-mix()` function to dynamically blend them. By multiplying `--val` by `1%`, CSS calculates the exact gradient mix for that specific cell: `color-mix(in srgb, var(--heat-hot) calc(var(--val) * 1%), var(--heat-cold))`.
  - **Dynamic Contrast Hack**: Uses a similar `color-mix` calculation to automatically shift the text color to a lighter shade when the background value gets high, ensuring readability across the entire spectrum.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), generating a deep slate base with vibrant red heat mapping in dark mode, and a crisp white base with blue heat mapping in light mode.
- Fully accessible semantic structure. Uses a proper HTML `<table>` with `<thead>`, `<tbody>`, `<th>`, and `<caption>`. The visually hidden caption and `aria-labelledby` ensure screen readers can navigate and announce the data grid properly, independent of its visual heatmap coloring.

## Usage
Open `demo.html` in your browser. Hover over individual heatmap cells to trigger a scale and pop-out effect.

## Files
- `demo.html`: The HTML structure defining the table and passing data via inline `--val` variables.
- `style.css`: The styling, the `color-mix()` math, and the dynamic contrast logic.
