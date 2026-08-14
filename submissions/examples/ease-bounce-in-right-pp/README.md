# ease-bounce-in-right-pp

A bouncy entrance animation sliding in from the right with elastic overshoot and customizable distance.

## What does this do?

This animation slides an element in from off-screen right, overshoots past its final destination, rebounds slightly back, and settles smoothly at its origin. It implements a realistic spring effect without JavaScript.

---

## How is it used?

Simply apply the `.ease-bounce-in-right` class to any HTML element:

```html
<div class="ease-bounce-in-right">Hello World</div>
```

### Custom Bounce Distance

You can override the starting translate offset directly via the CSS variable `--ease-bounce-distance`. It accepts both length units (e.g., `px`, `rem`) and percentages (e.g., `%`):

```css
.my-custom-card {
  --ease-bounce-distance: 400px; /* Custom length */
}
```

```html
<div class="ease-bounce-in-right my-custom-card">Custom Off-screen Start</div>
```

### Speed Modifiers

Adjust the duration using the standard EaseMotion speed helper classes:

- `.ease-bounce-in-fast` (500ms duration)
- _(default)_ (800ms duration)
- `.ease-bounce-in-slow` (1200ms duration)

---

## Why is it useful?

It completes the directional bounce-in animation set (up, down, left, right). It is perfect for:

- Slide-out panels or side drawers that need a playful spring entrance.
- Floating toast notifications arriving from the right.
- Contextual side menus, action sheets, or credit card inputs.

---

## Tech Stack

- HTML
- CSS (no frameworks, no JavaScript)

---

## Accessibility

Respects user settings for motion sensitivity: if `prefers-reduced-motion` is active, the animation is skipped and the element immediately displays statically.

---

## Preview

Open `demo.html` directly in your browser to experience the live playground.
