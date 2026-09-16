# Claymorphism Dropdown Split Button - Quickstart Guide

## Overview

The Claymorphism Dropdown Split Button component provides an inflated 3D tactile interface combining a primary action button with an attached dropdown trigger toggle. Designed using modern CSS custom properties, inset light/dark box-shadow highlights, floating drop shadows, and full WAI-ARIA accessibility compliance, it delivers a modern aesthetic with complete keyboard navigation support.

## Quickstart & HTML Snippets

To implement the Claymorphism Dropdown Split Button, include `style.css` and structure your DOM using the markup snippet below:

```html
<!-- Standard Claymorphism Split Button -->
<div class="ease-clay-split-wrapper">
  <div class="ease-clay-split-group">
    <button type="button" class="ease-clay-btn ease-clay-btn-main">Save Draft</button>
    <button type="button" class="ease-clay-btn ease-clay-btn-trigger" aria-haspopup="menu" aria-expanded="false" aria-label="More save options">
      ▼
    </button>
  </div>
  <div class="ease-clay-dropdown" role="menu">
    <button type="button" class="ease-clay-menu-item" role="menuitem">Publish Now</button>
    <button type="button" class="ease-clay-menu-item" role="menuitem">Schedule...</button>
    <div style="height: 1px; background: var(--clay-inner-dark); margin: 0.25rem 0;"></div>
    <button type="button" class="ease-clay-menu-item" role="menuitem" style="color: #ef4444;">Discard</button>
  </div>
</div>
```

> **Note on Accessibility Attributes:** Ensure `aria-haspopup="menu"` is set on `.ease-clay-btn-trigger` and programmatically toggle `aria-expanded="true"` / `aria-expanded="false"` as the dropdown menu opens and closes.

## CSS Class Naming Conventions & Modifiers

The component uses scoped BEM-like class naming conventions under the `.ease-clay-` namespace.

| Class Name | Description |
| :--- | :--- |
| `.ease-clay-split-wrapper` | Relative positioning context for containing the group and dropdown. |
| `.ease-clay-split-group` | Flex container merging the primary action and trigger buttons with a 4px gap. |
| `.ease-clay-btn` | Base claymorphic button styling (fonts, inset shadows, interactive transitions). |
| `.ease-clay-btn-main` | The primary action button (rounded on outer left, squarish on inner right). |
| `.ease-clay-btn-trigger` | The dropdown toggle (squarish on inner left, rounded on outer right). |
| `.ease-clay-dropdown` | The absolute-positioned menu container with floating clay shadow. |
| `.ease-clay-menu-item` | Interactive menu action item supporting hover, focus, and keyboard activation. |
| `.ease-clay-primary` | Theme modifier applying vibrant blue primary palette tokens. |
| `.ease-clay-accent` | Theme modifier applying vibrant pink accent palette tokens. |
| `.ease-clay-sm` | Size modifier reducing padding and font dimensions for compact layouts. |

## CSS Custom Property Themes (Tokens)

Customize or override component styles dynamically via CSS Custom Properties defined on `:root` or palette modifier classes:

```css
:root {
  --clay-bg: #e2e8f0;            /* Overall page container background */
  --clay-surface: #f1f5f9;       /* Base button and card surface fill */
  --clay-text: #0f172a;          /* Primary foreground typography color */
  --clay-inner-light: #ffffff;   /* Top-left inset highlight shadow */
  --clay-inner-dark: #cbd5e1;    /* Bottom-right inset bevel shadow */
  --clay-drop-shadow: rgba(100, 116, 139, 0.35); /* Outer floating shadow */
  --clay-radius-outer: 24px;     /* Outer corner border radius */
  --clay-radius-inner: 8px;      /* Inner split seam border radius */
}
```

## Accessibility & WAI-ARIA Dropdown Matrix

The split button architecture adheres strictly to WAI-ARIA design patterns for menus and dropdown triggers:

### ARIA Roles & Attributes
- **Dropdown Container**: Configured with `role="menu"` to identify a list of actionable menu items.
- **Menu Items**: Configured with `role="menuitem"` for menu child options.
- **Dropdown Trigger**: Uses `aria-haspopup="menu"` to notify screen readers that clicking opens a popup menu, and dynamically updates `aria-expanded` (`true` when open, `false` when closed).

### Keyboard Navigation Specification
- **Activation**: Pressing `Space` or `Enter` on `.ease-clay-btn-trigger` toggles menu visibility and shifts focus to the first `.ease-clay-menu-item`.
- **Arrow Keys**:
  - `ArrowDown`: Moves focus sequentially to the next menu item, looping back to the top item at the end.
  - `ArrowUp`: Moves focus sequentially to the previous menu item, looping to the bottom item at the top.
- **Escape Key**: Pressing `Escape` inside an open menu closes the menu immediately and returns keyboard focus to `.ease-clay-btn-trigger`.
- **Dismissal**: Clicking anywhere outside the split button wrapper automatically closes any open dropdown menu.
