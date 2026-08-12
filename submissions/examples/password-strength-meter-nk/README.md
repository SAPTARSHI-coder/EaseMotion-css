# Password Strength Meter — `password-strength-meter-nk`

## 1. What does this do?

An animated password strength meter that evaluates input in real time and renders four segmented strength bars with EaseMotion-style bounce, pulse, and shake transitions — plus a live requirement checklist and confirm-password match feedback, all driven by CSS transitions off `data-*` attributes.

---

## 2. How is it used?

### HTML structure

```html
<!-- Strength bar segments — set data-strength via JS -->
<div class="psm-bars" data-strength="strong">
  <div class="psm-bar psm-bar--1"></div>
  <div class="psm-bar psm-bar--2"></div>
  <div class="psm-bar psm-bar--3"></div>
  <div class="psm-bar psm-bar--4"></div>
</div>

<!-- Animated strength label -->
<span class="psm-strength-label">
  <span class="psm-strength-text psm-strength-text--empty">Enter a password</span>
  <span class="psm-strength-text psm-strength-text--weak">Weak</span>
  <span class="psm-strength-text psm-strength-text--fair">Fair</span>
  <span class="psm-strength-text psm-strength-text--good">Good</span>
  <span class="psm-strength-text psm-strength-text--strong">Strong</span>
</span>

<!-- Requirement checklist — set data-met="true/false" via JS -->
<ul class="psm-checklist">
  <li class="psm-check psm-check--length" data-met="true">
    <span class="psm-check-icon"></span>
    At least 8 characters
  </li>
  <li class="psm-check psm-check--upper" data-met="false">
    <span class="psm-check-icon"></span>
    One uppercase letter
  </li>
</ul>
```

### Strength states

| `data-strength` value | Bars lit | Color  |
|-----------------------|----------|--------|
| `weak`                | 1        | Red    |
| `fair`                | 2        | Amber  |
| `good`                | 3        | Blue   |
| `strong`              | 4        | Green  |

### JS bridge (minimal — only sets data attributes)

```js
const levels = ['', 'weak', 'fair', 'good', 'strong'];

input.addEventListener('input', function () {
  const s = computeScore(this.value); // returns 0–4
  bars.setAttribute('data-strength', levels[s]);
  checkLength.setAttribute('data-met', this.value.length >= 8);
  // ... repeat for other checks
});
```

All visual transitions — bar fill, bounce pop, label slide, checklist checkmarks, pulse glow, confirm shake — are pure CSS. The JS only sets `data-strength` and `data-met` attributes.

---

## 3. Why is it useful?

Password fields are one of the highest-friction points in any sign-up flow. Most implementations either have no feedback at all or rely on heavy JS libraries for animation.

This component fits EaseMotion's philosophy because:

- **Motion is the message.** The staggered bar-pop bounce, the continuous `pulse-glow` on the final "strong" bar, and the `shake` on a confirm mismatch all communicate meaning through motion — not just color alone.
- **CSS does the heavy lifting.** All transitions, keyframes, and state changes are CSS-driven off `data-*` attributes. The JS is a thin 30-line bridge that could be replaced by any framework (React `useState`, Alpine.js `x-bind`, etc.) without touching the stylesheet.
- **Accessible by default.** The bar uses `role="progressbar"` with `aria-valuenow` / `aria-valuetext` updated by the bridge. The checklist uses semantic `<ul>` with an `aria-label`. The label transitions are `position: absolute` overlaps so screen readers read the live text, not the hidden stack.
- **Zero dependencies.** Open `demo.html` directly in any modern browser — no server, no CDN, no build step.

---

## Animations used

| Animation         | Trigger                          | Effect                                      |
|-------------------|----------------------------------|---------------------------------------------|
| `psm-fade-up`     | Card / checklist on page load    | Fade + slide up entrance                    |
| `psm-bar-pop`     | Each bar segment when lit        | Bounce scale pop with staggered delay       |
| `psm-pulse-glow`  | 4th bar when `strong`            | Continuous green glow pulse                 |
| `psm-shake`       | Confirm input on mismatch        | Horizontal shake to signal error            |
| Shimmer sweep     | Submit button on hover           | Light sweep across gradient background      |

---

## Files

```
submissions/examples/password-strength-meter-nk/
├── demo.html   — self-contained demo, works by opening directly in a browser
├── style.css   — all styles and keyframes
└── README.md   — this file
```
