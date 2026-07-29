# ease-sticky-header — Scroll-Aware Sticky Header Component

## What does this do?

Provides a sticky header component that stays fixed at the top of the viewport and reveals a shadow/underline when the user scrolls past the initial viewport. The transition is smooth and uses CSS `transition` on `box-shadow` and `background-color`.

## How is it used?

```html
<header class="ease-sticky-header">
  <nav class="ease-container ease-flex ease-items-center ease-justify-between" style="height: 64px;">
    <a href="#" class="ease-font-bold">Logo</a>
    <nav>
      <a href="#" class="ease-text-sm">Link</a>
    </nav>
  </nav>
</header>

<script src="sticky-header.js" defer></script>
```

The JavaScript uses `IntersectionObserver` to detect when the header passes a threshold. No jQuery or third-party dependencies.

### Variants

| Modifier | Effect |
|---|---|
| (none) | Standard sticky header with scroll shadow |
| `.ease-sticky-header-solid` | Always shows background, shadow only on scroll |
| `.ease-sticky-header-transparent` | Transparent bg initially, bg+shadow on scroll |

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ease-sticky-z` | `100` | Z-index of the sticky header |
| `--ease-sticky-shadow` | `0 1px 3px rgba(0,0,0,0.1)` | Shadow revealed on scroll |
| `--ease-sticky-transition` | `box-shadow 0.3s ease, background-color 0.3s ease` | Transition shorthand |

## Why is it useful?

A sticky header with a scroll shadow is a ubiquitous UI pattern. This component provides it as a drop-in utility with smooth transitions and no external dependencies.

## Features

- CSS-only base, enhanced with JS for scroll detection
- Uses `IntersectionObserver` — no scroll event listeners
- Smooth shadow reveal on scroll
- Transparent and solid variants
- Configurable z-index, shadow, and transition via CSS custom properties
- Respects `prefers-reduced-motion`
