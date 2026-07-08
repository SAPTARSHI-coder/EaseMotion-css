# Scroll Reveal Motion Guard

A demo showing scroll-driven reveal animation WITHOUT reduced-motion guard (the bug) vs WITH a proper guard.

---

## What does this show?

Issue [#5742](https://github.com/anomalyco/easemotion/issues/5742) identified that the ease-scroll-reveal component does not respect `prefers-reduced-motion`. Users who prefer reduced motion still see intrusive scroll-triggered reveal animations.

### The problem

```css
.ease-scroll-reveal {
  animation: fadeSlideUp 0.6s ease-out;
  animation-timeline: view();
}
```

No `@media (prefers-reduced-motion: reduce)` guard, so the animation plays regardless.

### The fix

```css
.ease-scroll-reveal {
  animation: fadeSlideUp 0.6s ease-out;
  animation-timeline: view();
}

@media (prefers-reduced-motion: reduce) {
  .ease-scroll-reveal {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
```

---

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Before/after comparison of reduced-motion guard |
| `style.css` | Demo styles with and without guard |
| `README.md` | This file |
