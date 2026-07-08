# Avatar Group Dark Theme Adaptability Fix

## Problem

In `components/avatar.css`, the borders of overlapping avatars (`.ease-avatar-group .ease-avatar`, `.ease-avatar-group-item`) and the background/borders of the count badge (`.ease-avatar-group-count`) were hardcoded to pure white (`#fff`/`white`) and a light grey background (`#e2e8f0`):

```css
.ease-avatar-group .ease-avatar {
  border: 2px solid white;
}
.ease-avatar-group-count {
  background: #e2e8f0;
  color: #475569;
  border: 2px solid white;
}
.ease-avatar-group-item {
  border: 2px solid #fff;
}
```

This caused:

1. **Harsh Visual Contrast**: In dark theme, having a pure white border around overlapping avatars is visually jarring and breaks the premium dark theme aesthetics.
2. **Inconsistent UI**: The borders do not blend into the page or surface backgrounds when theme switches.
3. **No Badge Adaptability**: The count badge (`.ease-avatar-group-count`) remains light gray with dark text in dark mode instead of properly adapting.

## Solution

We replaced the hardcoded borders and count badge values with theme-aware CSS custom properties (`var(--ease-color-bg)` and `var(--ease-color-surface)`), ensuring they blend cleanly in both light and dark themes.

- Overlapping borders use `var(--ease-color-bg, #fff)` to automatically match the active background theme color.
- Count badge adapts with `var(--ease-color-surface)` and `var(--ease-color-text)` using `[data-theme]` attributes and prefers-color-scheme media query guards.

## Files Included

- `demo.html` — Interactive demonstration showcasing the avatar group adapting properly on theme toggle.
- `style.css` — CSS overrides providing proper theme selector priority.
