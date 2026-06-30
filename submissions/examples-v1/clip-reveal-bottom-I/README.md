# Hover Clip-Reveal Bottom

Content reveals upward from bottom via clip-path on hover — clip-path: inset(100% 0 0 0) → inset(0).

## Files

- demo.html - Interactive demo
- style.css - Clip-reveal styles
- README.md - Documentation

## Classes

| Class                                  | Speed | Easing   |
| -------------------------------------- | ----- | -------- |
| `ease-hover-clip-reveal-bottom`        | 0.4s  | Ease Out |
| `ease-hover-clip-reveal-bottom-fast`   | 0.2s  | Ease Out |
| `ease-hover-clip-reveal-bottom-slow`   | 0.8s  | Ease Out |
| `ease-hover-clip-reveal-bottom-bounce` | 0.5s  | Bounce   |
| `ease-hover-clip-reveal-bottom-spring` | 0.5s  | Spring   |

## Usage

```html
<div class="ease-hover-clip-reveal-bottom">
  <div class="reveal-content">
    <h3>Title</h3>
    <p>Content that reveals from bottom</p>
  </div>
</div>
```
