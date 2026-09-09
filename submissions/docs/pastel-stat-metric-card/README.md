# Pastel Stat Metric Card (Quickstart Guide)

This guide documents how to implement a clean, accessible Pastel Stat Metric Card with subtle hover animations. This component is perfect for dashboard overviews and data visualizations.

## HTML Markup Example

Here is the base accessible markup for the metric card. Notice the use of `<article>` and the `sr-only` class to ensure screen readers interpret the trend data correctly.

```html
<article class="stat-card" tabindex="0">
    <!-- Icon container marked as hidden so screen readers ignore the raw SVG -->
    <div class="stat-card__icon" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
        </svg>
    </div>
    
    <div class="stat-card__content">
        <h2 class="stat-card__title">Total Users</h2>
        <div class="stat-card__value">14,230</div>
        
        <!-- Accessible Trend Indicator -->
        <div class="stat-card__trend stat-card__trend--up">
            <span class="sr-only">Increased by</span>
            <span aria-hidden="true">↑</span> 12.5%
        </div>
    </div>
</article>
```

## CSS Custom Properties & Modifiers

The aesthetic relies on soft pastel backgrounds for the icons, contrasting against a crisp white card. You can theme the icon and background using CSS variables.

### Default Variables (Purple Theme)

```css
:root {
    --card-bg: #fff;
    --card-shadow: rgba(149, 157, 165, 0.1);
    
    --icon-bg: #f3f0ff; /* Pastel Purple */
    --icon-color: #7c3aed; /* Deep Purple */
}
```

### Modifier Classes

Append these modifier classes to the `.stat-card` element to instantly change the icon's pastel color scheme:

**Mint Theme** (`.stat-card--mint`)
```css
.stat-card--mint {
    --icon-bg: #d1fae5;
    --icon-color: #059669;
}
```

**Peach Theme** (`.stat-card--peach`)
```css
.stat-card--peach {
    --icon-bg: #ffedd5;
    --icon-color: #ea580c;
}
```

## Accessibility Requirements

Dashboard metrics often convey dense information. Follow these guidelines to ensure inclusivity:

### Screen Reader Context
- Avoid letting screen readers read out raw symbols like `↑` or `↓`. Wrap the symbol in `<span aria-hidden="true">` and provide a visually hidden text alternative (e.g., `<span class="sr-only">Increased by</span>`) right next to it.
- Hide purely decorative SVG icons using `aria-hidden="true"` on the parent `.stat-card__icon` wrapper.

### Keyboard Navigation
- If the card acts as a link or interactive element, use `<a class="stat-card" href="...">` or `<button class="stat-card">`.
- If it is purely informational but you still want hover effects to be discoverable by keyboard users, add `tabindex="0"`.
- Ensure the `:focus-visible` state is clearly defined (e.g., using `outline: 2px solid var(--icon-color)`).

*Note: This documentation submission is indexed automatically by the EaseMotion documentation engine.*
