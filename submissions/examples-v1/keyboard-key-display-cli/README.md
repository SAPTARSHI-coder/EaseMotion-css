# Keyboard Key Display Component

## What does this do?
Provides a beautifully styled component for `<kbd>` elements. This is commonly used in documentation, SaaS platforms, and tooltips to indicate keyboard shortcuts or required user input.

## How is it used?

Apply the `.ease-kbd` class to a `<kbd>` element. For sequences, you can wrap them in an `.ease-kbd-group`.

```html
<!-- Single Key -->
Press <kbd class="ease-kbd">/</kbd> to search.

<!-- Key Sequence / Combo -->
<span class="ease-kbd-group">
  <kbd class="ease-kbd">Ctrl</kbd> + <kbd class="ease-kbd">C</kbd>
</span>

<!-- Interactive / Clickable Key -->
<kbd class="ease-kbd ease-kbd-active">Click Me</kbd>
```

### Available Classes
| Class | Effect |
|-------|--------|
| `.ease-kbd` | Base 3D-styled key |
| `.ease-kbd-group` | Flex wrapper for aligning multiple keys with spacing |
| `.ease-kbd-active` | Adds an `:active` state that simulates pressing the key down |

## Why is it useful?
It provides a standardized, framework-consistent way to display technical instructions. It includes a subtle bottom box-shadow to give a physical 3D keyboard feel, fully supports Dark Mode using existing EaseMotion design tokens, and correctly falls back to system outlines in forced-colors (High Contrast) modes.
