# Accessible Breadcrumb Component

A highly accessible, WCAG 2.1 AA compliant Breadcrumb Navigation component demonstrating the correct semantic implementation of the `aria-current` attribute for hierarchical navigation.

## Accessibility Features

- **ARIA Current Attribute**: The final item in the breadcrumb trail implements `aria-current="page"`. This ensures that screen readers like NVDA, VoiceOver, and JAWS correctly announce the item as the currently active page.
- **Current Page Semantics**: The current page is represented by a `<span>` rather than an `<a>` tag with no `href`. This correctly removes the current page from the tab order and prevents confusing "link" announcements.
- **Landmark Semantics**: The entire component is wrapped in a `<nav>` tag with `aria-label="Breadcrumb"`. This creates a semantic landmark that screen reader users can quickly jump to.
- **List Semantics**: Structured using an ordered list `<ol>`, which provides screen readers with context about the total number of steps in the hierarchy and their logical sequence.
- **Separators**: The `/` separators are added visually using CSS pseudo-elements (`::before`), keeping the DOM clean and preventing screen readers from needlessly reading "slash" between every item.
- **Keyboard Navigation**: Uses standard `<a>` tags for ancestral links, ensuring natural keyboard tabbing order (`Tab` and `Shift+Tab`) and activation (`Enter`).
- **Focus Management**: A highly visible focus ring is implemented via `:focus-visible` with `outline-offset`, fulfilling the WCAG Focus Visible requirement.
- **Forced Colors Support**: Includes robust `@media (forced-colors: active)` styling to map links and text variables directly to operating system high-contrast colors (`Canvas`, `CanvasText`, `LinkText`, `Highlight`).

## Usage
Include `demo.html` and `style.css` in your project.
