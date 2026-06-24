# ease-typewriter

Typewriter text reveal animation using CSS steps() and width keyframes. Zero JavaScript required.

## Usage

```html
<p class="ease-typewriter" style="--ease-typewriter-steps: 13;">Hello, World!</p>
```

## Variants

| Class | Description |
|---|---|
| `ease-typewriter` | Default one-shot typewriter reveal |
| `ease-typewriter-loop` | Types and deletes infinitely |
| `ease-typewriter-no-cursor` | Reveal without cursor |
| `ease-typewriter-cursor-only` | Blinking cursor only |
| `ease-typewriter-fast` | Fast 800ms reveal |
| `ease-typewriter-slow` | Slow 4s reveal |
| `ease-typewriter-cursor-primary` | Indigo cursor |
| `ease-typewriter-cursor-white` | White cursor |
| `ease-typewriter-cursor-green` | Green cursor |
| `ease-delay-100` | 100ms start delay |
| `ease-delay-200` | 200ms start delay |
| `ease-delay-300` | 300ms start delay |
| `ease-delay-500` | 500ms start delay |

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ease-typewriter-steps` | 30 | Set to character count of your text |

## Notes

- Set `--ease-typewriter-steps` to match your text length for smooth stepping
- Use delay variants for staggered multi-line effects
- Works best on monospace fonts

## Submission

- **Author:** sudha09-git
- **Issue:** #3815
- **Files:** style.css, demo.html, README.md
