# Cyberpunk Neon Slide-Up Tooltip

A zero-dependency, pure CSS tooltip that glides **upward** into place with a
soft neon bloom — built to sit naturally inside cyberpunk / tech-noir dark
interfaces. No JavaScript: the reveal is driven entirely by `:hover` and
`:focus-visible`, so it works for mouse and keyboard users alike.

Resolves Issue: #34270

## ✨ Features

- **Slide-Up motion** — the tooltip rests below its final position and
  travels up by a configurable distance (`--nx-tt-rise`) while fading in,
  on a decelerating `cubic-bezier` glide.
- **Zero JavaScript** — visibility, motion, and delay are handled with CSS
  transitions on sibling selectors (`.nx-chip:hover + .nx-tip`).
- **Keyboard accessible** — triggers are real `<button>` elements wired with
  `aria-describedby` → `role="tooltip"`, revealed on `:focus-visible`, with a
  high-contrast lime focus ring that stays distinct from the hover style.
- **Tunable via custom properties** — duration, easing curve, travel
  distance, and hover-intent delay are all exposed on `:root`.
- **Cyberpunk Neon skin** — clipped-corner chips, magenta/cyan glow recipes,
  CRT scanline overlay, and a dark HUD grid backdrop.
- **Responsive & motion-safe** — trigger row wraps on narrow screens, the
  tooltip caps its width at `min(240px, 82vw)`, and a
  `prefers-reduced-motion` guard removes all travel for users who request it.

## 🔧 Custom Properties

| Property           | Default                            | Role                          |
| ------------------ | ---------------------------------- | ----------------------------- |
| `--nx-tt-duration` | `340ms`                            | Slide + fade time             |
| `--nx-tt-ease`     | `cubic-bezier(0.22, 1, 0.36, 1)`   | Motion curve                  |
| `--nx-tt-rise`     | `14px`                             | Distance travelled upward     |
| `--nx-tt-delay`    | `60ms`                             | Hover-intent delay before show|

## 🚀 Usage

```html
<span class="nx-tip-anchor">
  <button class="nx-chip" type="button" aria-describedby="my-tip">
    TRIGGER
  </button>
  <span class="nx-tip" id="my-tip" role="tooltip">
    <span class="nx-tip-label">Label strip</span>
    Tooltip body copy slides up from below.
  </span>
</span>
```

## 📂 Files

- `demo.html` — augment-market console demo with three tooltip triggers.
- `style.css` — tokens, neon theme, slide-up interaction engine, a11y guards.
- `README.md` — this document.
