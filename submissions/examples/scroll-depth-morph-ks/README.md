# Scroll-Driven Depth Morph

## What does this do?

Cards that build visual depth illusion as you scroll — progressive multi-layer box-shadow intensifies, scale approaches the viewer, and blur clears to sharp focus. Three distinct depth techniques powered by `@property`-registered custom properties driven by `animation-timeline: view()`. The illusion of depth responds to scroll position — zero JavaScript.

## How is it used?

```html
<!-- Cards with progressive shadow lift -->
<article class="depth-card shadow-lift">...</article>

<!-- Cards that scale toward the reader -->
<article class="depth-card scale-approach">...</article>

<!-- Cards that sharpen from blur to focus -->
<article class="depth-card blur-clear">...</article>
```

Example: progressive shadow

```css
@property --depth-shadow-blur {
  syntax: '<length>';
  inherits: true;
  initial-value: 0px;
}

.shadow-lift {
  box-shadow: 0 var(--depth-shadow-blur) calc(var(--depth-shadow-blur) * 2) rgba(0,0,0, var(--depth-shadow-alpha));
  animation: shadow-lift 1s ease-out both;
  animation-timeline: view();
  animation-range: entry 8% cover 45%;
}

@keyframes shadow-lift {
  from { --depth-shadow-blur: 0px; --depth-shadow-alpha: 0; }
  to   { --depth-shadow-blur: 24px; --depth-shadow-alpha: 0.35; }
}
```

## Why is it useful?

This is the first EaseMotion submission to animate visual depth properties (`box-shadow`, `filter: blur()`, `transform: scale()`) on cards using scroll-driven custom properties. While hover-based shadow effects exist (1 result), nobody has used `@property` + `animation-timeline` to create progressive depth illusions that respond to scroll position.

Visual depth on hover is common, but depth that builds with scroll is genuinely novel — it creates a spatial reading experience where content feels closer to the viewer as they engage with it. The combination of shadow-darkening, card-scaling, and blur-clearing creates a compelling illusion that standard CSS transitions alone cannot achieve.

### Three techniques

1. **Shadow lift** — multi-layer box-shadow intensifies from flat to deep (0 → 24px blur, 0 → 0.35 alpha)
2. **Scale approach** — card scales from 0.94 to 1.04, appearing to float forward
3. **Blur clear** — filter: blur() transitions from 4px to 0, creating a cinematic focus pull

### Accessibility

- `prefers-reduced-motion`: static flat cards
- `forced-colors`: removes shadows, preserves borders
- `prefers-color-scheme`: adjusted shadow colors for light mode
- Print: flat cards with borders, no animations
- Mobile: single-column responsive grid
