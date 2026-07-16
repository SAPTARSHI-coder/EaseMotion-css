# 3D Perspective Tilt Tooltip — Modern SaaS

Closes #46310

## What does this do?

A gradient-bordered, pill-shaped tooltip styled for modern SaaS product layouts, tilting in on a 3D perspective when its trigger is hovered or focused and settling flat as it becomes visible — a single CSS transition, no JavaScript.

## How is it used?

```html
<div class="tilt-tooltip-modern">
  <button class="tilt-tooltip-modern__trigger" type="button">Get Started</button>
  <div class="tilt-tooltip-modern__bubble">
    <span class="tilt-tooltip-modern__title">Onboard in minutes</span>
    <span class="tilt-tooltip-modern__body">No credit card required. Set up your workspace and invite your team instantly.</span>
  </div>
</div>
```

Hovering or tab-focusing `.tilt-tooltip-modern__trigger` reveals the adjacent `.tilt-tooltip-modern__bubble`, animating from a perspective-rotated, scaled-down state to flat and fully visible.

Timing, easing, tilt angle, and reveal scale are exposed as CSS custom properties, so consumers can override them per instance:

```html
<div class="tilt-tooltip-modern" style="--ease-tilt-modern-duration: 400ms; --ease-tilt-modern-angle: 22deg; --ease-tilt-modern-scale: 1.05;">
  ...
</div>
```

## Why is it useful?

Modern SaaS marketing and onboarding surfaces increasingly lean on soft gradients, pill-shaped buttons, and glowing accents rather than flat cards. This variant matches that aesthetic directly — a gradient-bordered pill trigger, a gradient-clipped title, and a soft colored glow — paired with a distinctive 3D perspective-tilt reveal instead of a flat fade or slide.

- Needs **no JavaScript** — the whole effect is a single CSS `transition` on `transform`/`opacity`, using native `:hover`/`:focus-visible` and the adjacent-sibling selector.
- Is keyboard accessible: the trigger is a real `<button>`, and `:focus-visible` triggers the same tilt reveal as mouse hover.
- Exposes `--ease-tilt-modern-duration`, `--ease-tilt-modern-curve`, `--ease-tilt-modern-angle`, `--ease-tilt-modern-scale`, and `--ease-tilt-modern-perspective` as custom properties, so consumers can tune timing, easing, tilt depth, and scale without touching the source CSS.
- Respects `prefers-reduced-motion` by skipping the 3D rotation and only cross-fading for users who've opted out of motion.
- Is responsive down to narrow viewports.
- Uses `ease-` prefixed variable names per the library's convention.

## Files

- `demo.html` — self-contained demo with a default and a customized example, opens directly in a browser
- `style.css` — raw CSS (uses `ease-` prefixed variable names; exposes custom properties for timing/easing/scale per the issue's requirement)
- `README.md` — this file

## Note on related submissions

This repo has several similarly-titled tilt-tooltip issues (glassmorphism, SaaS showcase, dashboard analytics, modern SaaS). This submission is deliberately styled distinctly from `perspective-tilt-tooltip-saas` (#46315) — using a gradient border, pill shape, and gradient-clipped text instead of a solid white card with a flat accent border — to avoid duplicating that variant's visual treatment.
