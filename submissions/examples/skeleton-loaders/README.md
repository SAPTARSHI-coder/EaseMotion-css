# Skeleton Loaders

**Category:** Loading / Feedback
**Issue:** #87413

A collection of CSS-only skeleton loading placeholders covering four
common UI layouts: profile card, article card, list items, and a
dashboard stat grid. Ships with two animation styles — shimmer (default)
and pulse.

## What it does
- 4 ready-made layouts: `.ease-skel-profile`, `.ease-skel-article`,
  `.ease-skel-list`, `.ease-skel-dashboard`
- Shimmer animation by default (a moving highlight sweep); add
  `.ease-skeleton--pulse` to switch to an opacity-pulse animation instead
- No JavaScript required — animations are pure CSS keyframes
- Responsive: layouts reflow at narrow widths, dashboard grid uses
  `auto-fit`/`minmax` so cards wrap naturally
- Respects `prefers-reduced-motion` and `prefers-color-scheme`

## How to use

Every layout is built from the same base block, `.ease-skel-block`,
combined with shape helpers:

```html
<div class="ease-skeleton ease-skel-profile">
  <div class="ease-skel-block ease-skel-circle"></div>
  <div class="ease-skel-profile-lines">
    <div class="ease-skel-block ease-skel-text ease-skel-text--md"></div>
    <div class="ease-skel-block ease-skel-text ease-skel-text--sm"></div>
  </div>
</div>
```

Swap to pulse animation:

```html
<div class="ease-skeleton ease-skeleton--pulse ease-skel-profile">
  ...
</div>
```

### Customization

All colors, radius, and animation speed are controlled via CSS custom
properties on `.ease-skeleton`:

```css
.ease-skeleton {
  --ease-skel-base: #e8e9f0;       /* base placeholder color */
  --ease-skel-highlight: #f6f7fb;  /* shimmer sweep color */
  --ease-skel-radius: 8px;         /* corner radius for blocks */
  --ease-skel-duration: 1.6s;      /* animation speed */
}
```

Building a new layout: compose `.ease-skel-block` (optionally with
`.ease-skel-circle`) and the text-width helpers
(`.ease-skel-text--sm/md/lg`) inside your own container — no new CSS
needed for most cases.

## Why it fits EaseMotion CSS
- Zero dependencies, pure CSS animation
- Themeable via CSS custom properties
- Reusable base block keeps the four included layouts (and any custom
  ones a developer builds) visually consistent

## Browser support
Chrome, Firefox, Edge, Safari.
