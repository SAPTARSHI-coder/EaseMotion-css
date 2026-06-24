# CountUp Houdini Fallback

A demo showing CSS `@property` (Houdini API) count-up animation and a graceful fallback for browsers that don't support it (Firefox, Safari).

---

## What does this show?

Issue [#5739](https://github.com/anomalyco/easemotion/issues/5739) tracks adding a fallback for CSS count-up animations that rely on the Houdini `@property` API. While Chrome-based browsers support `@property` for animating custom properties, Firefox and Safari do not, causing the count-up to fail silently.

### With Houdini support

```css
@property --num {
  syntax: '<integer>';
  initial-value: 0;
  inherits: false;
}

.counter { counter-reset: num var(--num); }
```

### Fallback for non-supporting browsers

```css
@supports (--num: 0) {
  /* Houdini-aware code */
}

@supports not (--num: 0) {
  /* JS-based or static fallback */
}
```

---

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Count-up with fallback detection and graceful degradation |
| `style.css` | Count-up styles and cross-browser fallback logic |
| `README.md` | This file — documentation and issue link |
