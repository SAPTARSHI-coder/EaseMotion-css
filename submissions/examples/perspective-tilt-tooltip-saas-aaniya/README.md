# 3D Perspective Tilt Tooltip — SaaS Showcase

Closes #46315

## What does this do?

A solid, crisp-shadow tooltip styled for SaaS product showcase layouts, tilting in on a 3D perspective when its trigger is hovered or focused and settling flat as it becomes visible — a single CSS transition, no JavaScript.

## How is it used?

```html
<div class="tilt-tooltip-saas">
  <button class="tilt-tooltip-saas__trigger" type="button">Learn more</button>
  <div class="tilt-tooltip-saas__bubble">
    <span class="tilt-tooltip-saas__title">Team Analytics</span>
    <span class="tilt-tooltip-saas__body">Track usage and engagement across your entire workspace in real time.</span>
  </div>
</div>
```

Hovering or tab-focusing `.tilt-tooltip-saas__trigger` reveals the adjacent `.tilt-tooltip-saas__bubble`, animating from a perspective-rotated, scaled-down state to flat and fully visible.

Timing, easing, tilt angle, and reveal scale are exposed as CSS custom properties, so consumers can override them per instance:

```html
<div class="tilt-tooltip-saas" style="--ease-tilt-saas-duration: 450ms; --ease-tilt-saas-angle: 20deg; --ease-tilt-saas-scale: 1.04;">
  <button class="tilt-tooltip-saas__trigger" type="button">Pricing details</button>
  <div class="tilt-tooltip-saas__bubble">
    <span class="tilt-tooltip-saas__title">Pro Plan</span>
    <span class="tilt-tooltip-saas__body">Unlocks unlimited projects, priority support, and custom integrations.</span>
  </div>
</div>
```

## Why is it useful?

SaaS product pages lean on tooltips constantly to explain features and plans without cluttering the layout. This variant matches that aesthetic directly — a solid white card, crisp drop shadow, and an accent top-border — paired with a distinctive 3D perspective-tilt reveal instead of a flat fade or slide.

- Needs **no JavaScript** — the whole effect is a single CSS `transition` on `transform`/`opacity`, using native `:hover`/`:focus-visible` and the adjacent-sibling selector.
- Is keyboard accessible: the trigger is a real `<button>`, and `:focus-visible` triggers the same tilt reveal as mouse hover.
- Exposes `--ease-tilt-saas-duration`, `--ease-tilt-saas-curve`, `--ease-tilt-saas-angle`, `--ease-tilt-saas-scale`, and `--ease-tilt-saas-perspective` as custom properties, so consumers can tune timing, easing, tilt depth, and scale without touching the source CSS.
- Respects `prefers-reduced-motion` by skipping the 3D rotation and only cross-fading for users who've opted out of motion.
- Is responsive down to narrow viewports.
- Uses `ease-` prefixed variable names per the library's convention.

## Files

- `demo.html` — self-contained demo with a default and a customized example, opens directly in a browser
- `style.css` — raw CSS (uses `ease-` prefixed variable names; exposes custom properties for timing/easing/scale per the issue's requirement)
- `README.md` — this file