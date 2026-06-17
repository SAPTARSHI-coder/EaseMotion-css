# Responsive Padding/Margin Breakpoint Variants

Adds responsive breakpoint variants for all padding and margin utilities — enabling spacing changes at sm (640px), md (768px), lg (1024px), and xl (1280px) breakpoints.

## Problem

The framework defines responsive breakpoints for `display`, `flex`, and `grid` (e.g., `ease-md-flex`, `ease-lg-grid-cols-2`) but not for `padding` or `margin`. Users wanting `ease-md-padding-8` on tablets have no corresponding class and must write custom `@media` CSS.

## Proposed CSS to Add to `core/utilities.css`

Insert these blocks inside the existing `@media (min-width: ...)` sections:

### sm (≥640px) — inside `@media (min-width: 640px)`

| Class | CSS |
|-------|-----|
| `.ease-sm-padding-{1,2,3,4,6,8,10,12}` | `padding: var(--ease-space-N) !important` |
| `.ease-sm-pt-4`, `.ease-sm-pr-4`, `.ease-sm-pb-4`, `.ease-sm-pl-4` | directional padding |
| `.ease-sm-px-4`, `.ease-sm-py-4`, `.ease-sm-px-8`, `.ease-sm-py-8` | axis padding |
| `.ease-sm-margin-{1,2,3,4,6,8}`, `.ease-sm-margin-auto` | margin |
| `.ease-sm-mx-auto`, `.ease-sm-my-{4,8}` | axis margin |
| `.ease-sm-mt-4`, `.ease-sm-mr-4`, `.ease-sm-mb-4`, `.ease-sm-ml-4` | directional margin |

### md (≥768px) — inside `@media (min-width: 768px)`

Same set prefixed `ease-md-` (e.g., `.ease-md-padding-8`, `.ease-md-mx-auto`).

### lg (≥1024px) — inside `@media (min-width: 1024px)`

Same set prefixed `ease-lg-` (e.g., `.ease-lg-padding-12`, `.ease-lg-margin-4`).

### xl (≥1280px) — inside `@media (min-width: 1280px)`

Same set prefixed `ease-xl-` (e.g., `.ease-xl-padding-6`, `.ease-xl-my-8`).

## Usage

```html
<!-- Responsive padding: tight on mobile, spacious on desktop -->
<div class="ease-padding-4 ease-md-padding-8 ease-lg-padding-12">
  <h2>Responsive Section</h2>
  <p>Padding grows at each breakpoint.</p>
</div>

<!-- Responsive margin: centered on md+ -->
<div class="ease-margin-4 ease-md-mx-auto ease-md-margin-8">
  Centered card on tablet+
</div>

<!-- Responsive axis: horizontal padding on md+ -->
<div class="ease-padding-4 ease-md-px-8 ease-lg-px-12">
  Content with responsive horizontal padding
</div>
```

## Benefits
- Mirrors existing responsive naming pattern: `ease-{bp}-{utility}-{value}`
- Uses same `!important` convention as all other EaseMotion utilities
- No duplication of breakpoint values (uses `--ease-bp-sm: 640px` etc.)
- Gaps in the current spacing API (e.g., no `ease-pt-8` base class) are not extended — only existing base classes get responsive variants

## Files
- `README.md` — this file
- `demo.html` — demo page showing responsive behavior
- `style.css` — proposed CSS additions to `core/utilities.css`
