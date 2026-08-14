# Smooth Accordion (fixes #57533)

Fixes: accordion panels with different amounts of content used to jump to
their full height instead of animating smoothly.

## Root cause

The old approach animated `max-height` toward a large fixed guess (e.g.
`max-height: 1000px`). Because the transition duration is fixed but the
*actual* content height varies per panel, short panels finish early while
tall panels either overshoot the easing curve or visually "snap" once they
hit their real height — this reads as a jump.

## Fix

Animate the CSS grid track instead of `max-height`:

```css
.accordion-content {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s ease;
}
.accordion-content-inner {
  overflow: hidden;
  min-height: 0;
}
.accordion-content.is-open {
  grid-template-rows: 1fr;
}
```

`grid-template-rows: 0fr → 1fr` is animatable and resolves against the
row's real intrinsic content size, so every panel — regardless of how much
content it holds — animates to its own correct height. No JS height
measurement, no magic pixel values, no per-panel tuning.

## Browser support

Animating `grid-template-rows` works in all evergreen browsers: Chrome 66+,
Firefox 66+, Safari 14.1+. Covers the Chrome 138 environment from the bug
report and effectively all current usage.

## No JavaScript

Open/close state uses the checkbox hack instead of a script:

```html
<input type="checkbox" id="acc-1" class="accordion-toggle" />
<label for="acc-1" class="accordion-header">Question 1</label>
<div class="accordion-content">...</div>
```

```css
.accordion-toggle:checked ~ .accordion-content {
  grid-template-rows: 1fr;
}
```

The checkbox is visually hidden (not `display: none`, so it stays keyboard-
and screen-reader-accessible) and the `<label>` acts as the clickable
header. This matches the framework's zero-dependency, no-build-step
philosophy, and lines up with the roadmap item "CSS-only accordion & tabs."

## Files

- `demo.html` — three accordion panels (short / long / medium content),
  no `<script>` tag
- `style.css` — the fix, plus base styling for the demo

## Notes for integration

- Naming here is illustrative (`accordion-header`, `accordion-content`,
  etc.) — happy to have it renamed to `ease-*` conventions on integration.
- Respects `prefers-reduced-motion`.
- Keyboard accessible: the hidden checkbox is still tab-focusable and
  toggled with Space/Enter via its `<label>`, with a visible focus ring.
- No accordion component currently exists in `core/` or `components/`
  (roadmap lists "CSS-only accordion & tabs" as planned for v1.3), so this
  can also serve as a first reference implementation, not just a bugfix.