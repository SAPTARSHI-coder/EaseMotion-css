# Fix: .ease-sticky Configurable Top Offset

### What does this do?

Replaces the hardcoded `top: 0` in `.ease-sticky` with a CSS custom property
`--ease-sticky-top` (defaulting to `0`), so the sticky offset can be overridden
per-element inline — no extra class or custom CSS required.

### The problem

`core/utilities.css` line 161:

```css
.ease-sticky { position: sticky; top: 0; }
```

`top: 0` is hardcoded. Any page with a fixed navbar (the most common real-world
layout) needs a different offset — but there is no way to change it using the
utility system. Developers must write their own CSS selector to override the class,
which defeats the purpose of a utility-first framework.

### The fix (maintainer action on `core/utilities.css`)

```css
/* BEFORE */
.ease-sticky { position: sticky; top: 0; }

/* AFTER */
.ease-sticky { position: sticky; top: var(--ease-sticky-top, 0); }
```

And in `core/variables.css` (optional but recommended for discoverability):

```css
--ease-sticky-top: 0;
```

### How is it used?

```html
<!-- Default: sticks at top: 0 (unchanged behaviour) -->
<div class="ease-sticky">Navbar</div>

<!-- Override for a 64px fixed header — no new class needed -->
<div class="ease-sticky" style="--ease-sticky-top: 64px;">Sidebar</div>

<!-- Override at the layout level (affects all sticky children) -->
<main style="--ease-sticky-top: 4rem;">
  <aside class="ease-sticky">Sidebar</aside>
</main>
```

### Why is it useful?

CSS custom property overrides via `style=""` are exactly how EaseMotion CSS
components work for colours and shadows. Applying the same pattern to
`.ease-sticky` makes sticky offsets composable without requiring any new classes.
Zero change to existing behaviour — the `0` fallback means all current uses
continue to work identically.
