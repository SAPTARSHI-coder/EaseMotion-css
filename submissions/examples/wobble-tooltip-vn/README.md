# Wobble-Focus Glass Tooltip

**Submission ID:** `wobble-tooltip-vn`
**Track:** Standard (HTML/CSS) — `submissions/examples/`

## What does this do?
A pure-CSS, zero-JavaScript tooltip that appears on hover or keyboard
focus with a springy "wobble-focus" transition (a slight overshoot in
scale and rotation before settling), rendered with a glassmorphism
surface (blur, translucency, soft border) on top of any background.

## How is it used?
Wrap a trigger element and a `role="tooltip"` element together, and
link them with `aria-describedby` for accessibility:

```html
<div class="tooltip-wrap">
  <button class="tooltip-trigger" aria-describedby="tt-1">
    Hover / Focus me
  </button>
  <span class="tooltip-bubble" role="tooltip" id="tt-1">
    Helpful tooltip text
  </span>
</div>
```

Add `.tooltip-bottom`, `.tooltip-left`, or `.tooltip-right` on the
`.tooltip-bubble` element to change which side it appears on
(default is top). All animation parameters are exposed as CSS custom
properties and can be overridden per-instance:

```html
<div class="tooltip-wrap"
     style="--tooltip-duration: 1.1s;
            --tooltip-easing: cubic-bezier(0.2, 2.6, 0.4, 1);
            --tooltip-scale-start: 0.5;
            --tooltip-wobble-rotate: 10deg;">
  ...
</div>
```

Available custom properties: `--tooltip-duration`, `--tooltip-delay`,
`--tooltip-easing`, `--tooltip-scale-start`, `--tooltip-scale-end`,
`--tooltip-offset`, `--tooltip-wobble-rotate`, `--tooltip-bg`,
`--tooltip-border`, `--tooltip-text`, `--tooltip-blur`,
`--tooltip-radius`, `--tooltip-shadow`.

## Why is it useful?
EaseMotion CSS is about expressive, zero-JS animation states, and
tooltips are one of the most commonly reused UI primitives. This
component:

- Ships with **no JavaScript** — visibility is driven entirely by
  `:hover` / `:focus-visible` and the adjacent-sibling combinator.
- Is **keyboard accessible**: it responds to `:focus-visible`, uses
  `role="tooltip"` + `aria-describedby`, and keeps a visible focus
  ring as a fallback.
- Respects `prefers-reduced-motion` by dropping the scale/rotation
  wobble and keeping a plain fade.
- Is fully **parameterized** via CSS custom properties, so consumers
  can retheme timing, easing, scale, and glass appearance without
  touching the source rules — fitting EaseMotion's philosophy of
  configurable, composable motion primitives.

## Notes for the maintainer
- Class names are left as-is (`tooltip-wrap`, `tooltip-trigger`,
  `tooltip-bubble`, `tooltip-bottom/left/right`) per the "contributors
  don't need to pre-standardize" guidance — happy to have these
  renamed to `ease-*` during integration.
- `demo.html` is self-contained and opens directly in a browser with
  no build step, server, or CDN dependency.