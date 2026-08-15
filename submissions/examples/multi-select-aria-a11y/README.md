# Accessible Multi-Select Dropdown (`menuitemcheckbox`)

This submission demonstrates how to implement a fully accessible Multi-Select Dropdown that complies with WCAG 2.1 AA standards, supporting screen readers, keyboard navigation, and high contrast modes.

## Core Accessibility Features

### 1. The `menuitemcheckbox` Pattern

A common mistake when building custom multi-select dropdowns is to nest actual `<input type="checkbox">` elements inside a dropdown menu. While technically possible, this often results in confusing, double-announced interactions for screen reader users (e.g., "Menu item, checkbox, unchecked...").

The correct ARIA specification is to use `role="menuitemcheckbox"`. This tells the screen reader exactly what the element is in a single, unified interaction.

```html
<!-- Correct implementation -->
<div 
    class="menu-item" 
    role="menuitemcheckbox" 
    aria-checked="false" 
    tabindex="0"
>
    <!-- Visual checkbox (hidden from screen readers) -->
    <div class="checkbox-visual" aria-hidden="true">
        <svg class="check-icon">...</svg>
    </div>
    Frontend
</div>
```

### 2. Semantic Visual States

To guarantee that the visual state of the checkbox never falls out of sync with its accessibility state, we strictly forbid the use of JavaScript classes like `.checked` or `.is-active` in our CSS. Instead, we style the custom checkbox visual by targeting the ARIA attribute directly:

```css
/* The CSS selector IS the accessibility attribute */
.menu-item[aria-checked="true"] .checkbox-visual {
    background-color: var(--primary-color);
    border-color: var(--primary-color);
}

.menu-item[aria-checked="true"] .check-icon {
    opacity: 1;
}
```

### 3. Keyboard Navigation (Roving Tabindex)

Dropdown menus require complex keyboard interactions. When the menu opens, focus must enter the menu. Users should then be able to use `ArrowUp` and `ArrowDown` to navigate options, and `Enter` or `Space` to toggle the checkbox.

This demo implements the "roving tabindex" pattern:
- Only one item has `tabindex="0"` at a time.
- All other items have `tabindex="-1"`.
- When arrow keys are pressed, JavaScript manually calls `.focus()` on the next/previous item and updates the tabindexes.

### 4. High Contrast (Forced Colors) Support

In Windows High Contrast Mode, standard background colors are stripped away. The "checked" state (`aria-checked="true"`) will become visually indistinguishable from the "unchecked" state if you only rely on `background-color`. We use the `forced-colors` media query to map the active state to the system's `Highlight` color.

```css
@media (forced-colors: active) {
    .menu-item[aria-checked="true"] .checkbox-visual {
        background-color: Highlight;
        border-color: Highlight;
        color: HighlightText;
    }
}
```
