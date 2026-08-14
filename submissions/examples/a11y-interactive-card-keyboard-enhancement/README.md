# Accessible Interactive Card Component (Enhancement)

A highly accessible, WCAG 2.1 AA compliant Interactive Card component designed to behave like a native button while allowing complex HTML nesting and precise keyboard handling.

## Accessibility Features

- **Keyboard Interaction**: Custom `keydown` event listener safely mimics native button behavior. Users can activate the card using both the `Enter` and `Space` keys. `event.preventDefault()` is used on the Space key to prevent the browser from scrolling down the page.
- **Role and Focusability**: 
  - `role="button"` explicitly informs screen readers that this element behaves as a trigger.
  - `tabindex="0"` ensures the card is in the natural keyboard Tab order.
- **ARIA Labeling**: 
  - `aria-labelledby` points to the card's `<h2>` title, providing a concise accessible name.
  - `aria-describedby` points to the card's `<p>` description, providing additional context to screen reader users when they pause on the element.
- **State Announcements (aria-live)**: Uses an `aria-live="polite"` region to announce to screen readers when the card has been activated, confirming the user's action.
- **Focus Management**: A highly visible focus ring is implemented via `:focus-visible` with a large `outline-offset`, fulfilling the WCAG Focus Visible requirement and making keyboard navigation obvious.
- **Forced Colors Support**: Includes robust `@media (forced-colors: active)` styling to map backgrounds and text variables directly to operating system high-contrast colors (`Canvas`, `CanvasText`, `Highlight`). The hover state appropriately shifts child elements to `HighlightText` to maintain contrast.

## Usage
Include `demo.html` and `style.css` in your project. Ensure the provided JavaScript is attached to the card element so that keyboard events function correctly.
