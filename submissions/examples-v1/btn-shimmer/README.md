# ease-btn-shimmer

> Animated shimmer shine button effect · EaseMotion CSS submission  
> Resolves [Issue #2719](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/2719)

---

## What it does

A bright glare strip sweeps left→right across a button surface — the premium shine effect common in hero CTAs, upgrade prompts, and landing page buttons. **Pure CSS. No JavaScript.**

---

## How it works

A `::after` pseudo-element holds a skewed `linear-gradient` glare strip positioned off-screen to the left. A `@keyframes` animation slides it from `left: -100%` to `left: 160%`. `overflow: hidden` on the button clips it cleanly to the button's bounds.

The loop variant wraps the sweep + a pause into a single longer keyframe cycle using `calc()` on the animation duration, so no JavaScript timers are needed.

---

## Classes

| Class                    | Effect                               |
| ------------------------ | ------------------------------------ |
| `.ease-btn-shimmer`      | Shine sweep on `:hover`              |
| `.ease-btn-shimmer-loop` | Continuous shimmer — no hover needed |
| `.ease-btn-shimmer-gold` | Golden glare variant                 |
| `.ease-btn-shimmer-slow` | Slow 1.5s sweep                      |

`.ease-btn-shimmer-gold` and `.ease-btn-shimmer-slow` are modifiers — stack them with `.ease-btn-shimmer` or `.ease-btn-shimmer-loop`.

---

## Usage

```html
<!-- Hover shimmer -->
<button class="ease-btn ease-btn-primary ease-btn-shimmer">
  Get Started →
</button>

<!-- Continuous loop -->
<button class="ease-btn ease-btn-success ease-btn-shimmer-loop">
  ✦ Live Now
</button>

<!-- Gold variant -->
<button class="ease-btn ease-btn-shimmer ease-btn-shimmer-gold">
  ★ Premium
</button>

<!-- Slow sweep -->
<button class="ease-btn ease-btn-shimmer ease-btn-shimmer-slow">
  ◈ Discover
</button>

<!-- Combine freely -->
<button class="ease-btn ease-btn-shimmer-loop ease-btn-shimmer-gold">
  ⚡ Upgrade Now
</button>
```

---

## Customisation

```css
.my-btn {
  --shimmer-duration: 1s; /* sweep speed        */
  --shimmer-color: rgba(255, 255, 255, 0.6); /* glare opacity      */
  --shimmer-angle: -15deg; /* skew angle         */
  --shimmer-width: 40%; /* glare strip width  */
  --shimmer-loop-gap: 3s; /* pause between loops*/
}
```

---

## Files

```
submissions/examples/btn-shimmer/
├── style.css   ← all 4 classes + @keyframes + CSS variables
├── demo.html   ← live showcase of every variant
└── README.md   ← this file
```

---

## Implementation notes

- Works on **any element** with a background — buttons, links, cards, badges.
- `overflow: hidden` is applied on the class itself; no wrapper needed.
- Loop pause is achieved with `calc(var(--shimmer-duration) + var(--shimmer-loop-gap))` total cycle time, keeping the sweep fraction consistent.
- `prefers-reduced-motion` disables all animations for users who opt out.
- No conflicts with existing `ease-hover-shimmer` — this targets buttons specifically and uses `::after` (not `::before`).

---

## Browser support

All modern browsers (2020+). Uses: CSS custom properties, `::after`, `linear-gradient`, `@keyframes`, `overflow: hidden`, `transform: skewX`.

---

## Status

`[PENDING REVIEW]` — submitted for maintainer integration as `ease-btn-shimmer` into `components/buttons.css`.
