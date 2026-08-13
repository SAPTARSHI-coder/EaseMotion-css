# Responsive SaaS Badge

A set of modern, pure CSS badge components styled specifically for SaaS dashboards and user interfaces. Built for Issue #78737.

## Features
- **Pure CSS:** No JavaScript required.
- **Two Visual Themes:** Solid high-contrast badges for primary status, and subtle low-contrast badges for secondary tags.
- **Multiple Status Variants:** Includes Success, Warning, Error, Info, and Neutral colors out of the box.
- **Dot Indicators:** Optional pure CSS visual dot for added hierarchy without needing external icons.
- **Interactive State:** Hover effects and accessibility outlines for badges used as clickable filters or tags.
- **Fully Responsive:** Adapts to mobile screens, with text-overflow protection to prevent horizontal scrolling on tight viewports.
- **Accessible:** Includes `.sr-only` aria practices and standard focus rings.
- **Motion Safe:** Respects `@media (prefers-reduced-motion: reduce)` by removing hover transitions for users who prefer static elements.

## Folder Structure
- `demo.html` - The showcase layout displaying all badge variations.
- `style.css` - The component styling logic.
- `README.md` - Documentation.

## How to Use

### 1. Basic HTML Structure
Use standard `<span>` tags for static indicators, or `<button>` tags if the badge is an interactive filter.

```html
<!-- Subtle Neutral Badge -->
<span class="ease-badge ease-badge-subtle ease-badge-neutral">Draft</span>

<!-- Solid Success Badge -->
<span class="ease-badge ease-badge-solid ease-badge-success">Approved</span>
```

### 2. Available Variants
Combine base classes with the modifiers below:
- **Style:** `.ease-badge-subtle`, `.ease-badge-solid`
- **Color:** `.ease-badge-neutral`, `.ease-badge-info`, `.ease-badge-success`, `.ease-badge-warning`, `.ease-badge-error`
- **Size:** `.ease-badge-sm`, *(Default)*, `.ease-badge-lg`

### 3. Adding Dot Indicators
Add a `<span>` with the class `.ease-badge-dot` inside your badge:
```html
<span class="ease-badge ease-badge-subtle ease-badge-success">
    <span class="ease-badge-dot" aria-hidden="true"></span>
    Active Status
</span>
```

### 4. Interactive Tags
If the badge functions as an interactive element (e.g., a filter you can remove), use a `<button>` and add the `.ease-badge-interactive` class to enable hover translation effects:
```html
<button class="ease-badge ease-badge-interactive ease-badge-subtle ease-badge-info">
    Frontend Team
    <!-- SVG Close Icon here -->
</button>
```

## Customizing Colors
The colors are cleanly defined in `style.css` at the bottom under the "Badge Color Variants" section. You can simply change the `background-color`, `color`, and `border-color` hex values to match your custom brand palette.
