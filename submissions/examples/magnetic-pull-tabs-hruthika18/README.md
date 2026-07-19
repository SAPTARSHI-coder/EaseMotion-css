# Magnetic Pull Tabs (`ease-magnet-tabs`)

Pure CSS tabs where a sliding pill indicator "pulls" to the active tab
with a slight magnetic overshoot — built on the radio-input technique for
zero-JS tab switching with fully native keyboard support.

## What it does

- **Click a tab, or use arrow keys** — tabs are backed by native radio
  inputs sharing one `name`, so the browser handles selection and
  Left/Right arrow-key navigation between tabs automatically. No JS.
- A pill-shaped **"magnet" indicator** slides behind the active tab label
  using `transform: translateX()`, timed with a spring-like
  `cubic-bezier` that slightly overshoots before settling — the
  "magnetic pull" feel the issue asked for.
- The revealed panel fades and slides in slightly on each switch.
- **Fully keyboard accessible**: radio inputs are visually hidden with a
  standard clip-based technique (not `display: none`, which would remove
  them from the tab order) and get a visible focus ring on their
  corresponding label via `:focus-visible`.
- Respects `prefers-reduced-motion`: the magnet slide, label color
  transition, and panel entrance animation are all disabled.
- Configurable via CSS custom properties.

## Usage

```html
<link rel="stylesheet" href="style.css" />

<div class="ease-magnet-tabs">

  <input type="radio" name="my-tabs" id="tab-one" class="ease-magnet-tabs__input" checked />
  <input type="radio" name="my-tabs" id="tab-two" class="ease-magnet-tabs__input" />

  <div class="ease-magnet-tabs__list" role="tablist" aria-label="My tabs">
    <label class="ease-magnet-tabs__tab" for="tab-one">One</label>
    <label class="ease-magnet-tabs__tab" for="tab-two">Two</label>
    <span class="ease-magnet-tabs__magnet" aria-hidden="true"></span>
  </div>

  <div class="ease-magnet-tabs__panels">
    <div class="ease-magnet-tabs__panel" data-panel="tab-one-content">First panel.</div>
    <div class="ease-magnet-tabs__panel" data-panel="tab-two-content">Second panel.</div>
  </div>

</div>
```

### Important: this technique needs per-tab CSS rules

Because pure CSS has no way to compute "which sibling input is checked,
by index" generically, the magnet-position and panel-visibility rules are
written **per tab ID**, e.g.:

```css
#tab-two:checked ~ .ease-magnet-tabs__list .ease-magnet-tabs__magnet {
  transform: translateX(calc(100% + 4px));
}
#tab-two:checked ~ .ease-magnet-tabs__list label[for="tab-two"] {
  color: var(--ease-magnet-active-fg);
}
#tab-two:checked ~ .ease-magnet-tabs__panels [data-panel="tab-two-content"] {
  display: block;
}
```

The shipped `style.css` includes these rules for a 4-tab example
(`magnet-tab-overview`, `magnet-tab-features`, `magnet-tab-pricing`,
`magnet-tab-faq`). **To reuse this component with different tab IDs or a
different tab count**, copy the three rule blocks per tab and update the
IDs/`data-panel` values and the `translateX` offset (each step over is
`(index * 100%) + (index * gapPx)`, where `gapPx` matches the grid `gap`
set in CSS). Also update `--ease-magnet-count` to the new tab count. This
is a known tradeoff of the radio-input pure-CSS tabs pattern — it trades
JS-free operation for needing explicit per-instance rules.

### Custom timing per instance

```html
<div class="ease-magnet-tabs" style="--ease-magnet-duration: 0.5s;">
  ...
</div>
```

| Property | Default | Description |
|---|---|---|
| `--ease-magnet-duration` | `0.35s` | Length of the magnet slide, label color change, and panel entrance |
| `--ease-magnet-easing` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Easing curve (magnetic overshoot) |
| `--ease-magnet-bg` | `#f3f4f8` | Tab list background |
| `--ease-magnet-fg` | `#4b5163` | Inactive tab / panel text color |
| `--ease-magnet-active-fg` | `#ffffff` | Active tab label color |
| `--ease-magnet-accent` | `#4f46e5` | Magnet pill color |
| `--ease-magnet-border` | `#e5e7eb` | Tab list border color |
| `--ease-magnet-radius` | `10px` | Outer corner radius |
| `--ease-magnet-count` | `4` | Number of tabs — must match your markup for the grid columns and magnet width math to line up |

## Why it fits EaseMotion CSS

Self-contained, dependency-free, class-based API consistent with the
framework's conventions — a zero-JS tab switcher with native keyboard
support via the radio-input technique, plus a distinctive spring-eased
sliding indicator rather than a plain instant-jump underline.
Configuration via CSS custom properties, and a documented
reduced-motion fallback.

## Accessibility notes

- Radio inputs are hidden with a clip-based visually-hidden technique
  (not `display: none`), keeping them focusable and operable by keyboard.
- Native radio-group behavior means arrow keys move between tabs and
  `Tab` moves in/out of the group — no manual `keydown` handling needed.
- `role="tablist"` and `aria-label` are included on the tab row; if you
  need full ARIA tabs semantics (`role="tab"`, `aria-selected`,
  `role="tabpanel"`, `aria-controls`), you can layer those on manually —
  they weren't required to make the radio-input pattern itself operable,
  but they do improve how screen readers announce tab state.
- The magnet indicator is `aria-hidden="true"` since it's purely visual.

## Browser support

Uses standard CSS custom properties, CSS Grid, `:checked`, `:focus-visible`,
general sibling combinators (`~`), attribute selectors, and
`transform`/`transition` — no vendor prefixes needed for current
evergreen browsers (Chrome, Edge, Firefox, Safari).
