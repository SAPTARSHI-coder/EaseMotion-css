# Card CSS Logical Properties

## Description
This PR migrates the `card` component from physical CSS properties (`margin-left`, `padding-right`, `border-left`) to CSS Logical Properties (`margin-inline-start`, `padding-inline-end`, `border-inline-start`). This ensures the component automatically adapts to both LTR and RTL writing modes without requiring any manual overrides using `[dir="rtl"]` selectors.

## Usage
Include the component as usual. The layout will automatically respect the document's writing direction without additional configuration.

## Changes
- `style.css`: 60+ lines migrating all physical properties to CSS Logical equivalents.
- `demo.html`: Side-by-side LTR/RTL demo to visually validate the logical property flipping.
- `README.md`: Describes the feature and migration rationale.
\nFixes #55417\n