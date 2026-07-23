# CSS Custom Property Theming Guide

Welcome to the **CSS Custom Property Theming Guide**! This comprehensive tutorial explains how to customize, extend, and override EaseMotion CSS components dynamically using native CSS custom properties (CSS variables).

---

## 📋 Table of Contents
1. [Benefits of CSS Variables over SASS/LESS](#1-benefits-of-css-variables-over-sassless)
2. [EaseMotion Variables Registry](#2-easemotion-variables-registry)
3. [Global Theme Overrides](#3-global-theme-overrides)
4. [Element-Level Scoped Overrides](#4-element-level-scoped-overrides)
5. [Avoiding the `!important` Anti-Pattern](#5-avoiding-the-important-anti-pattern)
6. [Dynamic Control via JavaScript](#6-dynamic-control-via-javascript)

---

## 1. Benefits of CSS Variables over SASS/LESS

Preprocessors like SASS compile variables into static values at build time. Conversely, CSS Custom Properties:
1. **Compute in the Browser**: They can change dynamically in response to user actions (e.g. settings sliders, color pickers).
2. **Follow the Cascade**: Custom properties inherit values from parent containers, allowing you to scope changes without changing component class declarations.
3. **Read and Write via JavaScript**: You can read or overwrite property variables directly in JS, bridging the gap between design tokens and dynamic application state.

---

## 2. EaseMotion Variables Registry

EaseMotion components inherit values from the following design variables:

| Variable Name | Default Value | Description |
| :--- | :--- | :--- |
| `--ease-brand` | `#8b5cf6` | Primary color accent used for buttons, links, and borders |
| `--ease-bg-base` | `#030712` | Bottom viewport backdrop color |
| `--ease-bg-surface` | `#0b0f19` | Content card, popup, or element backgrounds |
| `--ease-bg-surface-hover` | `#111827` | Content card background when hovered |
| `--ease-border` | `#1f2937` | Subtle border and divider lines |
| `--ease-border-hover` | `#374151` | Divider line colors on element hover |
| `--ease-border-radius` | `12px` | Corner rounding curvature metric |
| `--ease-padding-card` | `1.5rem` | Inner element content padding spacing |
| `--ease-anim-duration` | `0.6s` | Base duration timing for transitions and animations |

---

## 3. Global Theme Overrides

To redefine variables globally across your entire project, declare your overrides inside the `:root` pseudo-class (or `body` selector).

```css
/* Custom Global Dark Theme override */
:root {
  --ease-brand: #10b981; /* Emerald green accent */
  --ease-bg-base: #064e3b; /* Dark forest backdrop */
  --ease-bg-surface: #022c22; /* Card surfaces */
  --ease-border: #047857;
  --ease-border-radius: 8px;
}
```

Any EaseMotion element on the page will automatically compute its styles using these updated values.

---

## 4. Element-Level Scoped Overrides

Because CSS Custom Properties follow the cascade, you can scope an override to a specific component or section. Sibling components outside of this container remain unaffected.

```css
/* Global setup */
:root {
  --ease-brand: #8b5cf6;
}

/* Local override applied to warning cards only */
.warning-accent-card {
  --ease-brand: #f97316; /* Orange accent override */
  --ease-border: #ea580c;
}
```

### HTML Implementation
```html
<!-- Card 1: Inherits the global violet (--ease-brand: #8b5cf6) -->
<div class="theme-card">...</div>

<!-- Card 2: Uses the scoped orange override (--ease-brand: #f97316) -->
<div class="theme-card warning-accent-card">...</div>
```

---

## 5. Avoiding the `!important` Anti-Pattern

In legacy CSS frameworks, customizing components often results in "specificity battles." If the framework declares a class like:

```css
/* Framework baseline code */
.alert-box {
  background-color: #f3f4f6 !important;
}
```

Developers are forced to append `!important` to their own overrides to bypass this block, which clutters the stylesheet.

### How CSS Variables Solve This

By referencing a variable inside the baseline style, the framework gives you a clean API to hook into without needing high-specificity selectors:

```css
/* Framework baseline code */
.alert-box {
  background-color: var(--ease-bg-surface); /* No !important needed! */
}
```

You can now customize the backdrop simply by changing the variable's value:

```css
/* Custom application stylesheet */
.alert-box {
  --ease-bg-surface: #ffffff; /* Smooth, override without specificity clashes */
}
```

---

## 6. Dynamic Control via JavaScript

To create highly interactive themes (such as letting users custom-select accent colors or configure card spacing via dashboard sliders), manipulate custom variables dynamically:

```javascript
// Get target element container
const container = document.querySelector('.playground-canvas');

// Dynamically set CSS variables based on inputs
function updateAccent(colorHex) {
  container.style.setProperty('--ease-brand', colorHex);
  container.style.setProperty('--ease-brand-glow', `${colorHex}55`); // 55 adds opacity channel
}

function updateRadius(radiusValue) {
  container.style.setProperty('--ease-border-radius', `${radiusValue}px`);
}
```
