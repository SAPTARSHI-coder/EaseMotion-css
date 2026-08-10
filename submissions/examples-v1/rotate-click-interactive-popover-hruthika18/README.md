# Rotate-Click Popover — Interactive Interface (`ease-rotate-int-pop`)

A pure CSS, click-triggered popover/disclosure row with a rotating
chevron indicator — built on native `<details>`/`<summary>`, styled for
feature lists, FAQs, and other interactive-row interfaces. Zero
JavaScript.

This is a distinct variant from the marketing-landing-page Rotate-Click
Popover already in the library (`ease-rotate-pop`, a small inline "+"
that rotates into an "×" next to a headline). This one is a full-width
accordion-style row with a chevron that rotates 180° open/closed — the
more common real-world pattern for feature lists and FAQ sections.

## What it does

- **Click to open, click to close** — built on `<details>`/`<summary>`,
  so the browser handles all open/close state natively.
- A chevron (CSS-drawn border corner, no icon font/SVG needed) **rotates
  from pointing down to pointing up** as the row opens, and changes color
  to the accent tone while open.
- The revealed panel fades and slides in slightly via `@keyframes`,
  re-triggering each time the row opens (browsers restart CSS animations
  when `display` changes from `none` to visible, which `<details>` does
  natively on open).
- **Fully keyboard accessible out of the box**: `<summary>` is natively
  focusable and toggles on `Enter` or `Space`.
- Respects `prefers-reduced-motion`: rotation and panel animation are
  disabled; the open/closed state itself is unaffected.
- Stacks cleanly: adjacent `.ease-rotate-int-pop` elements get automatic
  spacing via an adjacent-sibling margin rule, so a list of rows needs no
  extra wrapper CSS.
- Configurable via CSS custom properties.

## Usage

```html
<link rel="stylesheet" href="style.css" />

<details class="ease-rotate-int-pop">
  <summary class="ease-rotate-int-pop__trigger">
    <span class="ease-rotate-int-pop__title">Row title</span>
    <span class="ease-rotate-int-pop__chevron"></span>
  </summary>
  <div class="ease-rotate-int-pop__panel">
    Row content goes here.
  </div>
</details>
```

Stack multiple rows directly — spacing between them is automatic:

```html
<details class="ease-rotate-int-pop">...</details>
<details class="ease-rotate-int-pop">...</details>
<details class="ease-rotate-int-pop ease-rotate-int-pop--accent">...</details>
```

### Color variant

```html
<details class="ease-rotate-int-pop ease-rotate-int-pop--accent">...</details>
```

### Custom timing per instance

```html
<details class="ease-rotate-int-pop" style="--ease-rotate-int-duration: 0.4s;">
  ...
</details>
```

| Property | Default | Description |
|---|---|---|
| `--ease-rotate-int-duration` | `0.24s` | Length of the chevron rotation and panel entrance |
| `--ease-rotate-int-easing` | `ease-out` | Easing curve |
| `--ease-rotate-int-bg` | `#ffffff` | Row background color |
| `--ease-rotate-int-fg` | `#1c2028` | Title text color |
| `--ease-rotate-int-muted` | `#6b7280` | Panel text and chevron (closed) color |
| `--ease-rotate-int-border` | `#e5e7eb` | Row border color |
| `--ease-rotate-int-accent` | `#4f46e5` | Chevron color while open, and focus outline |

## Why it fits EaseMotion CSS

Self-contained, dependency-free, class-based API consistent with the
framework's conventions, CSS-custom-property configuration, a documented
reduced-motion fallback, and no required JavaScript — built on a native
disclosure element rather than hand-rolled click/keyboard/ARIA handling.
Gives the rotate-click interaction a full-width, list-friendly variant
distinct from the small inline "+/×" trigger already in the library.

## Accessibility notes

- `<details>`/`<summary>` is a native disclosure widget: it's in the tab
  order automatically, opens/closes on `Enter`/`Space`, and its open state
  is exposed to assistive technology without manual `aria-expanded`
  bookkeeping.
- The chevron is purely decorative (no meaningful content, just a
  rotating border shape), so it carries no `alt`/`aria-*` attributes of
  its own — the semantics live on `<summary>`.
- As with the other `<details>`-based popover in this library, there's no
  built-in click-outside-to-close; only clicking the trigger again closes
  it. This is native `<details>` behavior.

## Browser support

Uses standard CSS custom properties, `<details>`/`<summary>`,
`:focus-visible`, the `[open]` attribute selector, and `@keyframes` — no
vendor prefixes needed for current evergreen browsers (Chrome, Edge,
Firefox, Safari). The `::-webkit-details-marker` rule hides the default
disclosure triangle in WebKit browsers.
