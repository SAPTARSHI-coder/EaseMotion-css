# Fix #3966: Fix #3966: ease-reveal add will-change for scroll performance

`.ease-reveal` transitions opacity+transform on scroll without `will-change`, causing layout thrash on first reveal of each element.
```css
.ease-reveal { opacity: 0; transform: translateY(24px); will-change: transform, opacity; transition: opacity var(--ease-speed-medium) var(--ease-ease), transform var(--ease-speed-medium) var(--ease-ease); }
.ease-reveal.ease-reveal-active { opacity: 1; transform: none; will-change: auto; }
```
