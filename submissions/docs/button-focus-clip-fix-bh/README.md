# ease-button Focus Outline Clipping Fix

## Bug Description

The `ease-button` component has its focus ring (outline or box-shadow) clipped when placed inside a container with `overflow: hidden` or `overflow: auto`.

## The Problem

```css
/* Original button focus styles */
.ease-button:focus-visible {
  outline: 2px solid var(--ease-color-primary);
  outline-offset: 2px; /* Gets clipped by overflow: hidden parent */
}
```

When the button is inside a container with `overflow: hidden`, the focus ring extends outside the button's bounding box and gets clipped.

## Solutions

### Solution 1: Inset Box-Shadow (Recommended)

Use `box-shadow` with inset instead of `outline`:

```css
.ease-button:focus-visible {
  /* Inset shadow doesn't extend outside the element */
  box-shadow: inset 0 0 0 2px var(--ease-color-primary);
  outline: none; /* Remove outline to avoid clipping */
}
```

### Solution 2: Negative Outline Offset (Alternative)

```css
.ease-button:focus-visible {
  outline: 2px solid var(--ease-color-primary);
  outline-offset: -4px; /* Negative offset pulls ring inward */
}
```

### Solution 3: Pseudo-Element Focus Ring

```css
.ease-button:focus-visible::after {
  content: '';
  position: absolute;
  inset: -4px;
  border: 2px solid var(--ease-color-primary);
  border-radius: inherit;
  pointer-events: none;
}
```

## Recommended Fix for core/button.css

Replace the current focus styles:

```css
/* BEFORE (problematic) */
.ease-button:focus-visible {
  outline: 2px solid var(--ease-color-primary);
  outline-offset: 2px;
}

/* AFTER (fixed) */
.ease-button:focus-visible {
  box-shadow: inset 0 0 0 2px var(--ease-color-primary);
  outline: none;
}
```

## Files Affected

| File | Lines | Change |
|------|-------|--------|
| `core/button.css` | ~120-130 | Replace outline with inset box-shadow |

## Testing Checklist

- [ ] Button in normal container shows focus ring
- [ ] Button in `overflow: hidden` container shows focus ring
- [ ] Button in `overflow: auto` container shows focus ring
- [ ] Focus is visible for keyboard navigation
- [ ] No visual regression on existing button styles
- [ ] Works with all button variants (primary, secondary, etc.)
