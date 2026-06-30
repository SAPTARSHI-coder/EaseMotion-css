# Animated List Group — Issue #7418

## Overview

List group component with staggered entrance animation, hover accent border, active state, badges, icons, and three variants.

## Variants

| Variant  | Class                       | Description                     |
| -------- | --------------------------- | ------------------------------- |
| Basic    | `.ease-list-group`          | Solid border container          |
| Bordered | `.ease-list-group-bordered` | Each item individually bordered |
| Flush    | `.ease-list-group-flush`    | No outer border                 |

## States

| State   | Behavior                                               |
| ------- | ------------------------------------------------------ |
| Hover   | Background tint + left primary border accent           |
| Active  | Primary background tint + bold text                    |
| Stagger | Each item fades in with incremental delay (50ms steps) |

## Usage

```html
<div class="ease-list-group">
  <div class="ease-list-item ease-list-item-action active">
    <span class="ease-list-item-icon">📄</span>
    <div class="ease-list-item-content">
      <div class="ease-list-item-title">Documents</div>
      <div class="ease-list-item-text">15 files</div>
    </div>
    <span class="ease-list-item-badge">12</span>
  </div>
</div>
```

## Files

- `demo.html` — Three variants with icons, badges, and text
- `style.css` — List group layout, animations, variants
- `README.md` — This documentation
