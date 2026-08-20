# Elastic-Slide Badge for Gaming Hub Layouts

A pure CSS/HTML rank-badge component that slides in from off-screen with a
springy, elastic overshoot, then settles into a soft ambient pulse. Built for
gaming hub / dashboard layouts (player ranks, achievement rows, leaderboards).

No JavaScript is required — the entrance, stagger, progress-bar fill, and
idle pulse are all driven by CSS keyframes.

## Files

- `demo.html` — standalone showcase page with five example badges
- `style.css` — the component styles
- `README.md` — this file

## Usage

```html
<link rel="stylesheet" href="style.css" />

<article class="em-badge em-badge--gold" style="--em-badge-delay: 140ms;" tabindex="0">
  <div class="em-badge__icon" aria-hidden="true">🥇</div>
  <div class="em-badge__body">
    <span class="em-badge__tier">Gold II</span>
    <span class="em-badge__meta">410 XP to next rank</span>
    <div class="em-badge__progress"><span style="--em-progress: 78%;"></span></div>
  </div>
</article>
```

Wrap several badges in `.em-badge-grid` for a responsive auto-fit layout, and
give each one an increasing `--em-badge-delay` (e.g. `0ms`, `140ms`, `280ms`)
to stagger their entrance.

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--em-badge-delay` | `0ms` | Per-badge entrance delay, used to stagger a group |
| `--em-progress` | `60%` | Fill amount of the badge's progress bar |
| `--em-slide-distance` | `140px` | Distance the badge travels in from |
| `--em-slide-duration` | `900ms` | Duration of the elastic entrance animation |
| `--em-slide-ease` | `cubic-bezier(0.16, 1.4, 0.3, 1)` | Overshoot/elastic easing curve |
| `--em-stagger-step` | `140ms` | Suggested spacing between staggered delays |
| `--em-glow-duration` | `2.4s` | Period of the idle icon pulse |
| `--em-badge-accent` | `var(--em-cyan)` | Accent color for icon, glow, and progress fill |
| `--em-badge-accent-soft` | `rgba(38,229,209,.18)` | Soft background tint derived from the accent |

## Tier variants

Five ready-made accent variants are included, each overriding
`--em-badge-accent` / `--em-badge-accent-soft`:

- `.em-badge--bronze`
- `.em-badge--silver`
- `.em-badge--gold`
- `.em-badge--diamond`
- `.em-badge--legend`

Add your own tier by setting the two custom properties on any class or
inline `style` attribute — no CSS edits required.

## Features

- **Elastic slide-in**: badges enter from the left with a bounce/overshoot,
  driven entirely by a custom cubic-bezier curve — no external animation library.
- **Trailing streak**: a soft gradient sweep trails the badge as it slides in,
  reinforcing the sense of motion and momentum.
- **Staggered groups**: each badge accepts its own `--em-badge-delay`, so a
  row of badges can cascade in one after another.
- **Animated progress bar**: the XP/progress bar fills in right as the badge
  settles into place.
- **Ambient idle pulse**: once settled, each badge's icon emits a slow,
  subtle glow so the hub still feels alive.
- **Interactive re-trigger**: hovering or focusing a badge replays a quick
  directional nudge, giving keyboard and mouse users the same feedback.
- **Fully responsive**: the grid auto-fits from a multi-column hub down to a
  single column on mobile, and the slide distance shortens on small screens.
- **Accessible by default**: badges are focusable (`tabindex="0"`) with a
  visible focus ring, and a `prefers-reduced-motion` query disables all
  motion (entrance, streak, pulse, nudge) in favor of an instant, static state.

## Browser support

Uses `color-mix()` for accent-derived borders/fills, supported in all
current evergreen browsers (Chrome/Edge 111+, Firefox 113+, Safari 16.2+).
On older browsers the borders simply fall back to the accent color at full
opacity — the component still renders and animates correctly.
