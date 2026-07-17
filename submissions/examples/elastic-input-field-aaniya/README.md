# Elastic Input Field — Neumorphism

Closes #41547

## What does this do?

A neumorphic (soft-UI) input field that "pops" with an elastic bounce when it gains focus, transitioning from a raised shadow to a gently pressed-in shadow — all with a single CSS animation, no JavaScript.

## How is it used?

```html
<div class="elastic-field">
  <label class="elastic-field__label" for="name">Full Name</label>
  <input
    class="elastic-field__input"
    type="text"
    id="name"
    placeholder="e.g. Maya Chen"
  />
</div>
```

Clicking or tab-focusing the `.elastic-field__input` triggers a one-shot elastic bounce (`ease-elastic-pop`) and the shadow shifts from raised to inset, giving the pressed-in neumorphic look while focused.

## Why is it useful?

Input fields are one of the most reused primitives in any UI kit, and this variant delivers the requested Neumorphism style — soft, dual-toned shadows that make the field look carved out of the background — while adding a distinct elastic "pop" on focus rather than a flat border-color change.

- Needs **no JavaScript** — the whole effect is a single CSS `@keyframes` animation triggered by `:focus`.
- Is keyboard accessible: uses a real `<input>` element with `:focus-visible` support, so keyboard users get the same pop as mouse users.
- Respects `prefers-reduced-motion` by disabling the animation for users who've opted out of motion.
- Is responsive down to narrow viewports.
- Uses `ease-` prefixed variable and keyframe names per the issue's requirement.

## Files

- `demo.html` — self-contained demo, opens directly in a browser
- `style.css` — raw CSS (uses `ease-` prefixed variable/keyframe names per the issue's explicit requirement)
- `README.md` — this file