# Feature #6013: Add ease-hover-dim and ease-hover-bright effects

## Description
Add hover dim/bright effects using CSS `filter: brightness()` to complement existing hover classes (grow, shrink, glow, lift, shimmer).

## Proposed Implementation
Add to `core/animations.css`:
```css
.ease-hover-dim { transition: filter var(--ease-speed-medium) var(--ease-ease); }
.ease-hover-dim:hover { filter: brightness(0.7); }
.ease-hover-bright { transition: filter var(--ease-speed-medium) var(--ease-ease); }
.ease-hover-bright:hover { filter: brightness(1.3); }
```

## Files
- `style.css` — dim/bright classes
- `demo.html` — interactive demo
