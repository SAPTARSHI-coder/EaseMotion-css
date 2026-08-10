# ease-avatar Focus Outline Clipping Fix

## Bug Description

The `ease-avatar` component has its focus ring clipped when placed inside containers with `overflow: hidden` or `overflow: auto`.

## The Problem

```css
/* Original avatar focus styles */
.ease-avatar:focus-visible {
  outline: 2px solid var(--ease-color-primary);
  outline-offset: 2px; /* Gets clipped by overflow: hidden parent */
}
```

## Solution: Inset Box-Shadow

Replace outline with inset box-shadow:

```css
.ease-avatar:focus-visible {
  box-shadow: inset 0 0 0 2px var(--ease-color-primary);
  outline: none;
}
```

## Files Affected

| File | Lines | Change |
|------|-------|--------|
| `core/avatar.css` | ~80-90 | Replace outline with inset box-shadow |

## Testing Checklist

- [ ] Avatar in normal container shows focus ring
- [ ] Avatar in `overflow: hidden` container shows focus ring
- [ ] Avatar in `overflow: auto` container shows focus ring
- [ ] Focus is visible for keyboard navigation
- [ ] No visual regression on existing avatar styles
