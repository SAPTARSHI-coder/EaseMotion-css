# Spring Physics Accordion — Glassmorphism UI

A pure CSS, zero-dependency **frosted-glass accordion** whose open
motion is real spring physics. Opening a panel doesn't just slide — it
**springs**: the body drops in on a damped oscillation (overshoot,
small rebound, settle), the whole glass card gives a matching
squash-and-stretch, and the chevron rotates past its mark and springs
back. Every bounce is one hand-tuned keyframe timeline sharing a single
`--sp-spring` duration, so the panel reads like a mass on a real
spring. Built on native `<details>`/`<summary>`; no JavaScript anywhere.

Resolves Issue: #33125

## ✨ Features

- **Damped spring open** — the body plays a multi-stop keyframe
  (`sp-body-spring`) that falls past its rest position, rebounds up,
  overshoots less, and lands. The keyframe *is* the spring; the clock
  runs `linear` so the shape controls the physics, not an easing curve.
- **Squash-and-stretch card** — the whole panel stretches ~3% as the
  body launches out, then recoils and settles on the same timeline, so
  card and content move as one coupled system.
- **Spring-back chevron** — rotates on a `cubic-bezier(0.34, 1.56,
  0.64, 1)` overshoot easing, cresting past 225° before settling.
- **Genuine glassmorphism** — translucent fill, `backdrop-filter`
  blur, a hairline inner top-edge highlight, and a soft drop shadow,
  floating over a live multi-radial color field. Hover lifts the
  frost's opacity.
- **Accent coil dot** — a small indicator lights mint and glows when
  its panel is open, giving each row a quiet on/off tell.
- **Native accordion semantics** — `<details name="sp-settings">`
  gives exclusive-open behavior straight from the browser; remove the
  `name` to allow multiple open.
- **Keyboard accessible** — `<summary>` is natively focusable and
  toggles with Enter/Space; 2px mint `:focus-visible` ring.
- **Genuinely responsive** — fluid shell up to 560px; under 440px the
  body text realigns to the card edge and padding tightens.
- **Tunable via custom properties** — spring duration, drop distance,
  chevron easing, blur amount, glass opacities, and accent on `:root`.
- **Motion-safe** — `prefers-reduced-motion` stills every spring; the
  glass, blur, and layout remain fully intact.

## 🔧 Custom Properties

| Property              | Default                              | Role                          |
| --------------------- | ------------------------------------ | ----------------------------- |
| `--sp-spring`         | `620ms`                              | Full oscillation length       |
| `--sp-drop`           | `16px`                               | How far the body falls in     |
| `--sp-settle-ease`    | `cubic-bezier(0.34, 1.56, 0.64, 1)`  | Chevron overshoot             |
| `--sp-blur`           | `16px`                               | Backdrop blur radius          |
| `--sp-glass`          | `rgba(255,255,255,0.14)`             | Panel fill                    |
| `--sp-stroke`         | `rgba(255,255,255,0.4)`              | Frosted rim                   |
| `--sp-accent`         | `#8affe4`                            | Mint spring accent            |

## 🚀 Usage

```html
<details class="sp-item" name="my-settings">
  <summary class="sp-head">
    <span class="sp-coil" aria-hidden="true"></span>
    <span class="sp-head-text">Appearance</span>
    <span class="sp-chevron" aria-hidden="true"></span>
  </summary>
  <div class="sp-body">
    <p>Pick a theme and accent that follow you across every device…</p>
  </div>
</details>
```

## 📂 Files

- `demo.html` — a frosted "Workspace settings" panel over a color field.
- `style.css` — spring tokens, damped-oscillation keyframes, glass skin, a11y guards.
- `README.md` — this document.
