# Brutalism Segmented Switch Control - Quickstart Guide

## Overview

The **Brutalism Segmented Switch Control** is a high-impact, tactile segment toggle component designed for EaseMotion CSS. Built following Neo-Brutalist design principles, it features stark 3px solid borders, zero-blur hard drop shadows, high-contrast typography, and vibrant accent colors. It comes fully equipped with interactive WAI-ARIA roving tabindex keyboard navigation and complete Windows High Contrast Mode (`forced-colors`) support.

---

## Quickstart & HTML Snippets

### 1. Standard Segmented Switch (Default Canary Yellow)

```html
<div class="ease-switch-brutal" role="radiogroup" aria-label="Billing Cycle">
  <button type="button" class="ease-switch-btn is-active" role="radio" aria-checked="true" tabindex="0">Monthly</button>
  <button type="button" class="ease-switch-btn" role="radio" aria-checked="false" tabindex="-1">Quarterly</button>
  <button type="button" class="ease-switch-btn" role="radio" aria-checked="false" tabindex="-1">Annual (Save 20%)</button>
</div>
```

### 2. Large Variant with Cyan Accent

```html
<div class="ease-switch-brutal ease-switch-brutal-lg ease-accent-cyan" role="radiogroup" aria-label="View Mode">
  <button type="button" class="ease-switch-btn is-active" role="radio" aria-checked="true" tabindex="0">Editor</button>
  <button type="button" class="ease-switch-btn" role="radio" aria-checked="false" tabindex="-1">Split</button>
  <button type="button" class="ease-switch-btn" role="radio" aria-checked="false" tabindex="-1">Preview</button>
</div>
```

### 3. Small Variant with Pink Accent

```html
<div class="ease-switch-brutal ease-switch-brutal-sm ease-accent-pink" role="radiogroup" aria-label="Resolution">
  <button type="button" class="ease-switch-btn is-active" role="radio" aria-checked="true" tabindex="0">1X</button>
  <button type="button" class="ease-switch-btn" role="radio" aria-checked="false" tabindex="-1">2X</button>
  <button type="button" class="ease-switch-btn" role="radio" aria-checked="false" tabindex="-1">4X MAX</button>
</div>
```

---

## CSS Class Naming Conventions & Modifiers

| CSS Selector | Description |
| :--- | :--- |
| `.ease-switch-brutal` | Main segmented switch container with hard 3px border and drop shadow. |
| `.ease-switch-btn` | Individual segment button with crisp hover and active states. |
| `.ease-switch-btn.is-active` | Selected segment state filled with `--brutal-accent` and 2px border. |
| `.ease-switch-brutal-sm` | Compact padding and typography variant for dense toolbars. |
| `.ease-switch-brutal-lg` | Large hero-sized segment control for pricing and checkout flows. |
| `.ease-switch-vertical` | Stacks switch segments vertically. |

---

## Custom CSS Property Overrides

The component uses CSS Custom Properties to allow instant theme customization:

- `--brutal-accent`: Selected active background color (default: `#facc15`)
- `--brutal-border`: Border outline color (default: `#000000`)
- `--brutal-shadow`: Hard drop shadow color (default: `#000000`)
- `--brutal-border-width`: Border thickness (default: `3px`)
- `--brutal-shadow-offset`: Hard shadow distance (default: `4px`)

### Custom Accent Example

```css
.my-custom-switch {
  --brutal-accent: #a855f7; /* Purple accent override */
}
```

---

## Keyboard Navigation & Accessibility (WAI-ARIA)

The segmented switch implements the WAI-ARIA Radio Group pattern:

- **Parent Container**: Uses `role="radiogroup"` with a mandatory descriptive `aria-label`.
- **Segment Buttons**: Use `role="radio"` with dynamic `aria-checked="true|false"`.
- **Roving Tabindex**: Only the currently active segment button has `tabindex="0"`. All inactive segments have `tabindex="-1"`.
- **Arrow Key Navigation**:
  - `ArrowRight` / `ArrowDown`: Selects and moves focus to the next segment (wraps around).
  - `ArrowLeft` / `ArrowUp`: Selects and moves focus to the previous segment (wraps around).
- **High-Contrast Support**: Native `forced-colors: active` media query guarantees high visibility using system theme keywords like `CanvasText` and `Highlight`.
