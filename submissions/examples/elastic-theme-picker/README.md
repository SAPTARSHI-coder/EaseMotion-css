# Elastic Theme Picker

> A springy, **pure-CSS** theme picker for the EaseMotion CSS framework — built for
> **ECSoC26** (issue [#41421](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/41421)).

The `elastic-theme-picker` is an accessible, responsive, JavaScript-free component
that lets users switch between 8 curated color themes. Every selection triggers a
satisfying **elastic** bounce, powered entirely by EaseMotion-style keyframes and
CSS custom properties.

---

## ✨ Why this component?

Theme pickers are among the most reused UI building blocks in modern web apps.
This submission delivers a polished, drop-in **Elastic** variant that:

- Uses **EaseMotion CSS variables and keyframes** (`ease-kf-elastic-*`).
- Works **without JavaScript** — theme switching is driven by `:checked` radios
  and the `:has()` selector.
- Is **fully keyboard accessible** (radiogroups, visible focus rings, skip link).
- Respects **`prefers-reduced-motion`** and **`forced-colors`** (high contrast).
- Is **responsive** down to 320px wide viewports.

---

## 📁 Folder structure

```
submissions/examples/elastic-theme-picker-ecsoc26/
├── demo.html      # Live, interactive demo (open in any browser)
├── style.css      # All styles, tokens, elastic keyframes & themes
└── README.md      # This file
```

---

## 🚀 Quick start

1. Open `demo.html` in any modern browser.
2. Click (or keyboard-select) a color swatch to preview the theme.
3. Use the **Accent intensity** and **Elastic bounce** controls to tune the feel.

No build step, no dependencies, no JavaScript.

---

## 🎨 Themes included

| Theme | Vibe | Accent |
|-------|------|--------|
| Light | Warm paper | `#d4a373` |
| Dark | Catppuccin night | `#89b4fa` |
| Ocean | Deep sea | `#3dc1d3` |
| Forest | Botanical | `#81b29a` |
| Sunset | Terracotta | `#f2cc8f` |
| Lavender | Candy pop | `#fd79a8` |
| Neon | Cyberpunk | `#00f5d4` |
| Mono | Minimal grayscale | `#e0e0e0` |

---

## 🧩 How it works (no JS!)

The component is a classic **CSS-only state machine**:

1. Each theme is a hidden `<input type="radio" name="etp-theme">`.
2. A `<label>` styled as a swatch is linked to each radio via `for`.
3. When a radio is `:checked`, the rule
   `.etp-shell:has(#etp-dark:checked)` overrides the CSS custom properties
   (`--etp-bg`, `--etp-accent`, …) **on the whole stage**.
4. Every themed element transitions to the new values using the elastic
   `cubic-bezier(0.34, 1.56, 0.64, 1)` timing function, producing the springy
   overshoot.
5. The selected swatch plays the `ease-kf-elastic-swatch` keyframe for a
   satisfying pop.

Because the state lives in the DOM (not in JS), the picker is:

- **Accessible** — screen readers announce the radiogroup; keyboard arrows move
  between swatches.
- **Resilient** — no runtime errors, no hydration mismatch.
- **Portable** — copy the three files anywhere.

---

## 🎛️ CSS custom properties

### Motion tokens

| Variable | Default | Description |
|---|---|---|
| `--etp-elastic` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Spring overshoot easing |
| `--etp-duration` | `0.55s` | Base transition / animation duration |
| `--etp-duration-fast` | `0.28s` | Micro-interactions (hover, press) |
| `--etp-duration-slow` | `0.9s` | Reserved for slow reveals |

### Geometry tokens

| Variable | Default | Description |
|---|---|---|
| `--etp-radius` | `18px` | Card radius |
| `--etp-radius-lg` | `26px` | Banner / large surface radius |
| `--etp-swatch` | `64px` | Swatch footprint |
| `--etp-gap` | `18px` | Grid gaps |
| `--etp-shadow` | `0 18px 50px rgba(15,23,42,.18)` | Elevation shadow |

### Theme tokens (overridden per `data-theme`)

| Variable | Description |
|---|---|
| `--etp-bg` | Page background |
| `--etp-surface` | Card / panel background |
| `--etp-surface-2` | Subtle surface (chips, meters) |
| `--etp-text` | Primary text |
| `--etp-text-soft` | Secondary text |
| `--etp-accent` | Accent / brand color |
| `--etp-accent-ink` | Text drawn on accent fills |
| `--etp-border` | Hairline borders |
| `--etp-glow` | Accent glow / shadow tint |
| `--etp-theme-name` | Human label shown in preview |

---

## 🌀 Elastic keyframes

All keyframes follow the EaseMotion naming convention `ease-kf-<name>`:

| Keyframe | Used by | Effect |
|---|---|---|
| `ease-kf-elastic-pop` | Preview card | Scale-in with overshoot |
| `ease-kf-elastic-swatch` | Selected swatch | Bounce + slight rotate |
| `ease-kf-elastic-banner` | Card banner | Drop-in with settle |
| `ease-kf-elastic-meter` | Progress meter | ScaleX fill with overshoot |
| `ease-kf-elastic-chip` | Tag chips | Staggered rise-in |
| `ease-kf-elastic-float` | (utility) | Idle hover float |

---

## ♿ Accessibility

- **Keyboard**: `Tab` to the swatch group, `Arrow` keys to move between themes
  (native radio behavior). Focus rings use `:focus-visible`.
- **Screen readers**: swatches are wrapped in `role="radiogroup"` with an
  `aria-label`; the preview stage uses `aria-live="polite"` so theme changes are
  announced.
- **Reduced motion**: a `prefers-reduced-motion: reduce` block disables all
  animations and transitions.
- **Forced colors**: `forced-colors: active` adds explicit borders and uses the
  system `Highlight` color for the active swatch.
- **Skip link**: a "Skip to theme picker" link is the first focusable element.

---

## 📱 Responsive behavior

| Breakpoint | Layout |
|---|---|
| `> 640px` | Two-column stage (card + side stats) |
| `≤ 640px` | Side stats become a horizontal row under the card |
| `≤ 420px` | Side stats stack vertically |
| `≤ 420px` | Swatch size shrinks to `54px` |

---

## 🛠️ Customizing

### Add a new theme

1. Add a radio + label inside `.etp-swatches`:

   ```html
   <input class="etp-radio" type="radio" name="etp-theme" id="etp-rose" data-theme="rose" />
   <label class="etp-swatch etp-swatch--rose" for="etp-rose" title="Rose">
     <span class="etp-swatch-dot"></span>
     <span class="etp-swatch-name">Rose</span>
   </label>
   ```

2. Add the swatch dot colors:

   ```css
   .etp-swatch--rose .etp-swatch-dot { --swatch-bg:#e84393; --swatch-edge:#fd79a8; }
   ```

3. Add the palette override:

   ```css
   .etp-shell:has(#etp-rose:checked) {
     --etp-bg:#2d1326; --etp-surface:#e84393; --etp-accent:#fd79a8;
     --etp-accent-ink:#2d1326; --etp-theme-name:"Rose"; /* + other tokens */
   }
   ```

### Change the bounce

Pick a different **Elastic bounce** preset, or override `--etp-elastic` and
`--etp-duration` on `:root`.

---

## 🧪 Browser support

- `:has()` is supported in all current evergreen browsers (Chrome 105+, Safari
  15.4+, Firefox 121+). For older engines the picker still works — it simply
  falls back to the default Light theme while the swatches remain interactive.
- `prefers-reduced-motion` and `forced-colors` are widely supported.

---

## ✅ Submission checklist

- [x] Files added **only** inside `submissions/examples/elastic-theme-picker-ecsoc26/`
- [x] Includes `demo.html`, `style.css`, and `README.md`
- [x] Uses EaseMotion CSS variables and `ease-kf-*` keyframes
- [x] Works without JavaScript
- [x] Responsive and accessible
- [x] Live demo in `demo.html`

---

<p align="center">
  Submitted under <strong>ECSoC26</strong> · Fixes issue
  <a href="https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/41421">#41421</a>
</p>
