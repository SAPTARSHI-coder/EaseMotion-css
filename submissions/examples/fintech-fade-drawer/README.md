# Fade-In Drawer for Fintech Dashboard Layouts

A pure CSS/HTML slide-in drawer for surfacing transaction, account, or
settings detail without leaving the dashboard view. Built for EaseMotion CSS
— no JavaScript required.

## Demo

Open `demo.html` in a browser and click **View Transaction Details** to see
the drawer slide in from the right with a fading backdrop and a staggered
reveal of each content block.

## How it works

The component uses the **checkbox hack**: a hidden `<input type="checkbox">`
tracks open/close state, and `<label for="...">` elements toggle it — one on
the trigger button, one on the backdrop, and one on the close icon. CSS
sibling combinators (`~`) react to `:checked` to animate the panel in and
out. No JS, no external dependencies.

```html
<label for="em-drawer-1" class="em-trigger">Open</label>
<input type="checkbox" id="em-drawer-1" class="em-drawer-toggle">

<div class="em-drawer">
  <label for="em-drawer-1" class="em-drawer__backdrop"></label>
  <div class="em-drawer__panel">
    ...
  </div>
</div>
```

Each `.em-drawer__block` inside the panel animates in with a short delay
after the drawer opens, so content reveals in sequence rather than popping
in all at once.

## Multiple drawers on one page

Duplicate the checkbox + trigger + `.em-drawer` markup with a new `id`
(e.g. `em-drawer-2`) and point the matching `label` elements at it. Each
instance is fully independent.

## CSS custom properties

All visual tokens are defined on `:root` in `style.css` so the drawer can be
retheme'd without touching component rules.

| Property | Default | Purpose |
|---|---|---|
| `--em-drawer-width` | `380px` | Panel width on desktop |
| `--em-drawer-bg` | `#0f172a` | Panel background |
| `--em-drawer-surface` | `#16213a` | Card/block background inside panel |
| `--em-drawer-border` | `#253251` | Border color throughout |
| `--em-drawer-text` | `#e7ebf5` | Primary text color |
| `--em-drawer-muted` | `#94a3b8` | Secondary/label text color |
| `--em-drawer-accent` | `#22c55e` | Positive values, primary action, trigger button |
| `--em-drawer-accent-soft` | `rgba(34,197,94,.14)` | Accent badge background |
| `--em-drawer-negative` | `#f87171` | Negative values, pending badge |
| `--em-drawer-negative-soft` | `rgba(248,113,113,.14)` | Negative badge background |
| `--em-drawer-radius` | `14px` | Corner radius for content blocks |
| `--em-drawer-backdrop` | `rgba(4,8,20,.6)` | Overlay behind the panel |
| `--em-duration-fast` | `180ms` | Hover/focus transitions |
| `--em-duration-base` | `320ms` | Backdrop fade, block stagger |
| `--em-duration-slow` | `420ms` | Panel slide-in/out |
| `--em-ease` | `cubic-bezier(0.22, 1, 0.36, 1)` | Shared easing curve |

## Features

- Pure CSS/HTML, zero JavaScript and zero external frameworks
- Smooth panel slide + backdrop fade using CSS transitions
- Staggered `@keyframes` reveal for content blocks
- Fully responsive: fixed-width panel on desktop, narrower on tablet,
  full-width sheet on mobile (`≤600px`)
- Closes via backdrop click or the close icon (both are `<label>` elements
  wired to the same checkbox)
- Keyboard-focusable trigger and close control with visible focus states
- Respects `prefers-reduced-motion`: transitions are effectively instant and
  the staggered block animation is disabled for users who request less motion

## Browser support

Works anywhere the checkbox hack and CSS transitions are supported —
all evergreen browsers (Chrome, Firefox, Safari, Edge).
