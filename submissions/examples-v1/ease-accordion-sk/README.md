# CSS-Only Accordion Component

> A self-contained, pure CSS accordion built with native `<details>`/`<summary>` elements. Zero JavaScript required for core functionality. Accessible by default.

## What does this do?

A reusable accordion component that lets users expand/collapse sections of content with smooth animated height transitions. Uses the browser's native `<details>` and `<summary>` elements for built-in keyboard navigation, screen reader support, and progressive enhancement.

## How is it used?

```html
<div class="accordion">
  <details>
    <summary>
      <span>Click to expand</span>
      <svg class="accordion-arrow" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M6 8l4 4 4-4" />
      </svg>
    </summary>
    <div class="accordion-content">
      <div class="accordion-content-inner">
        <div class="accordion-content-body">
          <p>Your content here.</p>
        </div>
      </div>
    </div>
  </details>
</div>
```

### Variants

| Class | Description |
|-------|-------------|
| `accordion` | Base accordion with smooth animations |
| `accordion-bordered` | Each item has an independent border and radius |
| `accordion-flush` | No outer border, edge-to-edge dividers |
| `accordion-compact` | Reduced padding and font size |
| `accordion-group-js` | JavaScript-enhanced single-select (only one open at a time) |
| `accordion-icon` | Leading icon support inside summaries |
| `accordion-arrow` | Chevron arrow that rotates on open |

## Why is it useful?

EaseMotion CSS v1.2 roadmap explicitly calls for "CSS-only accordion and tabs." While `tabs.css` already exists in the core `components/` directory, **no accordion component exists yet**. This submission fills that gap with:

- **CSS-only height animation** using `grid-template-rows: 0fr` → `1fr` — the cleanest way to animate `height: auto` without JavaScript
- **Dark mode support** via `prefers-color-scheme: dark` media query
- **`prefers-reduced-motion` respect** — animations are disabled for users who prefer reduced motion
- **Progressive enhancement** — the exclusive-open group behavior uses 15 lines of JavaScript as an enhancement, but the base accordion works with zero JS
- **Native accessibility** — `<details>`/`<summary>` provide built-in keyboard interaction, ARIA semantics, and screen reader announcements with no extra effort

The design follows EaseMotion's philosophy: self-documenting class names, CSS custom properties for theming, and clean, composable variants.
