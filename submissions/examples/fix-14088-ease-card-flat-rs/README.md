# Fix: `.ease-card-flat` has no dark-mode background override

**Issue:** [#14088](https://github.com/saptarshi-coder/easemotion-css/issues/14088)

---

## 1. What does this do?

Fixes `.ease-card-flat` rendering as light grey (`#f1f5f9`) in dark mode by adding dark-mode background overrides that switch it to `--ease-color-surface` (`#141e33`).

---

## 2. How is it used?

```html
<!-- No change to usage — the fix is purely in CSS -->
<div class="ease-card ease-card-flat">
  <h3 class="ease-card-title">Card Title</h3>
  <p>Content here.</p>
</div>
```

The proposed fix to add into `components/cards.css`:

```css
@media (prefers-color-scheme: dark) {
  .ease-card-flat {
    background-color: var(--ease-color-surface, #141e33);
  }
}

[data-theme="dark"] .ease-card-flat {
  background-color: var(--ease-color-surface, #141e33);
}
```

---

## 3. Why is it useful?

`.ease-card-flat` is meant to be a borderless, low-contrast card variant. In dark mode its hardcoded `--ease-color-neutral-100` background (`#f1f5f9` — light slate grey) clashes violently with dark page backgrounds, breaking visual consistency.

This fix mirrors the exact pattern already used by `.ease-card-neumorphic` and `.ease-card-glass` in `cards.css` — both of which have proper `prefers-color-scheme: dark` and `[data-theme="dark"]` overrides using `--ease-color-surface`. Applying the same treatment to `.ease-card-flat` makes all card variants consistent.
