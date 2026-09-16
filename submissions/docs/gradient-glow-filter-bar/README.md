# Gradient Glow Filter Bar Header (Quickstart Guide)

This guide provides the necessary documentation to implement an accessible and visually stunning Gradient Glow Filter Bar Header. This component is ideal for portfolio pages or data-heavy views requiring categorization.

## HTML Markup Example

Here is the base accessible markup for the filter bar header:

```html
<header class="glow-filter-header" role="banner">
    <div class="glow-filter-container">
        <h1 class="glow-filter-title">Projects</h1>
        
        <!-- Filter Navigation -->
        <nav class="glow-filter-nav" aria-label="Project Filters">
            <ul class="glow-filter-list" role="group" aria-label="Filter categories">
                <li>
                    <button class="glow-filter-btn" aria-pressed="true">All</button>
                </li>
                <li>
                    <button class="glow-filter-btn" aria-pressed="false">Design</button>
                </li>
                <li>
                    <button class="glow-filter-btn" aria-pressed="false">Development</button>
                </li>
            </ul>
        </nav>
    </div>
</header>
```

## CSS Custom Properties & Modifiers

The glow effect is controlled by CSS custom properties. You can easily switch themes using modifier classes on the `.glow-filter-header` element.

### Default Theme Variables

```css
:root {
    --glow-color-1: #ff007f;
    --glow-color-2: #7928ca;
    --glow-spread: 15px;
}
```

### Modifier Classes

Append these modifier classes to `.glow-filter-header` to instantly change the glow aesthetic:

**Cyberpunk Glow** (`.glow-filter-header--cyberpunk`)
```css
.glow-filter-header--cyberpunk {
    --glow-color-1: #00f3ff;
    --glow-color-2: #ff003c;
    --glow-spread: 25px;
}
```

**Soft Pastel** (`.glow-filter-header--pastel`)
```css
.glow-filter-header--pastel {
    --glow-color-1: #ffb6c1;
    --glow-color-2: #add8e6;
    --glow-spread: 20px;
}
```

## Accessibility Requirements

To ensure this filter bar is usable by everyone, follow these guidelines:

### Keyboard Navigation Setup

- `Tab`: Moves focus into the navigation and iterates through the buttons sequentially.
- `Enter` / `Space`: Triggers the filter. Ensure you add JavaScript to handle the click event.

### ARIA Attributes

Your markup must include these essential ARIA attributes:
- `role="banner"` on the `<header>` element to define the landmark.
- `aria-label="Project Filters"` on the `<nav>` element to distinguish it from other nav regions.
- `role="group"` on the `<ul>` to associate the filter items together.
- `aria-pressed="true"` or `aria-pressed="false"` on the buttons to indicate which filter is currently active. Your JavaScript should toggle this attribute when a button is clicked.

*Note: This documentation submission is indexed automatically by the EaseMotion documentation engine.*
