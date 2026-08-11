# ease-alert Focus Outline Clipping Fix

## Bug Description

The `ease-alert` component has its focus ring clipped when placed inside containers with `overflow: hidden`.

## Solution

Replace outline with inset box-shadow:

```css
.ease-alert:focus-visible {
  box-shadow: inset 0 0 0 2px var(--ease-color-primary);
  outline: none;
}
```

## Files Affected

| File | Lines | Change |
|------|-------|--------|
| `core/alert.css` | ~60-70 | Replace outline with inset box-shadow |

## Testing Checklist

- [ ] Alert in normal container shows focus ring
- [ ] Alert in overflow: hidden container shows focus ring
- [ ] Focus is visible for keyboard navigation
