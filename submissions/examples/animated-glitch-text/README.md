# ease-glitch-text

Pure-CSS RGB-split glitch effect on hover — two color-shifted duplicate layers jitter and clip against the base text.

## Usage
1. Include `style.css`.
2. Add markup with matching text in both the element and `data-text`:
   \`\`\`html
   <h1 class="glitch" data-text="YOUR TEXT">YOUR TEXT</h1>
   \`\`\`

## Customization
- Colors on `::before`/`::after` (`#ec4899`, `#22d3ee`) — classic glitch uses red/cyan or magenta/cyan splits.
- `clip-path` polygons split which horizontal band each duplicate layer is visible in — adjust the percentages for a different slice pattern.
- Animation duration/`steps()` count controls how "choppy" vs smooth the jitter feels; `steps()` (vs. a smooth easing) is what gives it the digital stutter look.

## Notes
- `content: attr(data-text)` duplicates the text without needing to repeat it in markup, keeping `::before`/`::after` in sync with the visible heading automatically.
- `clip-path` restricts each duplicate to a horizontal slice, so they don't fully overlap the base text — this is what sells the "torn scanline" look rather than just a blurry double image.