# Fix: scroll-behavior Reduced Motion Guard

### What does this do?

Documents and demonstrates the missing `prefers-reduced-motion` guard around
`scroll-behavior: smooth` in `core/base.css`, and provides the exact replacement
for the maintainer to apply.

### The problem

`core/base.css` applies `scroll-behavior: smooth` unconditionally on the `<html>`
element. Users who have enabled "Reduce Motion" in their OS accessibility settings
(macOS, Windows, Linux GNOME) still get smooth animated scrolling on every anchor
click and programmatic scroll call. For people with vestibular disorders, this can
cause nausea and disorientation.

WCAG 2.3.3 (Animation from Interactions) and the MDN/W3C guidance both recommend
disabling smooth scrolling when the user has expressed a reduced-motion preference.

### The fix (maintainer action on `core/base.css`)

```css
/* BEFORE — core/base.css, inside the html { … } block */
html {
  font-size: 16px;
  scroll-behavior: smooth; /* ← remove this line */
  -webkit-text-size-adjust: 100%;
}

/* AFTER — opt-in smooth scroll only when no motion preference is set */
html {
  font-size: 16px;
  -webkit-text-size-adjust: 100%;
}

@media (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth;
  }
}
```

This is an inversion of the default: instant jump for everyone (safe), smooth scroll
only when the user has not requested reduced motion.

### How is it used?

No class changes. The fix is entirely in base styles. The `demo.html` includes a
JavaScript toggle that simulates the `prefers-reduced-motion: reduce` state so the
maintainer can verify both scroll modes without changing OS settings.

### Why is it useful?

EaseMotion CSS already ships `prefers-reduced-motion` guards in `buttons.css` and
`cards.css` for hover transitions. `scroll-behavior` is the same category of
motion-sensitive property and deserves the same treatment. This fix closes the
consistency gap and brings the framework into full alignment with WCAG 2.3.3.
