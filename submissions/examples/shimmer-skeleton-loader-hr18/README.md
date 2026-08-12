# Shimmer Skeleton Loading Card (`shimmer-skeleton-loader-hr18`)

A self-contained HTML/CSS demo of a modern skeleton loading card with a
shimmering gradient sweep, built for issue
[#55712](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/55712).

## A note on naming

The issue asks for the demo under `submissions/examples/shimmer-skeleton-loader/`
with `index.html` and `style.css` — this submission uses those exact
filenames, but with a `-hr18` folder suffix
(`shimmer-skeleton-loader-hr18`) rather than the bare name. Three people
are assigned to this issue, including the reporter, who may well submit
under the exact literal folder name from their own issue text — the suffix
here just avoids a collision with that. `README.md` is added on top of the
two requested files for consistency with the rest of this repo's
submissions.

## What it does

Two skeleton card variants — a product-card layout (rectangular thumbnail,
title, subtitle, price line, button) and a profile-card layout (circular
avatar, centered title/subtitle, button) — each built from reusable
placeholder "bone" shapes. Every bone carries a moving shimmer: a gradient
band three times the element's own width, animated by sliding its
`background-position` from one edge to the other, so only a thin bright
highlight is ever visible sweeping across the shape at once.

## Installation

Nothing to install — `index.html` is self-contained and opens directly in a
browser (double-click the file). It links a single local `style.css`; no
build step, package manager, or external CDN.

## Usage

Apply `ssl-bone-hr18 ssl-shimmer-hr18` to any placeholder shape, then a
sizing class for that shape:

```html
<div class="ssl-bone-hr18 ssl-shimmer-hr18 ssl-thumb-hr18"></div>
<div class="ssl-bone-hr18 ssl-shimmer-hr18 ssl-line-hr18 title"></div>
<div class="ssl-bone-hr18 ssl-shimmer-hr18 ssl-line-hr18 subtitle"></div>
<div class="ssl-bone-hr18 ssl-shimmer-hr18 ssl-button-hr18"></div>
```

`ssl-bone-hr18` sets the flat placeholder color and rounded corners;
`ssl-shimmer-hr18` adds the animated gradient sweep on top. They're kept
separate so a bone can be used without the shimmer (e.g. for a
`prefers-reduced-motion` fallback) without duplicating any rules.

### Customizing the look

```css
.ssl-hr18 {
  --ssl-bone-hr18: #2a2a32;   /* placeholder color */
  --ssl-shine-hr18: #3a3a44;  /* the sweeping highlight */
  --ssl-shimmer-duration-hr18: 1200ms;
}
```

## Accessibility notes

- Each card carries `role="status"` and a descriptive `aria-label` (e.g.
  "Loading product"), so screen readers announce that content is loading
  rather than presenting a wall of unlabeled empty boxes.
- `@media (prefers-reduced-motion: reduce)` disables the shimmer animation
  entirely rather than just slowing it down — a sweeping gradient is
  exactly the kind of motion that preference is meant to suppress. The
  bones remain visible as flat color blocks, which still clearly reads as
  a loading state without any movement.

## Responsiveness

The two cards sit in a wrapping flex row, so they sit side by side on
wider viewports and stack on narrow ones without any media query needed
for the layout itself.

## Why this fits EaseMotion CSS

A clean, well-commented, dependency-free CSS animation example — exactly
what the issue asks for — using only plain HTML/CSS with no JavaScript at
all, consistent with the framework's zero-dependency, readable-class
philosophy.
