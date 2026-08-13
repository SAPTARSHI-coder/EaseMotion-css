# CSS Trip Itinerary Timeline

A pure CSS vertical timeline component featuring an animated connected track, dynamic hover states, colored categorization nodes, and a fully semantic HTML list structure, built entirely without JavaScript.

## Features
- Pure CSS and HTML.
- **Theming & Dark Mode**: Utilizes CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), generating a moody, high-contrast dark mode variant.
- **Component Architecture (Documented in Code)**: 
  - **Semantic HTML**: The timeline uses a standard `<ul>` list, ensuring maximum accessibility and logical reading order for screen readers without needing complex ARIA roles.
  - **The Vertical Track**: The central connecting line is generated purely in CSS using a `::before` pseudo-element on the parent `<ul>`. It is absolutely positioned and perfectly centered behind the event nodes using `transform: translateX(-50%)`.
  - **Dynamic Hover Interactions**: Hovering over any individual `<li class="timeline-event">` triggers a CSS cascade that highlights the time text, fills the central SVG node with its specific category color, expands the node slightly (`scale(1.15)`), and reveals a card-like border and background on the content box.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard by disabling the hover scaling and transition animations for motion-sensitive users.

## Usage
Open `demo.html` in your browser. Hover over the different events in the itinerary to see the specific category colors (blue for flight, green for transit, etc.) fill the icons and the content cards highlight.

## Files
- `demo.html`: The HTML structure containing the semantic `<ul>` list and SVG icons.
- `style.css`: The styling, CSS Custom Property theming blocks, and the heavily commented pseudo-element line-drawing techniques.
