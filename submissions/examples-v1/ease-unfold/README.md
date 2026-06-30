# ease-unfold

An **entrance animation** that scales an element open from `scaleY(0)` to
`scaleY(1)` — like a drawer or window blind unfolding downward — while its
real layout height grows alongside it, so nothing else on the page jumps or
overlaps mid-animation.

## Demo

Open `demo.html` in a browser. It includes:

1. **Three FAQ-style drawers** — click any drawer's header to unfold it
   open, click again to close it.
2. **A composable delay example** — click "Unfold all" to open all three
   drawers in a staggered sequence using `.ease-unfold-delay-1/2/3`. "Close
   all" resets them.

## Usage

```html
<div class="drawer-panel">
  <div class="drawer-panel-inner">Content goes here</div>
</div>
```

```js
// measure the real height first, then trigger the animation
panel.style.display = 'block';
const height = panel.scrollHeight;
panel.style.setProperty('--unfold-height', `${height}px`);
panel.classList.add('ease-unfold');
```

```css
.ease-unfold {
  animation: unfold 0.35s ease forwards;
}
```

### Why measure height with JS first?

`transform: scaleY()` is purely visual — it doesn't change how much space an
element reserves in the page's layout. Animating `scaleY` alone would leave
either a permanent gap (full height reserved before the panel visibly grows
into it) or nothing reserved at all (causing a layout jump once the
animation finishes). Measuring the panel's real `scrollHeight` and animating
`height` together with `transform` and `opacity` in the same keyframe keeps
the visual "unfold" and the actual layout space perfectly in sync.

### Staggering multiple drawers

Pair the base class with a delay variant to sequence several openings:

```html
<div class="ease-unfold ease-unfold-delay-1">...</div>
<div class="ease-unfold ease-unfold-delay-2">...</div>
<div class="ease-unfold ease-unfold-delay-3">...</div>
```

## Notes

- `transform-origin: top` keeps the scale anchored at the top edge, so the
  panel grows downward rather than from its center.
- Closing is instant in this demo (no reverse animation) since the
  requested feature is the entrance effect. A matching `ease-fold` exit
  animation would be a natural follow-up.
- Respects `prefers-reduced-motion`: the panel snaps directly to its open
  state with no animation for users who request reduced motion.
- No JS framework dependency — works with plain `classList` toggling, as
  shown in `demo.html`.