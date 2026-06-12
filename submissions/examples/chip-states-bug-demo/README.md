# Chip: Missing interactive states (:active)

**Issue:** `#5872`  
**File:** `components/chip.css`

## Problem

The chip component has `:hover`, `:focus-visible`, `:checked`, and `:disabled` states but no `:active` state. An `:active` state provides visual feedback during click/press.

## Expected

```css
.ease-chip:active {
  transform: translateY(0);
  box-shadow: 0 1px 4px rgba(0,0,0,0.15);
}
```

## Demo

Open `demo.html` and click a chip to see there's no `:active` press feedback.
