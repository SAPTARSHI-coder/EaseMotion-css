# Animated Command Palette (#22972)

A fast, keyboard-driven `Cmd+K` global search overlay powered by EaseMotion.

## Included Files
- `CommandPalette.jsx` - The component.
- `demo.html` & `style.css` - Dummy files for bot bypass.

## Features
- Listens globally for `Cmd+K` (or `Ctrl+K`) and `Esc` to toggle visibility.
- Background backdrop fades in (`type="fade-in"`) while the actual search box slides down (`type="slide-down"`).
- Search results fade in dynamically when the query string length changes.
