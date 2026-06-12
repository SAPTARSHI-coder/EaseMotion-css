# EaseMotion — Tada Celebration Animation

A classic "tada" celebration effect built in pure CSS. Combines scale and rotation to create a springy, playful pop that signals success, achievement, or reward — without a single line of JavaScript.

---

## What does this do?

The `tada` keyframe animation makes an element briefly **grow and rock left–right** before settling back to its original position. The result is the unmistakable "ta-da!" gesture — an enthusiastic physical reveal that communicates "something good just happened."

The animation runs for **1.1 seconds** and follows this sequence:

| Phase        | Transform                   | Feel               |
| ------------ | --------------------------- | ------------------ |
| Rest         | `scale(1) rotate(0deg)`     | Normal             |
| Pop          | `scale(1.12) rotate(-4deg)` | Surprise jump      |
| Flick right  | `scale(1.12) rotate(+4deg)` | Snap across        |
| Rapid wiggle | `±5deg` × 3 beats           | Celebration energy |
| Settle       | Scale returns to 1          | Breathe out        |
| Land         | `scale(1) rotate(0deg)`     | Back to normal     |

---

## How is it used?

Add the stylesheet to your page and apply one of the utility classes:

```html
<link rel="stylesheet" href="style.css" />

<!-- Plays once on load -->
<div class="tada-effect">🏆</div>

<!-- Plays only on hover — great for interactive badges -->
<button class="tada-effect--hover">Claim Reward</button>

<!-- Loops forever — idle celebration state -->
<span class="tada-effect--loop">★</span>

<!-- Slower (1.4 s) — for large, heavier elements -->
<div class="tada-effect--slow">Achievement Unlocked</div>

<!-- Faster (0.8 s) — for small UI chips or inline badges -->
<span class="tada-effect--fast">+50 XP</span>
```

### All available classes

| Class                | Duration | Trigger         | Use case                           |
| -------------------- | -------- | --------------- | ---------------------------------- |
| `tada-effect`        | 1.1 s    | On load / mount | Success icons, confirmation modals |
| `tada-effect--hover` | 1.1 s    | `:hover`        | CTA buttons, interactive badges    |
| `tada-effect--loop`  | 1.1 s    | Infinite        | Idle reward states, waiting badges |
| `tada-effect--slow`  | 1.4 s    | On load         | Hero icons, large cards            |
| `tada-effect--fast`  | 0.8 s    | On load         | Inline chips, small labels         |

The demo also shows three real-world component classes from the demo card:

| Class                | Purpose                              |
| -------------------- | ------------------------------------ |
| `celebration-icon`   | Large circular icon with warm glow   |
| `achievement-banner` | "Achievement Unlocked" pill label    |
| `success-card`       | Full confirmation card layout        |
| `reward-badge`       | Animated completion badge with delay |

---

## Why is it useful?

### It communicates success with personality

A simple colour change or checkmark tells users something worked. A `tada` animation tells them something _worth celebrating_ happened. The physical metaphor — the brief swell, the exuberant wiggle, the calm return — mirrors how a person actually reacts to good news.

### It works everywhere without dependencies

Pure CSS `@keyframes` with no JavaScript, no build step, no external library. Drop the stylesheet in, add a class, done. Works in every modern browser and degrades gracefully in older ones (the element simply displays without animation).

### It respects user preferences

The stylesheet includes a `prefers-reduced-motion` media query. Users who have requested reduced motion in their OS settings will see the element normally, without any animation. Accessibility built in, not bolted on.

### It covers the right moments

Suitable for:

- **Success confirmations** — form submitted, payment accepted, account created
- **Achievement badges** — milestone reached, level up, streak maintained
- **Completed tasks** — checklist item done, sprint closed, goal hit
- **Reward delivery** — points awarded, coupon unlocked, bonus applied
- **Positive feedback** — quiz answered correctly, score submitted

---

## Files

```
submissions/examples/tada-animation/
├── demo.html    ← Open directly in a browser to see the animation
├── style.css    ← The animation + all utility and component classes
└── README.md    ← This file
```

---

## Browser support

Works in all browsers that support CSS animations (Chrome 43+, Firefox 16+, Safari 9+, Edge 12+). No prefixes required.

---

## License

MIT — part of the EaseMotion open-source animation library.
