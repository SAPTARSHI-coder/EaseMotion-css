# Avatar Component — Issue #7420

## Overview

Avatar component with image support, initials fallback, status indicators, size variants, and stacking.

## Variants

| Variant     | Class                  | Description               |
| ----------- | ---------------------- | ------------------------- |
| Small       | `.ease-avatar-sm`      | 32×32px                   |
| Default     | `.ease-avatar`         | 48×48px                   |
| Large       | `.ease-avatar-lg`      | 64×64px                   |
| Extra Large | `.ease-avatar-xl`      | 96×96px                   |
| Rounded     | `.ease-avatar-rounded` | Square with 0.5rem radius |
| Hover       | `.ease-avatar-hover`   | Scale + ring on hover     |

## Status Indicators

| Status  | Class      | Color     |
| ------- | ---------- | --------- |
| Online  | `.online`  | `#22c55e` |
| Offline | `.offline` | `#94a3b8` |
| Away    | `.away`    | `#f59e0b` |
| Busy    | `.busy`    | `#ef4444` |

## Usage

```html
<!-- Image avatar with status -->
<div class="ease-avatar ease-avatar-hover">
  <img src="photo.jpg" alt="User" />
  <span class="ease-avatar-status online"></span>
</div>

<!-- Initials fallback -->
<div class="ease-avatar ease-avatar-lg">JD</div>

<!-- Stacked group -->
<div class="avatar-group">
  <div class="ease-avatar ease-avatar-sm">A</div>
  <div class="ease-avatar ease-avatar-sm">B</div>
</div>
```

## Files

- `demo.html` — Interactive demo with all variants
- `style.css` — Avatar component styles
- `README.md` — This documentation
