# Cards: Missing accent-info and accent-secondary variants

**Issue:** #5946
**File:** `components/cards.css`

## Problem

Cards has `.ease-card-accent` (primary), `.ease-card-accent-success`, `.ease-card-accent-danger`, and `.ease-card-accent-warning` but no `.ease-card-accent-info` or `.ease-card-accent-secondary`.

## Expected

```css
.ease-card-accent-info      { border-left: 4px solid var(--ease-color-info, #3b82f6); }
.ease-card-accent-secondary { border-left: 4px solid var(--ease-color-secondary, #8b5cf6); }
```

## Demo

Open `demo.html` to see which accent variants are available and which are missing.
