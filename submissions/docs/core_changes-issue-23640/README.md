# ease-accordion — Collapsible Panel Component

## 1. What does this do?

Adds a collapsible accordion component built on native HTML `<details>` / `<summary>` elements — no JavaScript required. Supports three variants (default, small, bordered) with animated chevron indicators, hover states, and keyboard accessibility.

**New CSS classes:**
- `.ease-accordion` — Container for accordion items
- `.ease-accordion-item` — Individual collapsible panel (use `<details>`)
- `.ease-accordion-item summary` — Clickable header (use `<summary>`)
- `.ease-accordion-body` — Collapsible content area
- `.ease-accordion-sm` — Compact variant with reduced padding
- `.ease-accordion-bordered` — Connected variant without gaps

## 2. How is it used?

```html
<div class="ease-accordion">
  <details class="ease-accordion-item" open>
    <summary>Accordion Header</summary>
    <div class="ease-accordion-body">
      <p>Collapsible content goes here.</p>
    </div>
  </details>
  <details class="ease-accordion-item">
    <summary>Another Item</summary>
    <div class="ease-accordion-body">
      <p>Content for the second panel.</p>
    </div>
  </details>
</div>

<!-- Small variant -->
<div class="ease-accordion ease-accordion-sm">
  <!-- ... -->
</div>

<!-- Bordered variant -->
<div class="ease-accordion ease-accordion-bordered">
  <!-- ... -->
</div>
```

## 3. Why is this useful?

- **Zero JavaScript** — leverages native `<details>` / `<summary>` elements
- **Three variants** — default (rounded), small (compact), bordered (connected)
- **Smooth animation** — chevron rotates 90 degrees on open/close
- **Keyboard accessible** — Tab/Enter/Space support with `focus-visible` outlines
- **Design tokens** — uses `--ease-*` variables throughout for theming
- **Reduced motion** — respects `prefers-reduced-motion`
