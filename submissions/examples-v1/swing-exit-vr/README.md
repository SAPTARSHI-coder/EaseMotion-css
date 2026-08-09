# Swing Exit Animation — EaseMotion CSS

A pure HTML + CSS demo of a **Swing Exit** animation: a card that hangs from
its top edge, swings left and right like a pendulum losing momentum, then
falls downward while fading out of view.

No JavaScript. No frameworks. Just semantic HTML and well-commented CSS.

---

## What This Animation Does

When a user hovers over the white card, it plays a ~1 second exit sequence:

1. **Rotates around its top center** — the card's `transform-origin` is set
   to `top center`, so it behaves like it's hinged at the top edge instead
   of rotating from its middle.
2. **Swings left, then right** — a series of keyframes alternate the
   rotation angle (`-10deg → 8deg → -6deg → 5deg → 3deg`) to simulate a
   pendulum motion that gradually loses amplitude, just like a sign
   swinging after being pushed.
3. **Falls while fading** — as the swing progresses, the card is
   simultaneously translated downward (`translateY`) and its `opacity`
   decreases, so by the final keyframe it has dropped out of view and
   disappeared entirely.
4. **Custom cubic-bezier easing** — `cubic-bezier(0.6, -0.28, 0.735, 0.045)`
   gives the motion a springy, slightly overshooting acceleration curve
   rather than a flat linear fall, which is what makes it read as
   "swinging" instead of just "sliding down."

The whole effect runs in around **1 second**, using `animation-fill-mode:
forwards` so the card holds its final (invisible, dropped) position for as
long as the hover is sustained.

---

## How to Use It

1. Open `demo.html` in any modern browser (Chrome, Firefox, Safari, Edge).
2. Hover your mouse over the white card.
3. Watch it swing and drop away. Move your mouse off the card to reset it
   back to its resting position.

### Reusing the animation in your own project

Copy the `.card`, `.card:hover`, and `@keyframes swingExit` rules from
`style.css` into your stylesheet, then apply the `card` class (or rename
it) to any element you want to animate. The only requirements are:

- The element must have `transform-origin: top center;`
- The hover trigger (or any trigger class you swap it for) must apply the
  `animation: swingExit 1s cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards;`
  rule.

You can also swap the `:hover` trigger for a manually toggled class (e.g.
added via JavaScript on a button click) if you want the exit to fire on an
action instead of a hover — the keyframes themselves don't change.

---

## Why It's Useful

- **No JavaScript required** — the entire interaction, including the
  multi-stage swinging motion, is achieved with CSS keyframes and a single
  pseudo-class trigger. This keeps the effect lightweight, dependency-free,
  and easy to drop into any project.
- **Reusable exit pattern** — "swing and drop" is a common UI pattern for
  dismissing cards, notifications, modals, or list items in a way that
  feels more tactile and premium than a simple fade-out.
- **Fully responsive** — the layout uses flexible units and a media query
  so the card and its animation scale gracefully on smaller viewports.
- **Clean, semantic markup** — using `<main>`, `<section>`, `<header>`,
  and `<footer>` keeps the demo accessible and easy to extend without
  relying on generic `<div>` soup.

---

## File Structure

```
submissions/examples/swing-exit-vr/
├── demo.html   → Semantic HTML structure
├── style.css   → All styling + swing exit keyframes (well commented)
└── README.md   → This file
```
