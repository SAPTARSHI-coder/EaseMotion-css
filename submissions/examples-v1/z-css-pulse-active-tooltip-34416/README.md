# CSS Pulse-Active Tooltip (Creative Portfolio)

## What does this do?

A pure CSS tooltip paired with a continuously pulsing indicator dot ("active" state), styled for creative portfolio project grids — zero JavaScript required.

## How is it used?

Wrap a focusable trigger (a real `<button>`, so it's keyboard reachable) containing the pulsing dot, plus the tooltip content, in a `.pulse-wrap`. The tooltip shows on `:hover` and on `:focus-within` (so tabbing to the button reveals it too), while the dot's ping animation runs independently to draw the eye to featured work:

```html
<span class="pulse-wrap">
  <button type="button" class="pulse-trigger pulse-trigger--live" aria-describedby="tip-tidal">
    <span class="pulse-dot" aria-hidden="true"></span>
    <span class="visually-hidden">Project highlight</span>
  </button>
  <span class="pulse-tooltip" id="tip-tidal" role="tooltip">
    Live now &mdash; built with WebGL shaders
  </span>
</span>
```

Timing, easing and pulse scale/color are exposed as custom properties so a portfolio site can retheme it without touching the animation logic:

```css
:root {
  --pulse-duration: 1.8s;
  --pulse-easing: ease-out;
  --pulse-scale: 2.4;
  --pulse-color: rgba(217, 70, 239, 0.55);
  --pulse-dot-color: #d946ef;
}
```

Two variant modifiers are included as examples of per-instance overrides via CSS custom properties: `.pulse-trigger--live` (red, for in-progress work) and `.pulse-trigger--new` (green, for recently added pieces).

## Why is it useful?

It's a self-contained, JS-free micro-interaction that fits EaseMotion's animation-first philosophy: the pulsing dot flags featured/live/new work at a glance, and the tooltip supplies the supporting detail on demand without cluttering the grid. It's fully responsive (tooltip re-centers and drops overflow risk on narrow viewports), keyboard accessible via `:focus-within` + `aria-describedby`, and it respects `prefers-reduced-motion`.
