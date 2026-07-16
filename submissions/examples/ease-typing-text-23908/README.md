# CSS-Only Typewriter Text

## What does this do?

A pure CSS typewriter animation that types out text character-by-character using `@keyframes` with `steps()`, then stops. Includes a blinking caret cursor. No JavaScript needed.

## How is it used?

```html
<span class="ease-typing-text">Your text here</span>
```

| Modifier | Effect |
|----------|--------|
| `ease-typing-fast` | 1s duration |
| `ease-typing-slow` | 4s duration |
| `ease-typing-cursor-blue` | Blue cursor |
| `ease-typing-cursor-green` | Green cursor |
| `ease-typing-cursor-red` | Red cursor |
| `ease-typing-cursor-none` | No cursor |

Multi-line:
```html
<span class="ease-typing-multiline">
  <span class="ease-typing-line">Line one</span>
  <span class="ease-typing-line" style="--ease-typing-line-index: 1">Line two</span>
</span>
```

Customize via CSS variables: `--ease-typing-speed`, `--ease-typing-cursor-color`, `--ease-typing-steps`.

## Why is it useful?

Provides a lightweight typewriter effect for hero sections and landing pages without JavaScript. Respects `prefers-reduced-motion` and integrates with EaseMotion CSS design tokens.
