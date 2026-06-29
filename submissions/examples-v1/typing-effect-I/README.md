 
# CSS Typing Effect

CSS-only typing animation — character by character, with blinking cursor.

## Files

| File | Description |
|------|-------------|
| 📄 [demo.html](./demo.html) | Interactive demo |
| 🎨 [style.css](./style.css) | Typing effect styles |
| 📖 [README.md](./README.md) | Documentation |

## Classes

| Class | Speed | Cursor |
|-------|-------|--------|
| `ease-typing` | 2s | Blinking |
| `ease-typing-fast` | 1s | Blinking |
| `ease-typing-slow` | 4s | Blinking |
| `ease-typing-hover` | 1.5s (on hover) | Blinking |
| `ease-typing-blink` | - | Blinking only |
| `ease-typing-no-cursor` | 2s | None |
| `ease-typing-delay-1/2/3` | 2s + delay | Blinking |

## Usage

```html
<!-- Basic typing -->
<div class="ease-typing">Hello, World!</div>

<!-- Different speeds -->
<div class="ease-typing-fast">Fast typing</div>
<div class="ease-typing-slow">Slow typing</div>

<!-- Hover to type -->
<div class="ease-typing-hover">Hover to type</div>