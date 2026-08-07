# 3D Flip Tabs — Responsive Dashboard

A pure CSS tabs component with a 3D flip transition, styled for a dashboard time-range switcher (Today / This Week / This Month). Unlike a single flipping panel, switching the range here flips **an entire grid of widget cards at once**, each with its own staggered delay. No JavaScript required.

## What it does

- Three widget cards (Revenue, New users, Errors) sit in a grid. Switching the time-range tab swaps in that range's values and flips all three cards in on their Y axis, one after another, using a per-card `animation-delay`.
- The active tab fills with a two-color gradient, echoed in each widget's icon chip, tying the range switcher and the data cards to the same accent.
- Panel switching and the staggered flip are handled entirely with the `:has()` CSS selector reacting to native radio input state — zero JS.

## How it works

- Each range is a hidden `<input type="radio">` paired with a `<label>`. Radios sharing a `name` give native keyboard support for free (`Tab` focuses the group, arrow keys move between ranges).
- Each time range's three widgets live in their own wrapper (`#range-today`, `#range-week`, `#range-month`) styled with `display: contents`, so they act as direct children of the CSS grid layout without adding an extra layout box.
- All widgets are `display: none` by default; `.tabs-grid:has(#tab-x:checked) #range-x .tabs-grid__widget { display: block; animation: ...; }` reveals only the matching range's three cards.
- Each revealed card's `animation-delay` is set by `nth-child` position (`0`, `--tabs-stagger`, `--tabs-stagger × 2`), producing the cascading flip.
- `perspective` on `.tabs-grid__widgets` gives every card's `rotateY()` real 3D depth; `backface-visibility: hidden` avoids a mirrored flash mid-flip.

## Customization

All animation and color values are exposed as CSS custom properties on the `.tabs-grid` wrapper:

| Property | Default | Controls |
|---|---|---|
| `--tabs-duration` | `480ms` | Flip animation length per card |
| `--tabs-stagger` | `80ms` | Delay between each card's flip in the cascade |
| `--tabs-easing` | `cubic-bezier(0.3, 0.7, 0.4, 1)` | Easing curve |
| `--tabs-flip-angle` | `90deg` | Starting Y-axis rotation before each card settles flat |
| `--tabs-perspective` | `900px` | 3D perspective depth |
| `--tabs-radius` | `12px` | Corner radius |
| `--tabs-accent-a` / `--tabs-accent-b` | `#8b5cf6` / `#06b6d4` | Gradient accent (active tab, widget icon chips) |
| `--tabs-bg` / `--tabs-card-bg` | `#0f1419` / `#171d25` | Background surfaces |
| `--tabs-text` / `--tabs-text-dim` | light / muted | Text colors |

Example override:

```html
<div class="tabs-grid" style="--tabs-stagger: 140ms; --tabs-accent-a: #f59e0b; --tabs-accent-b: #ef4444;">
  ...
</div>
```

## Accessibility

- Built on native radio inputs, so keyboard navigation (Tab in, arrow keys between ranges) works without any custom JS.
- `role="tablist"` / `role="tab"` and `aria-selected` are set on the markup.
- A visible focus ring is applied to the active tab via `:focus-visible` on the (visually hidden) input.
- Respects `prefers-reduced-motion` by disabling both the tab-chip transition and every card's flip animation — the correct values still display, just without the cascade.
- The widget grid collapses to a single column on narrow viewports.

## Why it fits EaseMotion

Adds a zero-JS, CSS-custom-property-driven 3D flip pattern in the dashboard aesthetic requested in issue #50063 — using a staggered multi-card flip (distinct from a typical single-panel flip), responsive down to mobile, keyboard accessible via native radio grouping, and fully retheme-able through custom properties.