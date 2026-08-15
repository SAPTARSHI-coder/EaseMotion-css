# Accessible Chip Component (Dismissible)

A highly accessible, WCAG 2.1 AA compliant Chip (Tag) component featuring a dismiss button. Engineered with best practices for screen readers, keyboard navigation, and high-contrast environments.

## Accessibility Features

- **Semantic HTML & Native Controls**: Uses a native `<button>` element for the dismiss action, ensuring out-of-the-box support for `Enter` and `Space` keyboard interactions.
- **ARIA Labels**: 
  - `aria-label="Remove [Item] filter"` provides explicit context for screen readers when focusing the dismiss button.
  - The SVG icon is marked with `aria-hidden="true"` to prevent redundant screen reader announcements.
- **State Announcements (aria-live)**: Utilizes an `aria-live="polite"` region to actively announce to screen readers when a chip has been removed from the DOM.
- **Focus Management**: Implements a high-visibility `:focus-visible` state with `outline-offset` to ensure keyboard navigators can clearly see the active element, satisfying WCAG Focus Visible guidelines.
- **Forced Colors Support**: Includes a `@media (forced-colors: active)` query to automatically map standard background and text colors to the operating system's system colors (`Canvas`, `CanvasText`, `Highlight`) when Windows High Contrast Mode is enabled.

## Usage
Include `demo.html` and `style.css` in your project. The component relies on a tiny, essential JavaScript function to hide the chip and trigger the `aria-live` announcement.
