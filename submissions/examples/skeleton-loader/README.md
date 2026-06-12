# Skeleton Loader

Submission for EaseMotion CSS — resolves [Issue #2667](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/2667)

---

## 1. What does this do?

Adds shimmer and pulse loading placeholder classes that visually fill the
space where content will appear, giving users instant layout feedback while
data is being fetched.

---

## 2. How is it used?

Apply the class directly to any block-level element in place of real content.
Size it with `width` and `height` (inline or via your own layout classes):

```html
<!-- Block placeholder (image, card, banner) -->
<div class="skeleton" style="width: 100%; height: 160px;"></div>

<!-- Text line placeholder -->
<span class="skeleton-text" style="width: 75%;"></span>
<span class="skeleton-text" style="width: 100%;"></span>
<span class="skeleton-text" style="width: 50%;"></span>

<!-- Avatar / icon placeholder -->
<span class="skeleton-circle" style="width: 48px; height: 48px;"></span>

<!-- Pulse variant (softer, no sweep) -->
<div class="skeleton-pulse" style="width: 100%; height: 160px;"></div>
```

**Profile card example:**

```html
<div style="display: flex; gap: 0.75rem; align-items: center;">
  <span class="skeleton-circle" style="width: 48px; height: 48px;"></span>
  <div style="flex: 1; display: flex; flex-direction: column; gap: 0.4rem;">
    <span class="skeleton-text" style="width: 60%;"></span>
    <span class="skeleton-text" style="width: 40%;"></span>
  </div>
</div>
```

---

## 3. Why is it useful?

Skeleton loaders are a first-class animation pattern — the entire effect is
driven by a single `@keyframes` shimmer sweep or opacity pulse. There is no
JavaScript, no dependencies, and no build step required. This aligns directly
with EaseMotion CSS's core philosophy of making animations first-class through
simple, readable class names.

Unlike a generic spinner, a skeleton preserves the layout of the real content,
so there is no layout shift when data loads. Frameworks like Chakra UI, Vuetify,
and MUI all ship skeleton loaders because developers reach for them constantly.
EaseMotion CSS should too.

The shimmer uses `background-position` animation (GPU-composited) so it is
performant even on many elements simultaneously. The pulse variant uses
`opacity` animation — equally cheap, and a good choice when the shimmer sweep
feels too intense for the context.

Dark mode is handled automatically via `@media (prefers-color-scheme: dark)`.
The maintainer can replace the hard-coded hex values with `--ease-color-surface`
and related tokens when integrating into `core/`.

---

## Files

| File        | Purpose                              |
|-------------|--------------------------------------|
| `style.css` | Raw CSS — shimmer + pulse keyframes, four utility classes |
| `demo.html` | Self-contained demo with toggle between loading/loaded states |
| `README.md` | This file                            |

---

*Proposed ease-\* names (maintainer decides):*
`ease-skeleton` · `ease-skeleton-text` · `ease-skeleton-circle` · `ease-skeleton-pulse`