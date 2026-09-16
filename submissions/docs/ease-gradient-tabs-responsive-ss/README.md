# Gradient Glow Segmented Tab Bar - Responsive Guide

## Overview

The Gradient Glow Segmented Tab Bar delivers hardware-accelerated, high-performance visual states with dual-layer blurred gradient backdrops, robust mobile horizontal scrolling, and full WAI-ARIA compliant keyboard navigation.

This documentation guides developers on implementing responsive layout breakpoints without experiencing CSS `filter: blur` clipping bugs on mobile viewports.

---

## The Viewport Anti-Clip Solution

When implementing vibrant outer glowing effects using `filter: blur()` or pseudo-elements (`::after`), standard container overflow settings like `overflow-x: auto` on mobile devices cause severe clipping along the vertical boundaries of active tab buttons.

To eliminate glow clipping while retaining touch-friendly horizontal scrolling on narrow screens, the component relies on the **Viewport Anti-Clip Trick**:

```css
/* Container allowing horizontal scroll while expanding hit area to preserve glow */
.ease-tab-viewport {
  width: 100%;
  overflow-x: auto;
  padding: 1.5rem 1rem;
  margin: -1.5rem -1rem;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
}

.ease-tab-viewport::-webkit-scrollbar {
  display: none;
}
```

By pairing equal positive padding and negative margins (`padding: 1.5rem 1rem; margin: -1.5rem -1rem;`), the bounding box expands to render the blurred ambient light without clipping against viewport edges.

---

## HTML Markup & Responsive Modifiers

Below are production-ready code examples demonstrating the default inline variant (horizontal scroll on mobile) and the fluid grid modifier (full width grid at `>=640px`).

### 1. Standard Responsive Tab Bar (Scrollable Mobile)

```html
<div class="ease-tab-viewport">
  <div class="ease-tab-bar" role="tablist" aria-label="Application Views">
    <button type="button" class="ease-tab-btn is-active" role="tab" aria-selected="true" tabindex="0">Overview</button>
    <button type="button" class="ease-tab-btn" role="tab" aria-selected="false" tabindex="-1">Integrations</button>
    <button type="button" class="ease-tab-btn" role="tab" aria-selected="false" tabindex="-1">Billing & Usage</button>
    <button type="button" class="ease-tab-btn" role="tab" aria-selected="false" tabindex="-1">Advanced Settings</button>
  </div>
</div>
```

### 2. Fluid Grid Variant with Sunset Theme (Desktop Grid Breakpoint)

```html
<div class="ease-tab-viewport is-fluid ease-theme-sunset">
  <div class="ease-tab-bar ease-tab-fluid" role="tablist" aria-label="Analytics Timeframe">
    <button type="button" class="ease-tab-btn is-active" role="tab" aria-selected="true" tabindex="0">24 Hours</button>
    <button type="button" class="ease-tab-btn" role="tab" aria-selected="false" tabindex="-1">7 Days</button>
    <button type="button" class="ease-tab-btn" role="tab" aria-selected="false" tabindex="-1">30 Days</button>
    <button type="button" class="ease-tab-btn" role="tab" aria-selected="false" tabindex="-1">All Time</button>
  </div>
</div>
```

### CSS Class API

| Selector | Description |
| :--- | :--- |
| `.ease-tab-viewport` | Wrapper that allows mobile horizontal scrolling while using negative margins to prevent `filter: blur` clipping. |
| `.ease-tab-bar` | The main `role="tablist"` container with the inner box shadow. |
| `.ease-tab-btn` | Individual tab buttons (`role="tab"`). |
| `.ease-tab-btn.is-active` | Selected tab injecting the dual-layer pseudo-element glow. |
| `.ease-tab-fluid` | Modifier that converts the bar to a full-width CSS grid on screens `>=640px`. |
| `.ease-theme-sunset` | Example modifier overriding the gradient variables. |

---

## CSS Custom Property Themes (Tokens)

The component utilizes CSS custom properties for effortless design token override and custom color palette composition.

```css
:root {
  --tab-bg: #020617;
  --tab-surface: #0f172a;
  --tab-border: rgba(255, 255, 255, 0.08);
  --tab-text: #94a3b8;
  --tab-text-active: #ffffff;
  --glow-start: #3b82f6;
  --glow-end: #8b5cf6;
  --glow-accent: #60a5fa;
  --tab-radius: 12px;
}
```

### Token Definitions

- `--glow-start` / `--glow-end`: Color stops controlling the vibrant active tab gradient and ambient blurred aura.
- `--tab-surface`: Base background color of the segmented tab container.
- `--tab-text` / `--tab-text-active`: High-contrast typography tokens meeting WCAG AA contrast standards.

---

## Accessibility & Keyboard Navigation (WAI-ARIA)

To guarantee inclusive interaction across screen readers and assistive devices:

1. **Semantic Roles**: The parent container must have `role="tablist"` and an explicit `aria-label` describing the tab group context.
2. **Tab Roles**: Interactive items must use `<button>` elements with `role="tab"`.
3. **State Attributes**:
   - The active tab must specify `aria-selected="true"` and `tabindex="0"`.
   - Inactive tabs must specify `aria-selected="false"` and `tabindex="-1"`.
4. **Roving Tabindex**: Keyboard focus is managed via JavaScript supporting `ArrowRight` and `ArrowLeft` navigation to seamlessly transition active selection and bring out-of-view tabs into mobile viewport focus via `.scrollIntoView()`.
5. **High Contrast Mode**: Supports Windows High Contrast Mode (`@media (forced-colors: active)`) by rendering high-contrast native borders and hiding ambient blur pseudo-elements.
