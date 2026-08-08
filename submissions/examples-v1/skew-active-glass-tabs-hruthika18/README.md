# Skew-Active Tabs — Glassmorphism (`ease-skew-tabs`)

Pure CSS tabs on a genuine frosted-glass surface, with a skewed
parallelogram indicator that slides to the active tab — built on the
radio-input technique for zero-JS tab switching with fully native
keyboard support.

This is a distinct variant from the Magnetic Pull Tabs already in the
library (`ease-magnet-tabs`, a straight rectangular pill with a spring
overshoot): same underlying radio-input mechanism, but the indicator is a
constantly-skewed parallelogram (not a rectangle that becomes skewed on
interaction — the skew is the shape's resting identity, giving the whole
control a dynamic, angular feel), and the surface uses real
`backdrop-filter` glassmorphism rather than a solid or dashboard-style
background.

## What it does

- **Click a tab, or use arrow keys** — tabs are backed by native radio
  inputs sharing one `name`; the browser handles selection and
  Left/Right arrow-key navigation natively. No JS.
- A **skewed parallelogram indicator** slides behind the active tab label
  using `translateX()` combined with a constant `skewX()`, so it always
  reads as a slanted shape rather than a plain rectangle.
- The tab list and form fields sit on a `backdrop-filter: blur()` glass
  surface with a translucent tint and light border — the defining trait
  of glassmorphism.
- Includes an `@supports` fallback: browsers without `backdrop-filter`
  get a solid dark translucent background instead of a transparent,
  unreadable one.
- **Fully keyboard accessible**: radio inputs are visually hidden with a
  clip-based technique (not `display: none`) and get a visible focus
  ring via `:focus-visible` on their label.
- Respects `prefers-reduced-motion`.
- Configurable via CSS custom properties, including the skew angle and
  glass tint/blur.

## Usage

```html
<link rel="stylesheet" href="style.css" />

<div class="ease-skew-tabs">

  <input type="radio" name="my-tabs" id="tab-a" class="ease-skew-tabs__input" checked />
  <input type="radio" name="my-tabs" id="tab-b" class="ease-skew-tabs__input" />

  <div class="ease-skew-tabs__list" role="tablist" aria-label="My tabs">
    <label class="ease-skew-tabs__tab" for="tab-a">A</label>
    <label class="ease-skew-tabs__tab" for="tab-b">B</label>
    <span class="ease-skew-tabs__indicator" aria-hidden="true"></span>
  </div>

  <div class="ease-skew-tabs__panels">
    <div class="ease-skew-tabs__panel" data-panel="a">First panel.</div>
    <div class="ease-skew-tabs__panel" data-panel="b">Second panel.</div>
  </div>

</div>
```

Works best over a colorful, gradient, or photographic background — like
the other glass component in this library, the frosted effect needs
something behind it to blur.

### Important: this technique needs per-tab CSS rules

As with the Magnetic Pull Tabs, pure CSS can't compute "which sibling
input is checked, by index" generically. The indicator-position,
label-color, and panel-visibility rules are written **per tab ID**. The
shipped `style.css` covers a 3-tab example (`skew-tab-login`,
`skew-tab-signup`, `skew-tab-guest`). To reuse with different IDs or a
different tab count, copy the rule blocks per tab, update the
`translateX` offset (`(index * 100%) + (index * gapPx)`, `gapPx` matching
the grid `gap`), and update `--ease-skew-tabs-count`.

### Custom skew / tint per instance

```html
<div
  class="ease-skew-tabs"
  style="--ease-skew-tabs-skew: -14deg; --ease-skew-tabs-tint: 20, 20, 30;"
>
  ...
</div>
```

| Property | Default | Description |
|---|---|---|
| `--ease-skew-tabs-duration` | `0.3s` | Length of the indicator slide, label color change, panel entrance |
| `--ease-skew-tabs-easing` | `cubic-bezier(0.2, 0.9, 0.3, 1.25)` | Easing curve (slight overshoot) |
| `--ease-skew-tabs-skew` | `-8deg` | Constant skew angle of the indicator |
| `--ease-skew-tabs-count` | `3` | Number of tabs — must match your markup |
| `--ease-skew-tabs-tint` | `255, 255, 255` | RGB triplet for the glass tint/border |
| `--ease-skew-tabs-blur` | `16px` | Backdrop blur radius |
| `--ease-skew-tabs-fg` | `#ffffff` | Active tab / heading text color |
| `--ease-skew-tabs-muted` | `rgba(255, 255, 255, 0.75)` | Inactive tab / body text color |
| `--ease-skew-tabs-accent` | `#ff6b9d` | Indicator and submit-button color |
| `--ease-skew-tabs-radius` | `12px` | Outer corner radius |

## Why it fits EaseMotion CSS

Self-contained, dependency-free, class-based API consistent with the
framework's conventions — a zero-JS tab switcher with native keyboard
support, styled with a genuine `backdrop-filter` glass surface rather
than a themed color palette. Gives the tabs family a second variant with
a distinctly different indicator shape and surface treatment from the
Magnetic Pull Tabs already contributed.

## Accessibility notes

- Radio inputs are hidden with a clip-based visually-hidden technique,
  keeping them focusable and keyboard-operable.
- Native radio-group behavior provides arrow-key navigation and `Tab`
  in/out of the group with no manual `keydown` handling.
- `role="tablist"` and `aria-label` are included on the tab row; as with
  the Magnetic Pull Tabs, full ARIA tabs semantics (`role="tab"`,
  `aria-selected`, `role="tabpanel"`) can be layered on manually if
  required.
- The skewed indicator is `aria-hidden="true"` since it's purely visual.
- Glassmorphism risks low text contrast depending on the background;
  test against your specific backdrop and adjust `--ease-skew-tabs-fg` /
  `--ease-skew-tabs-tint` if needed.

## Browser support

Uses standard CSS custom properties, CSS Grid, `:checked`,
`:focus-visible`, general sibling combinators, `backdrop-filter` (with
`-webkit-` prefix and an `@supports` fallback), and `transform`/
`transition` — evergreen Chrome, Edge, Firefox, and Safari all support
`backdrop-filter` natively as of recent versions.
