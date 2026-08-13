# Success Badge Pulse Glow Color Override (Issue #4777)

## What does this do?
Fixes the pulsing shadow animation color for the success badge variant (`.ease-badge-success`). It was previously flashing with the primary theme color (indigo/purple) because the override rule for success was missing.

## Affected File (maintainer will copy to `components/badges.css`)
Please copy the rule inside `style.css` to the end of `components/badges.css`:
```css
  .em-badge-success.em-badge-pulse::after,
  .ease-badge-success.ease-badge-pulse::after {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
  }
```
