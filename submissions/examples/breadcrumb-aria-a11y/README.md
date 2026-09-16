# Accessible Breadcrumb Navigation (ARIA Current Page & Semantics)

This submission demonstrates how to implement a fully accessible Breadcrumb component that complies with WCAG 2.1 AA standards, supporting screen readers, keyboard navigation, and high contrast modes.

## Core Accessibility Features

### 1. Semantic Navigation Region

Breadcrumbs are a secondary navigation mechanism. They must be wrapped in a `<nav>` element. Because a page has multiple `<nav>` elements, you must provide an explicit `aria-label` so screen reader users know *which* navigation block they are entering.

```html
<nav aria-label="Breadcrumb">
    ...
</nav>
```

### 2. Ordered List Structure

Breadcrumbs represent a strict hierarchy (Home > Category > Product). Therefore, you must use an ordered list (`<ol>`). This allows screen readers to announce "List with 4 items" and "Item 3 of 4", providing the user with vital context about how deep they are in the site hierarchy.

```html
<ol class="breadcrumb-list">
    <li class="breadcrumb-item">...</li>
</ol>
```

### 3. Identifying the Current Page

Just like pagination, you should never rely on visual-only classes like `<a class="active">` to indicate the user's current location.

The correct specification is `aria-current="page"`. 

```html
<!-- Correct implementation -->
<li class="breadcrumb-item">
    <a href="#" aria-current="page">MacBook Pro</a>
</li>
```

#### Enforcing Semantic Styling
To guarantee that the visual state of the component never falls out of sync with its accessibility state, we strictly forbid the use of `.active` classes in our CSS. Instead, we style the component by targeting the ARIA attribute directly:

```css
/* The CSS selector IS the accessibility attribute */
.breadcrumb-link[aria-current="page"] {
    color: var(--text-color);
    font-weight: 600;
    pointer-events: none;
}
```

### 4. Hiding Visual Separators

Slashes (`/`), carets (`>`), or arrows used to separate breadcrumb items create extreme noise for screen readers, which will literally read "Home slash Electronics slash Laptops". We must hide these visual separators using `aria-hidden="true"`.

```html
<span class="breadcrumb-separator" aria-hidden="true">/</span>
```

### 5. High Contrast (Forced Colors) Support

In Windows High Contrast Mode, standard colors are stripped away. The active page (`aria-current="page"`) should look like standard text, not a clickable link. We use the `forced-colors` media query to enforce this styling.

```css
@media (forced-colors: active) {
    .breadcrumb-link[aria-current="page"] {
        color: CanvasText;
        text-decoration: none;
    }
}
```
