# Theme Toggle Button Visibility Fix

A fix for the poorly visible theme toggle button in the navbar, ensuring clear contrast and interaction states in both light and dark modes.

## What does this do?
Fixes the theme toggle button in the navbar so it is clearly visible, accessible, and interactive in both light and dark themes.

## How is it used?
Add the `.theme-toggle` class to your navbar button:

```html
<button class="theme-toggle" aria-label="Toggle theme">
  <span class="toggle-icon">🌙</span>
  <span class="toggle-label">Dark</span>
</button>
```

Toggle `.dark` class on `<body>` to switch themes.

## Why is it useful?
The original toggle button blended into the navbar background, making it invisible to users. This fix adds:
- A clear `2px solid` border using the brand color
- High contrast background in both light and dark modes
- Visible hover state with color fill and lift effect
- Focus ring for keyboard accessibility
- Smooth transitions between states

Fixes #35251
