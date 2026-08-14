# Text Animation Utilities

## 1. What does this do?

Adds five dedicated text animation utility classes to EaseMotion CSS:

| Class | Effect |
|---|---|
| `.ease-text-glow` | Smoothly pulsing glowing text-shadow effect |
| `.ease-text-shimmer` | Shimmering gradient sweep across the text |
| `.ease-text-typewriter` | Character-by-character typing reveal with blinking cursor |
| `.ease-text-glitch` | Digital glitch with cyan/magenta clip-path ghost layers |
| `.ease-text-gradient-flow` | Animated flowing multi-stop gradient text |

---

## 2. How is it used?

### `.ease-text-glow`
```html
<h1 class="ease-text-glow">Welcome to EaseMotion CSS</h1>
```

### `.ease-text-shimmer`
```html
<h1 class="ease-text-shimmer">Stunning UI Effects</h1>
```

### `.ease-text-typewriter`
Set `--text-typewriter-length` to the character count of your text and
`--text-typewriter-steps` to match (typically the same value):
```html
<p class="ease-text-typewriter"
   style="--text-typewriter-length: 18ch; --text-typewriter-steps: 18;">
  EaseMotion CSS
</p>
```

### `.ease-text-glitch`
Add a `data-text` attribute that exactly matches the element's inner text —
this is used by the `::before` / `::after` pseudo-element clones:
```html
<h1 class="ease-text-glitch" data-text="GLITCH MODE">GLITCH MODE</h1>
```

### `.ease-text-gradient-flow`
```html
<h1 class="ease-text-gradient-flow">Gradient Flow</h1>

<!-- Custom colour stops -->
<h1 class="ease-text-gradient-flow"
    style="
      --text-gradient-flow-from: #6c63ff;
      --text-gradient-flow-via1: #a78bfa;
      --text-gradient-flow-via2: #ec4899;
      --text-gradient-flow-to:   #6c63ff;
    ">
  Custom Gradient
</h1>
```

---

## 3. Why is it useful?

EaseMotion CSS focuses on animation-first, human-readable utilities. These
five classes fill a gap in the library: **dedicated animated text effects**.

- `.ease-text-glow` — creates attention-grabbing hero and heading effects with
  only `text-shadow` animated (GPU-compositor friendly).
- `.ease-text-shimmer` — adds a premium shine effect widely used in modern
  SaaS and landing page UIs.
- `.ease-text-typewriter` — pure-CSS typewriter (no JavaScript required) using
  the existing `steps()` timing function pattern already in the library.
- `.ease-text-glitch` — cyberpunk/tech aesthetic popular in developer tools,
  gaming, and dark-mode UIs.
- `.ease-text-gradient-flow` — an accessible, vibrant alternative to static
  gradient text; pairs perfectly with EaseMotion's existing
  `.ease-gradient-text` utility.

All classes include:
- **CSS custom property API** for easy theming/customisation.
- **`prefers-reduced-motion` support** — all animations are disabled and
  fallback values ensure readable text when motion is reduced.
- **`will-change` hints** set only for the properties being animated.
- **No JavaScript required** for any of the five effects.
