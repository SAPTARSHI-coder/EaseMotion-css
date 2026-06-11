# Fix #3966: Fix #3966: .ease-reveal add will-change: transform,opacity for scroll performance

### Proposed Change
`.ease-reveal` transitions opacity and transform on scroll without `will-change`, causing layout thrash on the first scroll-triggered reveal of each element on the page.
```css
.ease-reveal { opacity: 0; transform: translateY(24px); will-change: transform, opacity; transition: opacity var(--ease-speed-medium) var(--ease-ease), transform var(--ease-speed-medium) var(--ease-ease); }
.ease-reveal.ease-reveal-active { opacity: 1; transform: none; will-change: auto; }
```
