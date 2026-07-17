# Account Security Card

**Issue:** #35413
**Category:** Card / Dashboard
**Tech:** Pure HTML + CSS — zero JavaScript

---

## What the Component Does

A professional, self-contained account security card inspired by the security dashboards found in GitHub, Google Account, and banking applications. It displays a user's security posture at a glance: a numeric score, an animated progress bar, a status badge, a security checklist showing completed and pending actions, and a primary call-to-action button — all with subtle, purposeful CSS animations and full accessibility support.

---

## Features

- **Security score** — large, visually dominant percentage figure with an animated progress bar that fills on page load.
- **Status badge** — green pill badge displaying the current security status ("GOOD"), easily customizable through CSS classes.
- **Security checklist** — pass (✓) and fail (✕) items styled with colour-coded circular markers using CSS `::before` pseudo-elements and custom properties.
- **Subtle animations** — card fade-slide-up on load, progress bar fill, card hover lift, shield icon scale, button hover lift. None loop; all are purposeful.
- **CSS custom properties** — six root variables (`--primary`, `--success`, `--warning`, `--danger`, `--radius`, `--duration`) make theming straightforward.
- **Reduced-motion safe** — all animations and transitions are disabled when `prefers-reduced-motion: reduce` is set; the progress bar shows its final state immediately.
- **Responsive** — `clamp()` for card width; padding and font-size adjustments at `≤ 480px` and `≤ 360px`.
- **Zero dependencies** — open `demo.html` directly in any modern browser, no build step required.

---

## How to Use

1. Copy the `35413-account-security-card-ks/` folder into your project.
2. Open `demo.html` in any modern browser to preview immediately.

To embed in an existing page:

```html
<!-- 1. Link the stylesheet -->
<link rel="stylesheet" href="style.css" />

<!-- 2. Card markup -->
<article class="security-card">

  <header class="card__header">
    <span class="card__icon" aria-hidden="true"><!-- shield svg --></span>
    <h2 class="card__title">Account Security</h2>
    <span class="badge badge--good">
      <span class="badge__dot" aria-hidden="true"></span>
      GOOD
    </span>
  </header>

  <section class="card__score-section" aria-label="Security score">
    <div class="card__score-row">
      <span class="score__label">Security Score</span>
      <span class="score__value">82%</span>
    </div>
    <div class="progress-bar" role="progressbar"
         aria-valuenow="82" aria-valuemin="0" aria-valuemax="100"
         aria-label="Security score 82 out of 100">
      <div class="progress-bar__fill"></div>
    </div>
  </section>

  <hr class="card__divider" />

  <ul class="card__checklist" aria-label="Security checklist">
    <li class="checklist__item checklist__item--pass">
      <span class="checklist__marker" aria-hidden="true">✓</span>
      <span class="checklist__text">Password Updated</span>
    </li>
    <li class="checklist__item checklist__item--fail">
      <span class="checklist__marker" aria-hidden="true">✕</span>
      <span class="checklist__text">Enable Two-Factor Authentication</span>
    </li>
  </ul>

  <footer class="card__footer">
    <div class="card__meta">
      <span>Last Updated</span>
      <strong>2 hours ago</strong>
    </div>
    <button type="button" class="btn-primary"
            aria-label="Improve your account security">
      Improve Security →
    </button>
  </footer>

</article>
```

To update the score, change `aria-valuenow` on the progress bar and the `--` width value in the `@keyframes bar-fill` rule in `style.css`.

---

## Accessibility

- **Semantic HTML** — `<main>`, `<article>`, `<header>`, `<section>`, `<ul>`, `<li>`, `<footer>`, `<button>`, and `<h2>` are used throughout. No `<div>` soup.
- **Progress bar** — uses `role="progressbar"` with `aria-valuenow`, `aria-valuemin`, `aria-valuemax`, and a descriptive `aria-label` so screen readers announce the score correctly.
- **Checklist** — `<ul>` carries `aria-label="Security checklist"`; decorative markers are `aria-hidden="true"` so screen readers read only the item text.
- **Button** — `aria-label="Improve your account security"` gives the button a full, descriptive name beyond its visible label.
- **Focus indicator** — `:focus-visible` ring on the primary button with a 3px contrasting outline, meeting WCAG 2.1 SC 2.4.7.
- **Reduced motion** — `@media (prefers-reduced-motion: reduce)` disables all keyframe animations and CSS transitions; the progress bar renders at its final 82% width immediately.

---

## CSS Variables

Override any of these on `:root` to theme the component:

| Variable | Default | Description |
|---|---|---|
| `--primary` | `#3b82f6` | Accent colour used for the progress bar and button |
| `--success` | `#22c55e` | Colour for passing checklist items |
| `--warning` | `#f59e0b` | Available for warning states (e.g. "At Risk" badge) |
| `--danger` | `#ef4444` | Colour for failing checklist items |
| `--radius` | `16px` | Border-radius for the card, badge, and button |
| `--duration` | `0.4s` | Base timing used as animation delay offset |

**Example — tighter, warmer theme:**

```css
:root {
  --primary: #f97316;
  --radius:  12px;
  --duration: 0.3s;
}
```

---

## Why It Fits EaseMotion CSS

EaseMotion CSS champions the idea that motion should serve a purpose — communicating state, guiding attention, and confirming interaction rather than running for decoration. Every animation in this component follows that principle:

- The **progress bar fill** draws the eye immediately to the security score, the most important piece of information on the card.
- The **card entrance** uses a single `fade-slide-up` that fires once on load, orienting the user without demanding attention.
- The **hover interactions** on the card, shield icon, and button are transitions that acknowledge user intent — they respond, they don't perform.

The six CSS custom properties (`--primary`, `--success`, `--warning`, `--danger`, `--radius`, `--duration`) map directly onto EaseMotion's design-token philosophy, making the component instantly compatible with any EaseMotion-powered project and trivially themeable.

The component is fully self-contained inside `submissions/examples/35413-account-security-card-ks/` — comprising only `demo.html`, `style.css`, and this `README.md`. No framework files, core styles, or existing components were modified. This follows EaseMotion CSS's submission-first contribution model, where new components are developed and reviewed in isolation before any potential integration into the framework.
