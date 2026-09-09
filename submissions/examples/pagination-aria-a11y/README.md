# Accessible Pagination (ARIA Current Page & Semantics)

This submission demonstrates how to implement a fully accessible Pagination component that complies with WCAG 2.1 AA standards, supporting screen readers, keyboard navigation, and high contrast modes.

## Core Accessibility Features

### 1. Semantic Navigation Region

Pagination is a navigation mechanism. It must be wrapped in a `<nav>` element. However, because a page typically has multiple `<nav>` elements (e.g., primary site navigation, sidebar), you must provide an explicit `aria-label` so screen reader users know *which* navigation block they are entering.

```html
<nav aria-label="Pagination">
    <ul class="pagination-list">
        ...
    </ul>
</nav>
```

### 2. Identifying the Current Page

Historically, developers used generic classes like `<a class="active">` to highlight the current page. This provides zero context to screen readers. 

The correct specification is `aria-current="page"`. 

```html
<!-- Correct implementation -->
<li>
    <a href="#" aria-label="Current page, page 2" aria-current="page">2</a>
</li>
```

#### Enforcing Semantic Styling
To guarantee that the visual state of the component never falls out of sync with its accessibility state, we strictly forbid the use of `.active` classes in our CSS. Instead, we style the component by targeting the ARIA attribute directly:

```css
/* The CSS selector IS the accessibility attribute */
.pagination-link[aria-current="page"] {
    background-color: var(--active-bg);
    color: var(--active-text);
}
```

### 3. Clear Context for "Previous" and "Next"

Icons (like `<` and `>`) are meaningless to a screen reader unless properly labeled. If you use SVG icons for the Previous/Next buttons, you must hide the SVG (`aria-hidden="true"`) and provide an `aria-label` on the anchor tag itself.

```html
<a href="#" class="pagination-link" aria-label="Go to previous page">
    <svg aria-hidden="true">...</svg>
</a>
```

### 4. High Contrast (Forced Colors) Support

In Windows High Contrast Mode, background colors are stripped away. The active page (`aria-current="page"`) will become visually indistinguishable from the other links if you only rely on `background-color`. We use the `forced-colors` media query to map the active state to the system's `Highlight` color.

```css
@media (forced-colors: active) {
    .pagination-link[aria-current="page"] {
        background-color: Highlight;
        color: HighlightText;
    }
}
```
