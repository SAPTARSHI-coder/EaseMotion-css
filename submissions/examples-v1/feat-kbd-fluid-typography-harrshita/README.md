# Kbd Fluid Typography & Text Scaling

## Description
This PR adds native Fluid Typography using modern CSS `clamp()` functions to the `kbd` component. This ensures the component text dynamically scales based on viewport width while remaining constrained within legible bounds, fully satisfying WCAG 2.1 Success Criterion 1.4.4 (Resize Text up to 200%).

## Usage
Include the component as usual. The text will perfectly scale itself without requiring heavy CSS media queries or JavaScript listeners.

## Changes
- `style.css`: 60+ lines adding responsive clamp() font sizes and padding.
- `demo.html`: Demo testing layout for responsive text scaling.
- `README.md`: Describes the feature.
\nFixes #55413\n