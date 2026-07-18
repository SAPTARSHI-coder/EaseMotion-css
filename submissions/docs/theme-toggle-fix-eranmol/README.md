# Theme Toggle Visibility Fix — Issue #47290

## What does it do?

Fixes the low visibility of the moon icon in the theme toggle button when the site is in light mode. The icon now uses theme-aware colors so it remains clearly visible in both dark and light modes.

## How is it used?

Add the following CSS rules to `docs/docs.css` after the existing `.theme-toggle-btn .moon-icon` block (around line 252):

```css
/* Light mode: dark icon for visibility on light background */
[data-theme="light"] .theme-toggle-btn .moon-icon {
  color: #1e293b;
}

/* Dark mode: light icon for visibility on dark background */
[data-theme="dark"] .theme-toggle-btn .moon-icon {
  color: #e2e8f0;
}
```

Also update the SVG icons in the HTML to use `stroke="currentColor"` so they inherit the button's color.

## Why is it useful?

- **Accessibility**: Users can clearly see the theme toggle in both modes.
- **Consistency**: The icon now matches the other navigation elements.
- **UX**: Users won't miss the theme toggle when browsing in light mode.
