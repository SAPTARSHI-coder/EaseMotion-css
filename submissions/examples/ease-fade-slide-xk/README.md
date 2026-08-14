# ease-fade-slide-xk

Combined fade-in and slide entrance animation, configurable by direction.

Resolves: #35127

## Overview

A single reusable entrance-animation utility: elements fade in while
sliding from a configurable direction (up, down, left, or right). Direction
is set purely via a `data-direction` attribute, so the same CSS class works
for any entrance direction without extra modifier classes.

## Markup

```html
<div class="ease-fade-slide-xk" data-direction="up">
  Slide Up
</div>
```

Valid `data-direction` values: `up`, `down`, `left`, `right`.

Add the `is-in` class (via JS — on click, scroll, or any other trigger) to
play the entrance:

```js
element.classList.add('is-in');
```

To replay the animation on the same element, remove `is-in`, force a reflow,
then re-add it (see `demo.html`'s `playEntrance()` helper).

## CSS Variables

| Variable         | Default   | Description                                  |
|--------------------|-----------|--------------------------------------------------|
| `--efs-distance`  | `32px`    | Distance the element travels during the slide      |
| `--efs-speed`     | `0.5s`    | Duration of the fade + slide transition             |
| `--efs-color`     | `#7c5cff` | Accent color blended into the element's border      |

Example override:

```html
<div class="ease-fade-slide-xk" data-direction="up"
     style="--efs-distance: 60px; --efs-speed: 0.9s; --efs-color: #7c5cff;">
  Large offset + slow
</div>
```

## How Direction Works

The `[data-direction]` attribute selector sets the element's initial
`transform` (e.g. `data-direction="up"` starts at
`translateY(var(--efs-distance))`, so it slides upward into place). When
`.is-in` is added, the element transitions to `opacity: 1` and
`transform: translate(0, 0)`, using a `cubic-bezier(0.22, 1, 0.36, 1)`
easing for a natural deceleration.

## Interactive Triggers (Acceptance Criteria)

Two patterns are demonstrated in `demo.html`:

1. **Click** — four cards (one per direction) play their entrance on page
   load; a "Replay" button per card removes and re-adds `is-in` (with a
   forced reflow) to retrigger the animation on demand.
2. **Scroll** — a stack of three boxes, each with a different direction,
   animate in via `IntersectionObserver` (threshold 0.4) as they enter the
   viewport.

A third section shows two customized instances with different distance,
speed, and accent color values applied purely through CSS variables.

## Accessibility

- Purely visual entrance animation — no content is hidden from assistive
  technology at any point (`opacity: 0` elements remain in the accessibility
  tree; only their initial fade is visual).
- Respects `prefers-reduced-motion: reduce` by collapsing the transition
  duration to near-zero, so content still appears without the motion.
- Replay buttons are real, keyboard-focusable `<button>` elements with a
  visible `:focus-visible` outline.

## Files

- `demo.html` — click-to-replay showcase (all 4 directions), a
  scroll-triggered stack, and a CSS-variable customization example.
- `style.css` — the component, per-direction transform rules, the `is-in`
  revealed state, responsive rules, and reduced-motion handling.
- `README.md` — this file.