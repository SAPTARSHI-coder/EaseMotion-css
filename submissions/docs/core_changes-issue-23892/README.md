# ease-sr-only — Screen Reader Only Utility

## 1. What does this do?

Adds screen reader only utility classes that visually hide content while keeping it accessible to assistive technology (screen readers). Includes focusable variant for skip links, semantic aliases, and responsive breakpoint variants.

**Classes:**
- `.ease-sr-only` — Visually hide, keep accessible to screen readers
- `.ease-not-sr-only` — Restore visibility (undo sr-only)
- `.ease-sr-only-focusable` — Hidden until focused (for skip links)
- `.ease-sr-only-label` — Semantic alias for ARIA labels
- `.ease-sr-only-description` — Semantic alias for ARIA descriptions
- `.ease-sr-inline` — Inline sr-only variant
- `.ease-{sm|md|lg|xl}:sr-only` — Responsive hide
- `.ease-{sm|md|lg|xl}:not-sr-only` — Responsive show

## 2. How is it used?

```html
<!-- Icon button label -->
<button>
  <svg><!-- icon --></svg>
  <span class="ease-sr-only">Search</span>
</button>

<!-- Skip link -->
<a href="#main" class="ease-sr-only-focusable">
  Skip to main content
</a>

<!-- Responsive -->
<span class="ease-lg:sr-only">Mobile only text</span>
<span class="ease-sr-only ease-md:not-sr-only">Visible md+</span>
```

## 3. Why is this useful?

- **Accessibility** — WCAG compliant visually hidden pattern
- **Skip links** — Focusable variant for keyboard navigation
- **Icon buttons** — Label icon-only controls
- **Responsive** — Show/hide content at breakpoints
- **Reset** — `ease-not-sr-only` to override
