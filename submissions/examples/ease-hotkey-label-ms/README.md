# Ease Hotkey Label

## What does this do?

Adds a compact rounded label for showing keyboard shortcuts beside actions.

## How is it used?

Place the hotkey label next to any command, menu item, toolbar action, or command palette row and compose the keys with inline `kbd` elements.

```html
<article class="shortcut-card">
  <span class="shortcut-action">Open command palette</span>
  <span class="shortcut-keys">
    <kbd>Ctrl</kbd>
    <span>+</span>
    <kbd>K</kbd>
  </span>
</article>
```

## Why is it useful?

It helps EaseMotion CSS present shortcuts in a polished, readable way that improves discoverability in productivity-focused interfaces.
