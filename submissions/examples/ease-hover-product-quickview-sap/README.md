# ease-hover-product-quickview-sap

A product card where a "Quick View" bar slides up over the image on hover, sitting just above the info section.

## Usage
1. Include `style.css`.
2. Add markup: `.qv-img` + `.qv-overlay` (starts off-screen below) + `.qv-info` inside `.product-quickview-sap`.

## Customization
- Overlay resting position (`bottom: -50px`) and revealed position (`bottom: 82px`, matching the info section's height) — adjust if `.qv-info` height changes.
- Button text/styling.
- Card image/info content.

## Notes
- The overlay's revealed `bottom` value is tuned to land exactly above the `.qv-info` section rather than fully covering the image, so pricing/title stay visible while the quick-view action appears.
- Respects `prefers-reduced-motion`: the slide-up transition is disabled, overlay appears/disappears instantly on hover.