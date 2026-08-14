# Swing-Hover Tooltip — Modern SaaS Dashboard

A pure CSS tooltip with a spring-like "swing" entrance animation, styled
for a dark modern SaaS dashboard (violet/teal gradient accent, sidebar
navigation, stat-card metrics). Distinct from the lighter "SaaS Showcase"
example — this one targets an in-app dashboard context rather than a
marketing/pricing page.

## Features

- 🎯 Pure CSS — no JavaScript required
- ⌨️ Keyboard accessible via `:focus-visible`
- 🔄 Four placement variants: top, bottom, left, right
- 🎛️ Customizable timing, easing, scale, offset via CSS variables
- 🧭 Includes a sidebar-nav icon tooltip pattern (right-placement)
- 📊 Includes a stat-card metric tooltip pattern (top-placement info icons)
- 🌓 Dark dashboard theme with violet → teal gradient accent
- 📱 Fully responsive (sidebar collapses to a top bar on mobile)
- 🌀 Respects `prefers-reduced-motion`

## Usage

```html
<div class="tooltip-wrap">
  <button class="tt-trigger" aria-describedby="tt-1">Hover me</button>
  <span class="tt-bubble tt-bubble--top" id="tt-1" role="tooltip">
    Tooltip text here
  </span>
</div>
```

### Sidebar nav icon pattern

```html
<span class="tooltip-wrap tooltip-wrap--right">
  <button class="nav-icon" aria-describedby="tt-nav-1">◆</button>
  <span class="tt-bubble tt-bubble--right" id="tt-nav-1" role="tooltip">Dashboard</span>
</span>
```

### Stat-card metric pattern

```html
<span class="tooltip-wrap">
  <button class="info-icon" aria-describedby="tt-stat-1">i</button>
  <span class="tt-bubble tt-bubble--top" id="tt-stat-1" role="tooltip">
    Monthly recurring revenue, net of churn
  </span>
</span>
```

## Customization

| Variable | Default | Description |
|---|---|---|
| `--tt-duration` | `0.3s` | Animation duration |
| `--tt-easing` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Springy swing easing |
| `--tt-scale` | `0.86` | Starting scale before swing-in |
| `--tt-swing-angle` | `16deg` | Rotation angle of the swing |
| `--tt-offset` | `10px` | Gap between trigger and tooltip |
| `--tt-bg` | `#14b8a6` | Tooltip background (teal) |
| `--tt-accent` | `#8b5cf6` | Violet accent (gradients, CTA) |
| `--tt-accent-2` | `#14b8a6` | Teal accent |

## Accessibility

- Revealed on both `:hover` and `:focus-visible`, so keyboard users get the
  same experience as mouse users.
- Each trigger uses `aria-describedby` pointing to the tooltip's `id`.
- Tooltip element uses `role="tooltip"`.
- Animation disabled for users with `prefers-reduced-motion: reduce`.

## Files

- `demo.html` — sidebar nav, placement showcase, and stat-card dashboard example
- `style.css` — component styles and animation logic
- `README.md` — this file