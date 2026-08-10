# Spring Physics Tooltip — Responsive Dashboard Layout

A pure CSS tooltip with spring-physics interaction transitions for responsive dashboard layouts in EaseMotion CSS.

## What does this do?

Renders a responsive analytics dashboard with stat cards and a transaction table. Each element has a help-icon trigger that reveals a tooltip with spring-physics bounce animation — all in pure CSS with zero JavaScript.

## How is it used?

```html
<span class="sp-tooltip-anchor" tabindex="0" role="button" aria-describedby="tip-users">
  <span class="sp-tooltip" id="tip-users" role="tooltip">
    <span class="sp-tooltip__title">Active Users</span>
    <span class="sp-tooltip__body">Unique users active in the last 30 days.</span>
    <span class="sp-tooltip__arrow"></span>
  </span>
  <span class="sp-tooltip-trigger-icon">?</span>
</span>
```

## Why is it useful?

Dashboards are information-dense and benefit from contextual help. A spring-physics tooltip gives a lively, tactile feel when revealing details, making the interface more engaging than a flat fade. Using pure CSS means zero JavaScript overhead and instant load.

## Features

- **Spring-physics animation** — cubic-bezier tuned for natural overshoot and settle using `--sp-spring-damping` and `--sp-spring-stiffness` custom properties
- **Pure CSS** — hover/focus toggling via checkbox-free CSS-only approach (no JS)
- **Responsive** — grid adapts from 4 columns to 2 on mobile; tooltip widths clamp
- **Accessible** — `role="tooltip"`, `aria-describedby`, `prefers-reduced-motion`, keyboard focusable
- **Customizable** — all timing, easing, scale, colors exposed as CSS custom properties
- **Direction variants** — supports default top and `.sp-tooltip--left` positions

## Files

- `demo.html` — self-contained dashboard demo
- `style.css` — tooltip and dashboard styles
- `README.md` — this file