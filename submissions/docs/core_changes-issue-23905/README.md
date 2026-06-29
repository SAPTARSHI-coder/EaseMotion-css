# ease-chip — Chip/Tag Component

## 1. What does this do?

Adds a flexible chip/tag component with multiple color variants, sizes, styles (filled, outline, subtle), pill shape, removable chips, interactive/clickable states, disabled state, and chip groups.

**Classes:**
- `.ease-chip` — Base chip element
- `.ease-chip-{primary|secondary|success|warning|danger|info}` — Color variants
- `.ease-chip-{sm|lg}` — Size variants (default is md)
- `.ease-chip-outline` — Transparent background with colored border
- `.ease-chip-subtle` — Light background, no border
- `.ease-chip-pill` — Fully rounded (9999px)
- `.ease-chip-remove` — Close/dismiss button inside a chip
- `.ease-chip-interactive` — Hover/focus/active states for clickable chips
- `.ease-chip-disabled` — Reduced opacity, no pointer events
- `.ease-chip-icon` — Icon element inside a chip
- `.ease-chip-group` — Flex container for chip groups
- `.ease-chip-group-label` — Optional label for chip groups

## 2. How is it used?

```html
<!-- Basic filled chip -->
<span class="ease-chip ease-chip-primary">Primary</span>

<!-- Outline pill chip -->
<span class="ease-chip ease-chip-outline ease-chip-success ease-chip-pill">
  Success Outlined
</span>

<!-- Removable chip -->
<span class="ease-chip ease-chip-info ease-chip-pill">
  Label
  <button class="ease-chip-remove" aria-label="Remove">&times;</button>
</span>

<!-- Interactive button chip -->
<button class="ease-chip ease-chip-danger ease-chip-interactive">
  Delete
</button>

<!-- Chip group -->
<div class="ease-chip-group">
  <span class="ease-chip-group-label">Tags:</span>
  <span class="ease-chip ease-chip-primary">HTML</span>
  <span class="ease-chip ease-chip-success">CSS</span>
</div>
```

## 3. Why is this useful?

- **6 color variants** — Primary, secondary, success, warning, danger, info
- **3 styles** — Filled, outline, subtle
- **3 sizes** — sm, md, lg
- **Pill shape** — Fully rounded option
- **Removable** — Built-in close button support
- **Interactive** — Clickable with focus-visible keyboard support
- **Groups** — Organized with flex-wrap and optional label
- **Accessible** — Proper aria-label support on remove buttons
