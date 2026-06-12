# Outlined Chip Dark Mode Contrast Fix

## What does this do?
Improves the visibility of the outlined chip component in dark mode by overriding its border color to a color with a WCAG AA-compliant contrast ratio of at least 3:1 against dark backgrounds.

## How is it used?
Apply the `.ease-chip-outlined` modifier alongside the `.ease-chip` base class on a label, span, or button element:
```html
<span class="ease-chip ease-chip-outlined">Label</span>
```

## Why is it useful?
It ensures readable and accessible user interface boundaries for outlined chips in dark mode, preventing the border from disappearing against dark backgrounds and maintaining visual consistency with light mode.

## Proposed Core Changes (to `components/chip.css`)
In `components/chip.css`, add the base style for `.ease-chip-outlined`:
```css
/* ── Outlined Variant ───────────────────────────────────────── */
.ease-chip-outlined {
  background-color: transparent;
  border-color: var(--ease-color-neutral-300, #cbd5e1);
}
```

And in the dark mode media query:
```css
  .ease-chip-outlined {
    border-color: var(--ease-color-neutral-500, #64748b);
  }
```
