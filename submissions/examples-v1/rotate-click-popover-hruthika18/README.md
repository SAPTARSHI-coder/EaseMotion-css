# Rotate-Click Popover (`ease-rotate-pop`)

A pure CSS, **click-triggered** popover built on the native
`<details>`/`<summary>` elements — styled for marketing landing pages
(hero headlines, pricing cards) where you want a quick "why does this
matter" aside next to a headline or feature. Zero JavaScript.

## What it does

- **Click to open, click to close** — built on `<details>`/`<summary>`,
  so the browser handles all open/close state natively. No JS, no
  checkbox hacks.
- The trigger icon (a CSS-drawn "+") **rotates into an "×"** as the
  popover opens, using a spring-like easing on the `transform`.
- The bubble animates in with a short scale + fade using a plain
  `@keyframes` animation, which re-triggers each time `<details>` toggles
  open (browsers restart CSS animations when an element's `display`
  changes from `none` to a visible value, which is what happens natively
  when `<details>` opens).
- **Fully keyboard accessible out of the box**: `<summary>` is natively
  focusable and toggles on `Enter` or `Space` — this is browser-native
  disclosure widget behavior, not something built by hand.
- Respects `prefers-reduced-motion`: both the icon rotation and bubble
  entrance animation are disabled for users who've asked for reduced
  motion (the open/closed state itself is unaffected).
- Configurable via CSS custom properties.

## Usage

```html
<link rel="stylesheet" href="style.css" />

<details class="ease-rotate-pop" aria-label="More info">
  <summary class="ease-rotate-pop__trigger" aria-label="More info">
    <span class="ease-rotate-pop__icon"></span>
  </summary>
  <div class="ease-rotate-pop__bubble" role="note">
    Your popover content goes here.
  </div>
</details>
```

Because it's a real `<details>` element, you can place it inline next to
a heading, price, or any other text — it behaves like an inline-block
disclosure widget.

### Color variant

```html
<details class="ease-rotate-pop ease-rotate-pop--accent">...</details>
```

### Custom timing per instance

```html
<details
  class="ease-rotate-pop"
  style="--ease-rotate-duration: 0.4s;"
>
  ...
</details>
```

| Property | Default | Description |
|---|---|---|
| `--ease-rotate-duration` | `0.25s` | Length of the icon rotation and bubble entrance |
| `--ease-rotate-easing` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Easing curve (slight spring overshoot) |
| `--ease-rotate-gap` | `12px` | Space between the trigger and the bubble |
| `--ease-rotate-bg` | `#ffffff` | Bubble background color |
| `--ease-rotate-fg` | `#1c2028` | Bubble text color |
| `--ease-rotate-border` | `#e5e7eb` | Bubble border color |
| `--ease-rotate-accent` | `#6d5bff` | Trigger icon / focus outline color |

## Why it fits EaseMotion CSS

It's a self-contained, dependency-free animated component consistent with
the framework's existing patterns: class-based API (`ease-rotate-pop`),
configuration via CSS custom properties, a documented reduced-motion
fallback, and no required JavaScript — and it goes a step further by
building on a native HTML disclosure element instead of hand-rolling
click/keyboard/ARIA behavior, which keeps the implementation smaller and
more robust than a hover-only popover would need to be for the same
click-to-open interaction.

## Accessibility notes

- `<details>`/`<summary>` is a native disclosure widget: it's in the tab
  order automatically, opens/closes on `Enter`/`Space`, and its open state
  is exposed to assistive technology without any manual `aria-expanded`
  bookkeeping.
- The bubble uses `role="note"` since it's supplementary, non-interactive
  content; adjust if your content includes interactive elements.
- One tradeoff of the native element: there's no built-in "click outside
  to close" — clicking elsewhere on the page won't auto-close it (only
  clicking the trigger again does). This is standard `<details>` behavior
  and keeps the implementation dependency-free; add a small JS listener
  yourself if click-outside-to-close is a hard requirement for your use
  case.

## Browser support

Uses standard CSS custom properties, `<details>`/`<summary>`,
`:focus-visible`, the `[open]` attribute selector, and `@keyframes` — no
vendor prefixes needed for current evergreen browsers (Chrome, Edge,
Firefox, Safari). The `::-webkit-details-marker` rule is included solely
to hide the default disclosure triangle in WebKit browsers.
