# EaseMotion — `count-up`

Animate integers from `0` to any target value using **pure CSS**.  
No JavaScript. No external libraries. One stylesheet.

---

## What does this do?

`count-up` makes a number visually count up from **0** to a target integer when the page loads — the kind of effect you normally see powering stats dashboards, portfolio pages, and annual-report sites. Here it is implemented entirely in CSS using two modern features:

| Feature     | Role                                                                                                    |
| ----------- | ------------------------------------------------------------------------------------------------------- |
| `@property` | Registers `--num` as a typed `<integer>` so the browser can interpolate it smoothly inside `@keyframes` |
| `counter()` | Reads the live integer value of `--num` on every animation frame and renders it as visible text         |

Neither technique requires JavaScript. The combination is what makes the animation possible: `@property` unlocks numeric interpolation; `counter()` converts that interpolated value into a rendered digit string every frame.

---

## How is it used?

### 1 · Link the stylesheet

```html
<link rel="stylesheet" href="style.css" />
```

### 2 · Add a card

```html
<article class="stat-card" style="--num-end: 125;">
  <div class="num" aria-label="125"></div>
  <p class="label">Projects Completed</p>
</article>
```

The only required customisation is the inline `--num-end` custom property — set it to whatever integer you want the counter to reach.

### 3 · Optional: per-card accent colour

Pass a `--hue` value (0 – 360) alongside `--num-end` to give each card its own accent colour:

```html
<article class="stat-card" style="--num-end: 450; --hue: 160;">...</article>
```

### 4 · Adjust animation duration

Override `--duration` in `:root` or inline to control speed:

```css
/* globals */
:root { --duration: 2.4s; }

/* per-card override */
<article class="stat-card" style="--num-end: 5; --duration: 1s;">
```

---

## How it works (technical detail)

```css
/* Step 1 — register the property as a typed integer */
@property --num {
  syntax: "<integer>";
  initial-value: 0;
  inherits: false;
}

/* Step 2 — animate it */
@keyframes count {
  from {
    --num: 0;
  }
  to {
    --num: var(--num-end);
  }
}

/* Step 3 — render the live value via counter() */
.num::after {
  counter-reset: num var(--num); /* sync the CSS counter to --num    */
  content: counter(num); /* output the integer as text       */
  animation: count var(--duration) cubic-bezier(0.16, 1, 0.3, 1) both;
}
```

Because `--num` is typed, the browser interpolates it like a real number on every frame. `counter-reset` picks up that interpolated integer and `counter()` renders it — giving a smooth count-up with zero JavaScript.

---

## Why is it useful?

**1 · Zero runtime dependency.**  
No JavaScript bundle, no library import, no hydration step. It works in any HTML environment — static sites, server-rendered pages, email-safe widgets, CMS templates.

**2 · Trivially composable.**  
Drop a single `<div class="num">` into any existing card component. The only configuration is one inline CSS variable.

**3 · Accessible by default.**  
The `aria-label` attribute on `.num` surfaces the final value to screen readers before the animation ever begins.

**4 · Respects user preferences.**  
A `prefers-reduced-motion` media query snaps immediately to the final value, so users who have disabled animations never see movement they didn't ask for.

**5 · Future-proof.**  
`@property` and `counter()` are part of the CSS spec and supported in all modern browsers (Chrome 85+, Firefox 128+, Safari 16.4+). No polyfills required.

---

## Browser Support

| Browser       | Version |
| ------------- | ------- |
| Chrome / Edge | 85 +    |
| Firefox       | 128 +   |
| Safari        | 16.4 +  |

Older browsers display the static final value (graceful degradation via `initial-value: 0` resolving at `--num-end` with no animation).

---

## File Structure

```
count-up/
├── demo.html    # Live demo — stats dashboard
├── style.css    # The animation stylesheet (fully commented)
└── README.md    # This file
```

---

## Licence

MIT — free for personal and commercial use.
