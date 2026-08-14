# Dynamic Breadcrumb

## What It Does
The Dynamic Breadcrumb is a semantic, responsive navigation component that indicates the user's current location within a hierarchical website or application. It provides an inline trail of links leading back to the root page, wrapping dynamically on smaller screens to ensure visibility without breaking the layout.

## How to Use
Include the `components/breadcrumb.css` file and use the standard `.ease-breadcrumb` classes. Wrap your breadcrumb items inside an `<ol>` list for proper semantics.

```html
<nav class="ease-breadcrumb" aria-label="Breadcrumb">
    <ol class="ease-breadcrumb-list">
        <li class="ease-breadcrumb-item">
            <a href="#" class="ease-breadcrumb-link">Home</a>
        </li>
        <li class="ease-breadcrumb-separator" aria-hidden="true">/</li>
        <li class="ease-breadcrumb-item">
            <span class="ease-breadcrumb-active" aria-current="page">Current Page</span>
        </li>
    </ol>
</nav>
```
Modifiers available:
- `.ease-breadcrumb-sm`: Smaller font size
- `.ease-breadcrumb-lg`: Larger font size

## Example
The included `demo.html` showcases four examples of the Dynamic Breadcrumb:
1. **Standard Breadcrumb:** A default 3-level hierarchy using text separators.
2. **Small Breadcrumb:** Demonstrates the `.ease-breadcrumb-sm` class with chevron separators.
3. **Large Breadcrumb:** Demonstrates the `.ease-breadcrumb-lg` class using SVG icons as separators.
4. **Dark Mode Context:** Shows how the `.bg-dark` utility context automatically adjusts the active text color for readability.
5. **Dynamic Wrapping (Responsive):** A deeply nested 7-level path that demonstrates how the `flex-wrap: wrap` property dynamically wraps the breadcrumb items gracefully to the next line on small screens.

## Why It Is Useful
Breadcrumbs are a crucial UI pattern for deeply nested applications or content-heavy sites (like e-commerce or documentation). They help users instantly understand their current location and provide a fast, one-click method to jump back up the hierarchy without relying on the browser's back button.

## Accessibility
This component is fully accessible:
- **Semantic Structure:** Uses `<nav>` and an ordered list (`<ol>`) to correctly convey the hierarchical structure to screen readers.
- **ARIA Labels:** The `<nav>` element has `aria-label="Breadcrumb"`.
- **Current Page:** The active item uses `aria-current="page"` to programmatically indicate the user's location.
- **Hidden Separators:** Decorative separators have `aria-hidden="true"` so they are not read aloud by screen readers.
- **Focus States:** Keyboard navigation is supported via focus-visible outlines on links.

## Responsive Behavior
On smaller screens, or with extremely long hierarchies, the `.ease-breadcrumb-list` uses CSS Flexbox with `flex-wrap: wrap`. Instead of overflowing off the screen or requiring horizontal scrolling, the breadcrumb trail dynamically flows onto a second line, keeping all navigation links visible and tappable.
