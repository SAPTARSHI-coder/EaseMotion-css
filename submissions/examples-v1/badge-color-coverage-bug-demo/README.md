# Badge: Missing color variants (warning, info, secondary)

**Issue:** `#5871`  
**File:** `components/badges.css`

## Problem

`.ease-badge` only has `primary` (default), `danger`, and `success` color variants. Missing:

- `ease-badge-warning`
- `ease-badge-info`
- `ease-badge-secondary`

## Expected

Add the missing variant classes:

```css
.ease-badge-warning {
  background-color: var(--ease-color-warning);
}
.ease-badge-info {
  background-color: var(--ease-color-info);
}
.ease-badge-secondary {
  background-color: var(--ease-color-secondary);
}
```

## Demo

Open `demo.html` to see which badge colors are available (primary, danger, success) and which are missing (warning, info, secondary).
