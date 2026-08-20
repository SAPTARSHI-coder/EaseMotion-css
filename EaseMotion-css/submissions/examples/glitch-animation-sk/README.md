# Digital Glitch Animation (ease-glitch)

A high-energy digital distortion effect that mimics screen corruption, RGB channel splitting, and signal interference. Perfect for cyberpunk aesthetics, error states, and tech-focused designs.

## 1. What does this do?
It creates a "glitch" effect by duplicating the element's content using pseudo-elements, applying RGB-themed `text-shadow` (Cyan and Magenta), and rapidly flickering their visibility and position using `clip-path` and `transform`.

## 2. How is it used?
Apply the `.glitch` class along with a variant class (`.glitch-loop` or `.glitch-hover`). You must also provide a `data-text` attribute matching the element's content for the RGB split to work.

```html
<!-- Continuous Loop -->
<h1 class="glitch glitch-loop" data-text="SYSTEM ERROR">SYSTEM ERROR</h1>

<!-- Trigger on Hover -->
<button class="glitch glitch-hover" data-text="HOVER ME">HOVER ME</button>
```

### Customization
You can tune the effect using CSS variables:
- `--glitch-speed`: Duration of the flicker cycle (default: `0.2s`).
- `--glitch-intensity`: Offset distance for the color split (default: `2px`).
- `--glitch-color-1`: Primary glitch color (default: `#ff00c1`).
- `--glitch-color-2`: Secondary glitch color (default: `#00fff9`).

## 3. Why is it useful?
It introduces a unique "expressive motion" category to EaseMotion CSS. While the framework excels at smooth transitions, the glitch effect provides a necessary tool for "broken" or "raw" digital aesthetics, which are popular in modern web design for landing pages, games, and creative portfolios.

### Accessibility
The animation respects the `prefers-reduced-motion` media query and will automatically disable the flickering and color splitting if the user has requested reduced motion.
