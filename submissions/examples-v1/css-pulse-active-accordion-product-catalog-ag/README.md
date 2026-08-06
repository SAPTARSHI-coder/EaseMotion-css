# CSS Pulse-Active Accordion (Product Catalog)

A product-card accordion designed for Product Catalog layouts. Each accordion section represents a product category with thumbnail image slots, specification grids, and a pulsing "new arrival" indicator. Built for e-commerce product browsing experiences.

## Features
- **New Arrival Pulse:** Products tagged as new arrivals receive an animated corner badge with a pulsing glow to attract browsing attention.
- **Thumbnail Image Slot:** Each header includes a square image thumbnail area with a rounded container, ideal for product photography.
- **Specification Grid:** Content sections use a 2-column key-value grid for displaying technical specifications (material, dimensions, weight, etc.).
- **Color Swatch Row:** Includes circular color swatch indicators showing available product variants.
- **Category Tab Styling:** Headers use a horizontal tab-like accent to visually separate product categories.
- **Pure CSS:** No JavaScript. Built on `<details>`/`<summary>`.

## Usage
Wrap items in `.catalog-accordion`. Each `<details>` gets `.catalog-item`. Add `.catalog-item--new` for new arrival highlighting.

## Files
- `demo.html`: A product browsing preview with multiple categories.
- `style.css`: Product card styling, thumbnail containers, spec grid, swatch indicators, and pulse animation.
