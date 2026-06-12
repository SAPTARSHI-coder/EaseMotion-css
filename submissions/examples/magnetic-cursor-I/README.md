# Magnetic Cursor Hover Interaction

Magnetic hover interaction — elements move toward cursor position on hover, creating a modern interactive feel.

## Files

- demo.html - Interactive demo
- style.css - Magnetic cursor styles
- README.md - Documentation

## Classes

| Class                              | Effect                                            |
| ---------------------------------- | ------------------------------------------------- |
| `ease-magnetic-cursor`             | Moves toward cursor (scale 1.03, translateY -4px) |
| `ease-magnetic-subtle`             | Subtle pull                                       |
| `ease-magnetic-strong`             | Strong pull                                       |
| `ease-magnetic-up/down/left/right` | Directional pull                                  |
| `ease-magnetic-fast/slow`          | Speed variants                                    |

## Usage

```html
<button class="ease-magnetic-cursor">Hover Me</button>

<!-- Different intensities -->
<div class="ease-magnetic-subtle">Subtle pull</div>
<div class="ease-magnetic-strong">Strong pull</div>

<!-- Different directions -->
<div class="ease-magnetic-up">Pulls up</div>
<div class="ease-magnetic-right">Pulls right</div>
```
