# ease-typewriter

Pure CSS typewriter text reveal animation using `steps()` and `width` keyframes. Zero JavaScript required.

## Usage

```html
<p class="ease-typewriter" style="--ease-type-chars: 14;">Hello, World!</p>
```

## Variants

| Class | Description |
|---|---|
| `ease-typewriter` | Default typewriter with cursor blink |
| `ease-typewriter-no-cursor` | No blinking cursor |
| `ease-typewriter-fast` | Fast typing speed |
| `ease-typewriter-slow` | Slow typing speed |
| `ease-typewriter-mono` | Monospace font (terminal style) |
| `ease-delay-100` to `ease-delay-500` | Staggered start delays |

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ease-type-chars` | `20` | Number of characters to reveal |

## Submission

- **Author:** sudha09-git
- **Issue:** #2253
- **Files:** `style.css`, `demo.html`
