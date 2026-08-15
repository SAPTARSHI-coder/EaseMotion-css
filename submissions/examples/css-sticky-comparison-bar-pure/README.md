# CSS Sticky Comparison Bar

A pure CSS floating comparison bar that reveals itself when checkboxes are selected, featuring sticky positioning, dynamic UI states, and conditional button enablement, built entirely without JavaScript using modern CSS selectors.

## Features
- Pure CSS and HTML.
- **Theming & Dark Mode**: Utilizes CSS Custom Properties (`--sticky-bg`, `--card-hover-border`, etc.). Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), generating a sleek dark mode UI with frosted glass effects (`backdrop-filter`).
- **Component Architecture (Documented in Code)**: 
  - **The `:has()` State Controller**: The parent container `.product-container` monitors the checked state of the hidden checkboxes within the product cards. We use `.product-container:has(.compare-checkbox:checked)` to trigger the sticky bar visibility at the bottom of the screen (sliding it up via `transform: translateY(0)`).
  - **CSS Hack for Text Swapping**: When a card is selected, we overlay a pseudo-element (`::after`) on the "Select" button containing the word "Selected", changing the text instantly without needing JavaScript innerHTML manipulation.
  - **Conditional Button Enablement**: The "Compare Now" button in the sticky bar is disabled (`pointer-events: none; opacity: 0.5`) by default. We use a complex `:has()` selector chain (`.product-container:has(.product-card:has(.compare-checkbox:checked) ~ .product-card:has(.compare-checkbox:checked))`) to detect if *at least two* products are selected. If true, the button becomes fully opaque, clickable, and gains a glowing drop shadow.
- Fully accessible semantic structure. Wraps the inputs in `<label>` elements so clicking the card toggles the state. Honors the `prefers-reduced-motion` accessibility standard by disabling the slide-up animation in favor of a static `display: block` toggle for motion-sensitive users.

## Usage
Open `demo.html` in your browser. Click any product card to select it. Watch the comparison bar slide up from the bottom. Notice that the "Compare Now" button remains disabled until you select a second product card.

## Files
- `demo.html`: The HTML structure containing the semantic hidden checkboxes, product grid, and the sticky bar markup.
- `style.css`: The styling, CSS Custom Property theming blocks, and the heavily commented `:has()` relational selector logic.
