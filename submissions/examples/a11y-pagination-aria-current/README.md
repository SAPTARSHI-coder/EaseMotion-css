# Accessible Pagination Component

A highly accessible, WCAG 2.1 AA compliant Pagination component demonstrating the correct semantic implementation of the `aria-current` attribute for multi-page data navigation.

## Accessibility Features

- **ARIA Current Attribute**: The active page link properly implements `aria-current="page"`. This ensures that screen readers like NVDA, VoiceOver, and JAWS correctly announce the item as the currently active page in the series, rather than just "link". The visual styling in CSS is tied directly to this attribute (`[aria-current="page"]`) to ensure the visual state and semantic state are never out of sync.
- **Landmark Semantics**: The entire component is wrapped in a `<nav>` tag with `aria-label="Pagination Navigation"`. This creates a landmark that screen reader users can quickly jump to.
- **Accessible Names**: 
  - Each page link has an explicit `aria-label` (e.g., `aria-label="Go to page 1"` or `aria-label="Current page, page 2"`).
  - Next/Previous buttons utilize SVG icons marked with `aria-hidden="true"`, while visually hidden text (`<span class="sr-only">`) provides the text context for screen readers.
- **Keyboard Navigation**: Uses standard `<a>` tags with `href`, ensuring natural keyboard tabbing order (`Tab` and `Shift+Tab`) and activation (`Enter`).
- **Focus Management**: A highly visible focus ring is implemented via `:focus-visible` with `outline-offset`, fulfilling the WCAG Focus Visible requirement.
- **Forced Colors Support**: Includes robust `@media (forced-colors: active)` styling to map active background and text variables directly to operating system high-contrast colors (`Canvas`, `CanvasText`, `Highlight`).

## Usage
Include `demo.html` and `style.css` in your project.
