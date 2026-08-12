# Timing Universal Selector

A demo showing why using the `*` universal selector for reduced-motion override breaks third-party animations and how a scoped class-based approach is better.

---

## What does this show?

Issue [#5738](https://github.com/anomalyco/easemotion/issues/5738) identified that using `* { animation: none !important; }` under `prefers-reduced-motion` is overly aggressive — it kills animations on embedded widgets, third-party embeds, and any external content.

### Before (broken)

```css
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
}
```

### After (fixed)

```css
@media (prefers-reduced-motion: reduce) {
  .ease-animate { animation: none !important; transition: none !important; }
}
```

Applying the override only to components with the `.ease-animate` class preserves animations outside of EaseMotion's control.

---

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Side-by-side comparison of universal vs scoped approach |
| `style.css` | Demo styles and simulation of third-party content |
| `README.md` | This file — documentation and issue link |
