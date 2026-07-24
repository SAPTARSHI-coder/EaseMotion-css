# Cookie Consent Banner Component

A customizable, pure CSS Cookie Consent component to comply with privacy regulations while maintaining a modern design aesthetic.

## Features

- **Pure HTML/CSS:** No JavaScript logic bundled, allowing you to hook into your own state management easily.
- **Two Layout Variants:**
  - Floating Card (ideal for bottom-left/right placement).
  - Bottom Fixed Banner (ideal for full-width placement).
- **Responsive:** Fluidly adapts from desktop to mobile screens (stacking buttons automatically).
- **Light & Dark Mode:** Native `@media (prefers-color-scheme: dark)` support.
- **Accessible Interactions:** Hover and focus states on links and buttons.

## Usage

Select the variant that fits your needs from `demo.html`, copy the HTML structure, and include `style.css`.
Note: In a real-world scenario, you will want to apply `position: fixed` to either the banner (e.g. `bottom: 0; left: 0; right: 0;`) or the floating card (e.g. `bottom: 24px; right: 24px;`) and hide them via JS when a user clicks accept/decline.

## File Structure

- `demo.html`: Contains example markup for both the floating card and bottom banner variants.
- `style.css`: Core styles relying on CSS custom properties for effortless theming.
