# Tooltip Component

A CSS-only tooltip that fades in on hover. Supports four directions — no JavaScript required.

## Usage

Add `ease-tooltip` and `data-tip="your message"` to any element:

```html
<!-- Top (default) -->
<button class="ease-tooltip" data-tip="Hello!">Hover me</button>

<!-- Bottom -->
<button class="ease-tooltip ease-tooltip-bottom" data-tip="Below">Hover me</button>

<!-- Left -->
<button class="ease-tooltip ease-tooltip-left" data-tip="Left">Hover me</button>

<!-- Right -->
<button class="ease-tooltip ease-tooltip-right" data-tip="Right">Hover me</button>
```

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Full working demo, opens directly in browser |
| `style.css` | Tooltip styles with all four directions |
| `README.md` | This file |

## Why it fits EaseMotion CSS

- **Human-readable** — class name describes behavior instantly
- **Animation-first** — smooth fade-in built in via CSS transition
- **Composable** — direction modifier stacks naturally on the base class
- **Zero dependencies** — pure CSS, no JavaScript