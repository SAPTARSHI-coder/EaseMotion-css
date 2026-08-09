# ease-accordion

A pure CSS accordion built on native `<details>` / `<summary>` elements,
with a smooth open/close height transition and an animated chevron —
no JavaScript required.

## What it does

- Each section is a native `<details>` element, so keyboard navigation,
  focus handling, and screen-reader semantics all come for free.
- The disclosure triangle is replaced with a custom chevron icon that
  rotates 180 degrees on open.
- Height animates smoothly using the `grid-template-rows: 0fr -> 1fr`
  technique - no `max-height` guessing games, no JS measuring content
  height.
- Ships a `.ease-accordion-glass` variant with a frosted, translucent
  header, and works seamlessly nested inside `.ease-card`.

## How a developer uses it

```html
<div class="ease-accordion">

  <details class="ease-accordion-item" open>
    <summary class="ease-accordion-header">
      <span>Section title</span>
      <svg class="ease-accordion-icon" viewBox="0 0 24 24" width="18" height="18"
           fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </summary>
    <div class="ease-accordion-body">
      <p>Section content goes here.</p>
    </div>
  </details>

</div>
```

For the glassmorphism header style, add `ease-accordion-glass` alongside
`ease-accordion` on the wrapper:

```html
<div class="ease-accordion ease-accordion-glass">
  ...
</div>
```

Start a section open by default with the standard `open` attribute on
`<details>`.

Key CSS custom properties you can override:

| Variable | Purpose | Default |
|---|---|---|
| `--ease-accordion-radius` | Item corner radius | `10px` |
| `--ease-accordion-border` | Item border color | `#e3e5f0` |
| `--ease-accordion-accent` | Open-state chevron color | `#6d5dfc` |
| `--ease-accordion-duration` | Transition duration | `260ms` |
| `--ease-accordion-easing` | Transition easing | `ease` |

## Why it fits EaseMotion CSS

- Zero JavaScript - relies entirely on native `<details>`/`<summary>`
  behavior plus a pure CSS grid-row transition, matching the framework's
  CSS-only philosophy.
- Accessible by default: keyboard toggling (Enter/Space on the
  summary), correct semantics, and no ARIA wiring required.
- Composes cleanly with the existing `.ease-card` component.
- Respects `prefers-reduced-motion` by collapsing transitions to
  near-instant.
- Self-contained: `demo.html` opens directly in a browser, no build step.

## Browser support

Tested in Chrome, Firefox, and Edge. The `grid-template-rows` animation
technique requires a browser that supports animating grid track sizes
(all modern evergreen browsers); `<details>`/`<summary>` itself is
universally supported.
