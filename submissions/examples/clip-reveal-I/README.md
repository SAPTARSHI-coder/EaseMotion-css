 
# Hover Clip-Reveal Top

Content reveals downward from top via clip-path on hover — clip-path: inset(0 0 100% 0) → inset(0).

## Files

- demo.html - Interactive demo
- style.css - Clip-reveal styles
- README.md - Documentation

## Classes

| Class | Speed | Easing |
|-------|-------|--------|
| `ease-hover-clip-reveal-top` | 0.4s | Ease Out |
| `ease-hover-clip-reveal-top-fast` | 0.2s | Ease Out |
| `ease-hover-clip-reveal-top-slow` | 0.8s | Ease Out |
| `ease-hover-clip-reveal-top-bounce` | 0.5s | Bounce |
| `ease-hover-clip-reveal-top-spring` | 0.5s | Spring |

## Usage

```html
<div class="ease-hover-clip-reveal-top">
    <div class="reveal-content">
        <h3>Title</h3>
        <p>Content that reveals from top</p>
    </div>
</div>