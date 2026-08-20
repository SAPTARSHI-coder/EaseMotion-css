# Glitch-Flicker Popover

A pure CSS/HTML popover component for SaaS showcase layouts. Instead of a
plain fade or slide, the panel reveals with a short RGB-split flicker — like
a signal locking on — then settles into a quiet ambient scanline while it
stays open. No JavaScript, no build step, no external libraries.

Built for status badges, anomaly/alert callouts, and feature tooltips on
dashboards, admin panels, and product marketing pages.


---

## Files

| File         | Purpose                                              |
|--------------|-------------------------------------------------------|
| `demo.html`  | Standalone showcase page with 6 live examples          |
| `style.css`  | The full component + design tokens (single stylesheet) |
| `README.md`  | This file                                              |

Open `demo.html` directly in a browser — no server or bundler needed.

---

## Two trigger modes

The component supports two interaction patterns, both pure CSS:

### 1. Hover / keyboard focus
Reveals on `:hover` and `:focus-within`, closes automatically when the
pointer/focus leaves. Best for lightweight, glanceable tooltips.

```html
<div class="glitch-popover glitch-popover--hover glitch-popover--info">
  <button class="glitch-popover__trigger" type="button">System status</button>
  <div class="glitch-popover__panel" role="tooltip">
    <p class="glitch-popover__eyebrow">◆ Live signal</p>
    <p class="glitch-popover__title">All services nominal</p>
    <p class="glitch-popover__body">Uptime 99.98% over the last 30 days.</p>
  </div>
</div>
```

### 2. Click (checkbox hack)
Uses a visually-hidden `<input type="checkbox">` paired with a `<label>`
trigger, so the panel stays pinned open until the trigger is clicked again —
no `glitch-popover--hover` modifier needed.

```html
<div class="glitch-popover glitch-popover--warn">
  <input type="checkbox" id="pop-billing" class="glitch-popover__toggle" />
  <label for="pop-billing" class="glitch-popover__trigger">Billing alert</label>
  <div class="glitch-popover__panel" role="dialog" aria-label="Billing alert details">
    <p class="glitch-popover__eyebrow">▲ Warning</p>
    <p class="glitch-popover__title">Card expiring in 6 days</p>
    <p class="glitch-popover__body">Update payment details to avoid a lapse in service.</p>
  </div>
</div>
```

> The `id`/`for` pair must be unique per instance on the page.

---

## Placement

Add one modifier class to the outer `.glitch-popover` wrapper. Omitting a
placement modifier defaults to **bottom**.

| Class                     | Position          |
|---------------------------|--------------------|
| *(none)*                  | Bottom (default)   |
| `.glitch-popover--top`    | Top                |
| `.glitch-popover--left`   | Left                |
| `.glitch-popover--right`  | Right               |

On viewports under `560px`, left/right placements automatically collapse to
bottom so panels never spill off-screen.

---

## Severity

Three built-in severity modifiers set the accent color, border tint, and
glitch RGB-split channels:

| Class                     | Accent            | Suggested use            |
|---------------------------|--------------------|----------------------------|
| `.glitch-popover--info`   | Cyan (`--em-cyan`)    | Status, confirmations      |
| `.glitch-popover--warn`   | Amber (`--em-amber`)  | Approaching limits, expiry |
| `.glitch-popover--error`  | Magenta (`--em-magenta`) | Failures, anomalies    |

---

## CSS custom properties

All tuning happens through custom properties — no need to touch the
keyframes. Set overrides on `:root` for a site-wide default, or on an
individual `.glitch-popover` instance.

| Property               | Default              | Description                                      |
|-------------------------|----------------------|---------------------------------------------------|
| `--glitch-color`        | `var(--em-cyan)`     | Primary accent (trigger, eyebrow, glow)           |
| `--glitch-color-2`      | `var(--em-magenta)`  | Secondary channel used in the RGB-split flicker   |
| `--glitch-bg`           | `var(--em-panel-raised)` | Panel background                              |
| `--glitch-border`       | `var(--em-line)`     | Panel border color                                |
| `--glitch-text`         | `var(--em-paper)`    | Panel title/body text color                       |
| `--glitch-duration`     | `900ms`               | Length of the entrance flicker animation          |
| `--glitch-offset`       | `2px`                 | Max horizontal displacement during the flicker    |
| `--popover-radius`      | `3px`                 | Panel corner radius                               |
| `--popover-width`       | `260px`               | Panel width                                       |

Example — a slower, wider, brand-colored instance:

```css
.glitch-popover.brand {
  --glitch-color: #7c5cff;
  --glitch-color-2: #4ce0d2;
  --glitch-duration: 1400ms;
  --popover-width: 320px;
}
```

The page-level design tokens (`--em-cyan`, `--em-magenta`, `--em-panel`,
fonts, etc.) live at the top of `style.css` under `:root` and can be
re-themed independently of the component itself.

---

## Features

- **Pure CSS/HTML** — no JavaScript, no dependencies, no build step.
- **Two trigger modes** — hover/focus for tooltips, checkbox-driven click for
  pinned panels.
- **Four placements** — top, bottom, left, right, with a matching pointer
  triangle.
- **RGB-split entrance flicker** — a `steps()` keyframe animation displaces
  and re-colors the panel edges before it settles, evoking a signal locking
  on rather than a generic fade.
- **Ambient scanline** — a subtle looping flicker while the panel stays
  open, so it reads as "live" rather than static.
- **Fully responsive** — grid layout collapses from 3 → 2 → 1 columns, and
  side placements auto-collapse to bottom on small viewports.
- **Accessible**
  - Hover variant also opens on `:focus-within`, so keyboard users can tab
    to the trigger.
  - Click variant uses a real `<input type="checkbox">` + `<label>`, so it's
    operable without a pointer and works with screen readers' native
    checkbox semantics.
  - Visible `:focus-visible` outline on all triggers.
  - Respects `prefers-reduced-motion: reduce` — all glitch/flicker/pulse
    animations are disabled and the panel appears with a simple opacity
    fade instead.

---

## Browser support

Uses `clip-path`, `color-mix()`, and CSS custom properties. Supported in all
current evergreen browsers (Chrome, Edge, Firefox, Safari 16.4+). In older
browsers without `color-mix()`, the trigger's background/border tint will
fall back to transparent — the component remains fully functional.

---

## Accessibility notes

- The hover-triggered panels use `role="tooltip"`. Keep their content brief
  and non-interactive.
- The click-triggered panels use `role="dialog"` with an `aria-label`,
  since they can contain more substantial content and stay open on demand.
- If a panel needs interactive content (links, buttons), prefer the click
  variant — hover-only popovers should not contain focusable content, per
  WAI-ARIA tooltip guidance.