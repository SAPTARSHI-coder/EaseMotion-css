# Hero Full-Height Fix

> Issue: [#17302](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/17302)

## 1. What does this do?

Fixes the bug where the hero section does not cover the full viewport height — eliminating the visible line/break and preventing the next section from peeking through above the fold, on both desktop and mobile devices.

## 2. How is it used?

Apply the `hero` class to your top-level landing section. The hero will automatically fill the entire viewport:

```html
<section class="hero">
  <div class="hero__content">
    <h1 class="hero__title">Your Headline</h1>
    <p class="hero__subtitle">Your supporting text.</p>
    <a href="#next" class="hero__cta">Call to Action</a>
  </div>
</section>

<section id="next" class="buttons-section">
  <!-- Next section sits cleanly below, no overlap -->
</section>
```

### Key CSS Properties That Fix the Bug

| Property                | Purpose                                                |
| ----------------------- | ------------------------------------------------------ |
| `min-height: 100vh`     | Legacy fallback — full viewport height                 |
| `min-height: 100dvh`    | Modern dynamic viewport (mobile-safe, accounts for UI) |
| `display: flex`         | Vertical centering without overflow issues             |
| `width: 100%`           | Prevents horizontal gaps                               |
| Global `margin: 0` reset | Removes default body margin that creates the gap       |

## 3. Why is it useful?

This fix fits EaseMotion CSS's **clean, modern, mobile-first design philosophy**:

- **Pure CSS, no JavaScript** — uses standard viewport units and flexbox.
- **Mobile-safe** — uses `100dvh` (dynamic viewport height) which adapts to mobile browser UI (address bar, toolbars), preventing the common iOS Safari overflow bug.
- **Backward compatible** — `100vh` fallback ensures older browsers still render correctly.
- **No layout shift** — flex centering removes the need for fragile padding/margin hacks.
- **Accessibility-friendly** — respects the `prefers-reduced-motion` preference.
- **Composable** — works seamlessly with any subsequent section (buttons, cards, content).

It directly resolves a common landing page bug that affects perceived polish and visual flow.

## Demo

Open `demo.html` directly in any modern browser. You'll see:

1. A full-height hero section (no visible line/break at the bottom)
2. The buttons section sits cleanly below, only visible after scrolling
3. A side-by-side comparison showing the **buggy code vs. the fixed code**

## Bug Reproduction (Before the Fix)

```css
/* ❌ Buggy code that caused the issue */
.hero {
  height: 80vh;       /* doesn't fill viewport */
  padding-bottom: 0;  /* leaves visible gap */
}
```

```css
/* ✅ Fixed code */
.hero {
  min-height: 100vh;
  min-height: 100dvh; /* mobile-safe */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
```

---

**Author:** [@soumyasekharshee265-ux](https://github.com/soumyasekharshee265-ux)