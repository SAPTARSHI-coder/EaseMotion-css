# ease-tada

## What does this do?

A dramatic attention-seeking animation that combines scale compression, expansion, and alternating rotation wobble — all in a fast, punchy 1s one-shot sequence. The element compresses slightly, then wobbles at 110% size before snapping back to rest.

## How is it used?

```html
<!-- One-shot: add class to fire once -->
<button class="ease-tada">✓ Payment Sent</button>

<!-- Hover variant: triggers on mouse enter, no JS needed -->
<button class="ease-tada-hover">🚀 Get Started</button>

<!-- Loop variant: repeats continuously with a 2s pause -->
<span class="badge ease-tada-loop">3</span>

<!-- Speed presets -->
<button class="ease-tada ease-tada-fast">⚡ Fast (0.6s)</button>
<button class="ease-tada ease-tada-slow">🎭 Slow (1.4s)</button>

<!-- Custom duration -->
<button class="ease-tada" style="--ease-tada-duration: 0.8s;">Custom</button>
```

### Replay via JavaScript

The animation is one-shot — remove and re-add the class to replay:

```js
function triggerTada(el) {
  el.classList.remove("ease-tada");
  void el.offsetWidth; // force reflow
  el.classList.add("ease-tada");
}
```

## Why does it fit EaseMotion CSS?

EaseMotion CSS has `ease-bounce` (translateY only) and `ease-shake` (translateX only). Neither combines scale + rotation. `ease-tada` fills this gap with a distinct, high-energy animation that cannot be replicated by combining existing classes:

| Class         | Transform axes          | Use case                        |
| ------------- | ----------------------- | ------------------------------- |
| `ease-bounce` | translateY only         | Loading, playful elements       |
| `ease-shake`  | translateX only         | Error states, rejection         |
| `ease-tada`   | scale + rotate combined | Success, attention, celebration |

The implementation follows EaseMotion's core philosophy:

- **Token-first** — `--ease-tada-duration` is fully customizable; `--tada-rotate` and `--tada-scale-*` control the physics
- **One-shot by default** — `animation-iteration-count: 1` with `animation-fill-mode: both` returns cleanly to rest
- **Three trigger modes** — class-add, hover, loop — covering all real-world patterns
- **`will-change: transform`** — GPU compositing hint prevents layout shift during animation
- **`prefers-reduced-motion` safe** — animation disabled entirely, element remains fully visible and functional

## Keyframe breakdown

```
0%        → scale(1)   rotate(0)      resting
5%–10%    → scale(0.9) rotate(-3deg)  compress + tilt left (wind-up)
15%       → scale(1.1) rotate(+3deg)  expand + tilt right (launch)
20%–90%   → scale(1.1) rotate(±3deg)  fast alternating wobble
100%      → scale(1)   rotate(0)      clean return to rest
```

## CSS Custom Properties

| Property               | Default | Description              |
| ---------------------- | ------- | ------------------------ |
| `--ease-tada-duration` | `1s`    | Total animation duration |
| `--tada-rotate`        | `3deg`  | Peak rotation angle      |
| `--tada-scale-in`      | `0.9`   | Initial compress amount  |
| `--tada-scale-out`     | `1.1`   | Expanded wobble size     |

## Classes Reference

| Class             | Description                          |
| ----------------- | ------------------------------------ |
| `ease-tada`       | One-shot on class add                |
| `ease-tada-hover` | Fires on `:hover`                    |
| `ease-tada-loop`  | Repeats with 2s pause between cycles |
| `ease-tada-fast`  | 0.6s duration preset                 |
| `ease-tada-slow`  | 1.4s duration preset                 |

## Tech Stack

- HTML
- CSS only (no frameworks, no JavaScript for the animation itself)

## Preview

Open `demo.html` directly in your browser. Five sections: core use cases (success button, CTA, notification bell, empty state card), hover variant, loop variant, speed comparison, and usage code with JS replay helper.

## Contribution Notes

- Class names: `.ease-tada`, `.ease-tada-hover`, `.ease-tada-loop`, `.ease-tada-fast`, `.ease-tada-slow`
- Maintainer will integrate keyframe `ease-kf-tada` into `core/animations.css` directly per the `accepted` + `integrated` labels on the issue
- No changes made to `core/`, `components/`, or any existing files
- `transform-origin: center center` is explicitly set — critical for correct rotation pivot on inline elements
