# ease-search-bar — Animated Search Bar Component

## What does this do?

Adds an animated search bar component with smooth expand-on-focus interaction. The bar starts as a compact icon and expands to a full-width input on hover or focus. Includes 5 style variants: default (basic), filled, outline, rounded, and glass.

## How is it used?

```html
<div class="ease-search-bar">
  <span class="ease-search-icon">
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2.5"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  </span>
  <input class="ease-search-input" type="text" placeholder="Search..." />
  <button class="ease-search-clear">&times;</button>
</div>
```

Variants:

```html
<div class="ease-search-bar ease-search-filled">...</div>
<div class="ease-search-bar ease-search-outline">...</div>
<div class="ease-search-bar ease-search-rounded">...</div>
<div class="ease-search-bar ease-search-glass">...</div>
```

Customise via CSS custom properties:

```css
.ease-search-bar {
  --ease-search-border-focus: #10b981;
  --ease-search-radius: 0.25rem;
}
```

## Why is it useful?

Search bars are one of the most common UI elements across dashboards, e-commerce sites, blogs, and documentation. This component provides a polished, accessible, animation-first search bar that integrates with EaseMotion CSS design tokens — no JavaScript required for the expand/collapse behavior. The clear button appears automatically when the input has text, and all variants support dark mode and `prefers-reduced-motion`.

Fixes #22870
