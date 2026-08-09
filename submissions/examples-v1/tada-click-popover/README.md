# Tada-Click Popover

A pure CSS popover with a snappy "tada" bounce on open — zero JavaScript,
built on native `<details>`/`<summary>` for real keyboard accessibility.

## Why `<details>`/`<summary>`?

Instead of a checkbox hack or `:target`, this uses the browser's native
disclosure widget. That means `Tab`, `Enter`/`Space`, and screen-reader
semantics work out of the box — no `aria-*` attributes or JS needed to
wire up accessibility.

## Usage

```html
<details class="tada-pop">
  <summary class="tada-pop__trigger">Open</summary>
  <div class="tada-pop__panel">
    <p class="tada-pop__title">Title</p>
    <p class="tada-pop__body">Content goes here.</p>
  </div>
</details>
```

## Custom properties

| Property             | Default                             | Description                          |
|-----------------------|--------------------------------------|---------------------------------------|
| `--tada-duration`      | `480ms`                              | Length of the open animation          |
| `--tada-easing`        | `cubic-bezier(.34, 1.56, .64, 1)`    | Overshoot/bounce curve                |
| `--tada-scale`         | `1.06`                               | Peak scale during the bounce          |
| `--tada-rotate`        | `2deg`                               | Wobble rotation during the bounce     |
| `--popover-gap`        | `12px`                               | Space between trigger and panel       |
| `--popover-width`      | `280px`                              | Panel width                           |
| `--popover-accent`     | `var(--gauge-amber)`                 | Accent color for trigger/actions      |

## Accessibility

- Fully keyboard operable via native `<details>` semantics.
- Respects `prefers-reduced-motion` (animation is disabled, panel appears instantly).
- Visible focus ring on the trigger via `:focus-visible`.

## Browser support

Works in all evergreen browsers. `<details>` animation support in older
Safari versions may vary — test on your minimum supported version.