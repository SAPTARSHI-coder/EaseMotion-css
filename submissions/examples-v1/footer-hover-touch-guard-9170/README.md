# Footer Hover Touch Guard Fix — Issue #9170

**Fixes:** #9170

## What does this do?

Wraps `.ease-footer-links a:hover` and `.ease-footer-social a:hover` in
`@media (hover: hover) and (pointer: fine)` to prevent sticky hover on touch
devices.

## The problem

`components/footer.css` has two unguarded hover rules:

```css
/* Line 51 — fires on touch tap */
.ease-footer-links a:hover {
  color: var(--ease-color-primary, #6366f1);
}

/* Line 78 — fires on touch tap, transform gets stuck */
.ease-footer-social a:hover {
  background: var(--ease-color-primary, #6366f1);
  color: #fff;
  transform: translateY(-2px);
}
```

On touch devices, browsers synthesise a `:hover` event when a user taps. This
synthetic hover does not end when the finger lifts — it sticks until focus moves
elsewhere. Tapping a footer link makes it turn primary-purple and stay that color.
Tapping a social icon makes it turn purple, shift 2px upward, and stay in that
raised position — a visible layout disruption.

## The fix

```css
@media (hover: hover) and (pointer: fine) {
  .ease-footer-links a:hover {
    color: var(--ease-color-primary, #6366f1);
  }
}

@media (hover: hover) and (pointer: fine) {
  .ease-footer-social a:hover {
    background: var(--ease-color-primary, #6366f1);
    color: #fff;
    transform: translateY(-2px);
  }
}
```

Same pattern used by buttons, cards, and navbar across the framework.

## Behaviour after fix

| Interaction | Device | Before | After |
|---|---|---|---|
| Tap footer link | Touch | Color stuck at primary | No change |
| Hover footer link | Mouse | Color changes | Color changes (unchanged) |
| Tap social icon | Touch | Purple + shifted up, stuck | No change |
| Hover social icon | Mouse | Purple + shifts up | Purple + shifts up (unchanged) |

## Demo

Open in Chrome DevTools with Device Toolbar enabled to see the broken vs
fixed behaviour side by side.
