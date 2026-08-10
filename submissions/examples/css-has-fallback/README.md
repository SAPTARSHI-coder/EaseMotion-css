# CSS :has() Fallback Pattern

A progressive enhancement architecture demonstrating how to safely use the modern CSS `:has()` parent selector without breaking layouts or animations on legacy browsers (like older Firefox ESR builds) that do not support it.

## Features
- **The Problem**: The `:has()` pseudo-class is incredibly powerful, allowing developers to style a parent element based on the state or presence of its children (e.g., `.card:has(img:hover)`). However, if a developer writes this selector globally, any browser that doesn't understand `:has()` will instantly invalidate the entire CSS rule block, potentially breaking critical layout structures.
- **The Solution**: 
  1. **Feature Detection**: We wrap the modern logic inside an `@supports selector(:has(*))` query. This ensures legacy browsers safely ignore the cutting-edge syntax rather than throwing a parsing error.
  2. **Progressive Enhancement**: We provide a sturdy baseline design using traditional selectors (like `.card:hover` or `.card:focus-within`). If the browser supports `:has()`, the `@supports` block kicks in and provides the enhanced, highly-specific interactive experience on top of the baseline.

## Usage
Open `demo.html` in your browser. 
- On a modern browser (Chrome 105+, Safari 15.4+, Firefox 121+), hovering *specifically* over the image in the **Modern Pattern** card will trigger the parent's blue border and lift animation, while dimming the text. 
- The **Fallback Pattern** demonstrates what a legacy browser would see: a safe, traditional hover state applied to the entire card, ensuring the UI remains perfectly functional and aesthetically pleasing even without cutting-edge CSS features.

## Files
- `demo.html`: The HTML structure containing the two interactive cards.
- `style.css`: The styling engine featuring the `@supports selector(:has(*))` feature detection query and traditional fallbacks.
