# Reveal MatchMedia Guard

A demo showing `window.matchMedia` usage without feature detection guard — and how to properly guard it.

---

## What does this show?

Issue [#5745](https://github.com/anomalyco/easemotion/issues/5745) identified that the scroll-reveal component calls `window.matchMedia('(prefers-reduced-motion: reduce)')` without checking whether `window.matchMedia` is available. In older browsers or certain testing environments, this can throw a ReferenceError.

### The problem

```js
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
// Throws if matchMedia is not available
```

### The fix

```js
const prefersReduced = window.matchMedia
  ? window.matchMedia('(prefers-reduced-motion: reduce)')
  : { matches: false };
```

---

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Before/after comparison of matchMedia guarding |
| `style.css` | Demo styles |
| `README.md` | This file |
