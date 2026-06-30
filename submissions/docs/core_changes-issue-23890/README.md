# ease-truncate — Text Truncation & Line Clamp Utility

## 1. What does this do?

Adds text truncation utility classes for controlling text overflow. Supports single-line truncation with ellipsis, multi-line line-clamp (1–6 lines), clip truncation (no ellipsis), responsive breakpoint variants, and a reset class.

**Classes:**

- `.ease-truncate` — Single-line `text-overflow: ellipsis; white-space: nowrap`
- `.ease-truncate-{1-6}` — `-webkit-line-clamp` for N lines
- `.ease-truncate-multiline` — Default 3-line clamp
- `.ease-truncate-ellipsis` — Explicit ellipsis alias
- `.ease-truncate-clip` — Clip overflow (no ellipsis)
- `.ease-truncate-none` — Reset all truncation
- `.ease-{sm|md|lg|xl}:truncate` / `.ease-{sm|md|lg|xl}:truncate-{2|3|4}` — Responsive variants

## 2. How is it used?

```html
<p class="ease-truncate">Single-line truncated text...</p>
<p class="ease-truncate-3">Clamped to three visible lines...</p>
<p class="ease-truncate-clip">Clipped with no ellipsis</p>
<p class="ease-truncate ease-lg:truncate-2">
  Single line on mobile, 2 lines on desktop
</p>
```

## 3. Why is this useful?

- **No JavaScript** — Pure CSS truncation
- **Flexible** — 1–6 line clamp options
- **Responsive** — Breakpoint-prefixed variants
- **Reset support** — `ease-truncate-none` to override
- **Accessible** — Content remains in DOM for screen readers
