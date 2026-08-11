# Navbar Hover Touch Guard Fix — Issue #8476

**Fixes:** #8476

## What does this do?

Wraps the `.ease-navbar-glass .ease-navbar-item:hover` rule in
`@media (hover: hover) and (pointer: fine)` to prevent sticky hover on
touch devices.

## The problem

In `components/navbar.css`, the base hover rule has no pointer guard:

```css
/* Current — fires on touch tap */
.ease-navbar-glass .ease-navbar-item:hover {
  color: var(--ease-color-text, #1e293b);
}
```

On touch devices, browsers synthesise a `:hover` state when a user taps an
element. This synthetic hover does not end when the finger lifts — it persists
until focus moves elsewhere. This causes nav items to appear permanently
"active" in colour after a single tap, which is confusing and misleading to
users.

## How to reproduce the bug

1. Open any page with `.ease-navbar-glass` in Chrome DevTools.
2. Enable Device Toolbar and select any mobile preset.
3. Tap a `.ease-navbar-item` link.
4. Lift your finger — the color stays stuck on the hover state.

## The fix

Wrap the hover rule in the standard pointer guard used by every other
interactive component in the framework:

```css
@media (hover: hover) and (pointer: fine) {
  .ease-navbar-glass .ease-navbar-item:hover {
    color: var(--ease-color-text, #1e293b);
  }
}
```

- `hover: hover` — matches only devices that support true hovering
- `pointer: fine` — matches only precise pointing devices (mouse, trackpad)

Together they ensure touch devices never receive the hover colour change.

## Why this fits EaseMotion CSS

Every other interactive component already uses this guard:

| Component | Guard applied? |
|---|---|
| `buttons.css` — all 6 variants | ✅ Yes |
| `cards.css` — all hover variants | ✅ Yes |
| `core/base.css` — `a:hover` | ✅ Yes |
| `navbar.css` — `.ease-navbar-item:hover` | ❌ Missing — this fix |

This is a one-line correction to make the navbar consistent with the rest of
the framework.

## Behaviour after the fix

| Device | Before | After |
|---|---|---|
| Desktop mouse | ✅ Hover works | ✅ Hover works |
| Touch device | ❌ Sticky hover on tap | ✅ No colour change on tap |
