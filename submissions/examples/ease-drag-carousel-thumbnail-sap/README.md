# ease-drag-carousel-thumbnail-sap

A product-gallery style main image with a horizontally drag-scrollable thumbnail strip below it — click a thumbnail to swap the main image.

## Notes
- Thumbnail strip supports both click-to-select and click-and-drag horizontal scrolling, common in e-commerce product galleries.
- Drag scroll computes `scrollLeft` from the delta since drag start rather than absolute cursor position, giving natural momentum-free panning.
- Respects `prefers-reduced-motion`: thumbnail border/opacity transitions removed; drag-scroll itself is unaffected as direct input.