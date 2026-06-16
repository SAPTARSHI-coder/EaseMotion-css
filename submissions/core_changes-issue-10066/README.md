# .ease-hstack Horizontal Stack Utility

Adds `.ease-hstack` inline horizontal stack utility classes (counterpart to `.ease-stack` vertical stack).

## Problem

`.ease-stack{-sm,-lg,-xl}` creates only vertical (column) flex stacks. Layouts need a horizontal inline stack — for icon+text groups, badge clusters, or navigation link rows.

## Proposed CSS to Add to `core/utilities.css`

```css
.ease-hstack {
  display: inline-flex !important;
  flex-direction: row !important;
  gap: var(--ease-space-4) !important;
}
.ease-hstack-sm {
  display: inline-flex !important;
  flex-direction: row !important;
  gap: var(--ease-space-2) !important;
}
.ease-hstack-lg {
  display: inline-flex !important;
  flex-direction: row !important;
  gap: var(--ease-space-6) !important;
}
.ease-hstack-xl {
  display: inline-flex !important;
  flex-direction: row !important;
  gap: var(--ease-space-8) !important;
}
```

## Usage

```html
<!-- Button + badge group -->
<div class="ease-hstack-sm">
  <button class="ease-btn ease-btn-primary">Save</button>
  <button class="ease-btn ease-btn-outline">Cancel</button>
  <span class="ease-badge ease-badge-success">Draft</span>
</div>

<!-- Icon + text (inline with surrounding content) -->
<p>You can also combine
  <span class="ease-hstack-sm" style="vertical-align:middle">
    <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 18a8 8 0 100-16 8 8 0 000 16z"/>
    </svg>
    <span>inline elements</span>
  </span>
  without breaking text flow.
</p>

<!-- Composable with other utilities -->
<div class="ease-hstack ease-items-center ease-flex-wrap">
  <span class="ease-badge ease-badge-info">Tag 1</span>
  <span class="ease-badge ease-badge-info">Tag 2</span>
  <span class="ease-badge ease-badge-info">Tag 3</span>
  <span class="ease-badge ease-badge-info">Tag 4</span>
</div>
```

## Benefits
- Mirrors `.ease-stack` API: same naming, same gap scale, same `!important` convention
- `inline-flex` keeps it inline with surrounding text (unlike block-level `.ease-stack`)
- Composes with `.ease-items-center`, `.ease-flex-wrap`, etc.

## Files
- `README.md` — this file
- `demo.html` — demo page
- `style.css` — proposed utility CSS
