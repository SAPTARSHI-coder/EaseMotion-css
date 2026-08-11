# 💅 Animated Border Draw & Glow Keyframe Mixins (vs82)

Reusable SCSS mixins for the **EaseMotion CSS** design system that add:

1. **`border-draw`** — a border that animates as though it's being traced/drawn around the element.
2. **`border-glow`** — a soft, continuous pulsing glow around an element's border.
3. **`border-draw-glow`** — the two combined in sequence: draw first, then glow.

Live demo: open [`demo.html`](./demo.html) in a browser (styled by [`style.css`](./style.css), the compiled output of the SCSS partial).

---

## 📦 Files

| File | Purpose |
|---|---|
| `_animated-border-draw-glow-keyframe-mixins-vs82.scss` | The SCSS partial containing all mixins |
| `style.css` | Compiled CSS output, used by the demo |
| `demo.html` | Visual demo of all three mixins |
| `README.md` | This file |

---

## 🚀 Usage

```scss
@use 'animated-border-draw-glow-keyframe-mixins-vs82' as border;

.card {
  @include border.border-draw($color: #6c5ce7, $width: 2px, $duration: 1.2s);
}

.button {
  @include border.border-glow($color: #00cec9, $spread: 10px);
}

.highlight-card {
  @include border.border-draw-glow(
    $color: #00cec9,
    $draw-duration: 1.2s,
    $glow-duration: 2s
  );
}
```

> Note: elements using `border-draw` or `border-draw-glow` should **not** already rely on `::before` / `::after` for other purposes, since the mixins use those pseudo-elements internally.

---

## ⚙️ Mixin Parameters

### `border-draw($color, $width, $radius, $duration, $easing, $delay, $infinite)`

| Param | Type | Default | Description |
|---|---|---|---|
| `$color` | color | `#6c5ce7` | Color of the drawn border |
| `$width` | length | `2px` | Border thickness |
| `$radius` | length | `8px` | Border radius of the element |
| `$duration` | time | `1.2s` | How long the draw animation takes |
| `$easing` | timing-function | `cubic-bezier(0.65, 0, 0.35, 1)` | Animation easing |
| `$delay` | time | `0s` | Delay before the draw starts |
| `$infinite` | bool | `false` | If `true`, the draw loops forever instead of stopping once drawn |

### `border-glow($color, $spread, $duration, $easing, $infinite)`

| Param | Type | Default | Description |
|---|---|---|---|
| `$color` | color | `#6c5ce7` | Glow color |
| `$spread` | length | `12px` | Maximum glow spread radius at peak |
| `$duration` | time | `2s` | Duration of one pulse cycle |
| `$easing` | timing-function | `ease-in-out` | Animation easing |
| `$infinite` | bool | `true` | Whether the glow pulses forever |

### `border-draw-glow($color, $width, $radius, $draw-duration, $glow-duration, $glow-spread, $easing)`

Combines both mixins: draws the border over `$draw-duration`, then fades into a continuous `border-glow` pulse. Internally uses the element's `::before` for the draw effect and `::after` for the glow, so the element needs `position: relative` (handled automatically by the mixin).

| Param | Type | Default | Description |
|---|---|---|---|
| `$color` | color | `#6c5ce7` | Shared color for both draw & glow |
| `$width` | length | `2px` | Drawn border thickness |
| `$radius` | length | `8px` | Border radius |
| `$draw-duration` | time | `1.2s` | Duration of the draw phase |
| `$glow-duration` | time | `2s` | Duration of one glow pulse cycle |
| `$glow-spread` | length | `12px` | Max glow spread at peak |
| `$easing` | timing-function | `cubic-bezier(0.65, 0, 0.35, 1)` | Easing for the draw phase |

---

## 🧪 Compiled CSS Example

Given:

```scss
.card--draw {
  @include border.border-draw($color: #6c5ce7, $width: 2px, $radius: 8px, $duration: 1.2s);
}
```

Compiles to:

```css
.card--draw {
  position: relative;
  z-index: 0;
}

.card--draw::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 8px;
  padding: 2px;
  background: conic-gradient(from 0deg, #6c5ce7 0deg, #6c5ce7 0deg, transparent 0deg, transparent 360deg);
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
  z-index: -1;
  animation: border-draw-1 1.2s cubic-bezier(0.65, 0, 0.35, 1) 0s forwards;
}

@keyframes border-draw-1 {
  0% {
    background: conic-gradient(from 0deg, #6c5ce7 0deg, #6c5ce7 0deg, transparent 0deg, transparent 360deg);
  }
  100% {
    background: conic-gradient(from 0deg, #6c5ce7 0deg, #6c5ce7 360deg, transparent 360deg, transparent 360deg);
  }
}
```

See [`style.css`](./style.css) for the full compiled output used in the demo, including `border-glow` and `border-draw-glow`.

---

## 🛠 How it works

- **`border-draw`** uses a `conic-gradient` on a `::before` pseudo-element, masked to only show a thin ring (via `mask-composite: exclude` against the content box). Animating the gradient's stop angle from `0deg → 360deg` creates the illusion of the border being traced around the element in real time.
- **`border-glow`** animates `box-shadow` blur/spread between a tight, invisible shadow and a soft, colored one, producing a pulsing ambient glow.
- **`border-draw-glow`** layers both: the `::before` handles the draw phase, and the `::after` fades in (`opacity: 0 → 1`, delayed by `$draw-duration`) before it starts pulsing with `border-glow`.

Each mixin invocation generates a **uniquely named keyframe** (e.g. `border-draw-1`, `border-draw-2`) using an internal `!global` counter, so you can call the mixin multiple times in the same stylesheet without keyframe name collisions.

---

## ✅ Browser Support

- `conic-gradient` + `mask-composite`: supported in all modern evergreen browsers (Chrome, Edge, Firefox, Safari 15.4+).
- For older Safari, prefix `-webkit-mask-composite: xor;` is included as a fallback (already in the code).
- `box-shadow` animation (`border-glow`) works everywhere.

---

## 📁 Directory

```
submissions/scss/scss-animated-border-draw-glow-keyframe-mixins-vs82/
├── _animated-border-draw-glow-keyframe-mixins-vs82.scss
├── style.css
├── demo.html
└── README.md
```
