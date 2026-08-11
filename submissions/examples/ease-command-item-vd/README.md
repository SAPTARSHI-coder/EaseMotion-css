# Ease Command Item

## What does this do?

A reusable command palette item for displaying an action, optional icon, and keyboard shortcut.

## How is it used?

Open `demo.html` directly in any modern browser.

Example:

```html
<div class="command-item">
    <div class="command-main">
        <span class="command-icon">⌕</span>
        <span class="command-label">Search files</span>
    </div>

    <kbd>⌘ K</kbd>
</div>
```

### Features

- Action label
- Optional icon
- Keyboard shortcut display
- Hover state
- Smooth hover animation
- Responsive layout
- Pure CSS
- No JavaScript required

## Why is it useful?

Command items are commonly used in command palettes, developer tools, productivity applications, and keyboard-driven interfaces.

This component provides a compact and reusable command item pattern with clear keyboard shortcut visibility and subtle hover feedback while following the animation-first philosophy of EaseMotion CSS.