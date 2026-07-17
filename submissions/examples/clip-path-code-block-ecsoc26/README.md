# Clip Path Code Block

> A springy, **pure-CSS** code-snippet component for the EaseMotion CSS framework
> — built for **ECSoC26** (issue [#41422](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/41422)).

The `clip-path-code-block` is an accessible, responsive code block that reveals
itself with animated **clip-path** wipes, unfolds, and iris transitions. It is
inspired by blog / documentation design patterns and works **without JavaScript**.

---

## ✨ Why this component?

Code blocks are among the most reused UI building blocks in modern web apps.
This submission delivers a polished, drop-in **Clip Path** variant that:

- Uses **EaseMotion CSS variables and keyframes** (`cpc-kf-*` clip-path keyframes).
- Works **without JavaScript** — reveal style & theme are driven by `:checked`
  radios and the `:has()` selector.
- Ships **5 clip-path reveal styles**: Wipe, Unfold, Circle, Diagonal, Shutter.
- Is **fully keyboard accessible** (radiogroups, visible focus rings, skip link).
- Respects **`prefers-reduced-motion`** and **`forced-colors`** (high contrast).
- Is **responsive** down to 320px wide viewports.

> A tiny optional `<script>` adds copy-to-clipboard and a replay button. The
> component is **fully functional without it** — the code still reveals and is
> readable if JS is disabled.

---

## 📁 Folder structure

```
submissions/examples/clip-path-code-block-ecsoc26/
├── demo.html      # Live, interactive demo (open in any browser)
├── style.css      # All styles, tokens, clip-path keyframes & themes
└── README.md      # This file
```

---

## 🚀 Quick start

1. Open `demo.html` in any modern browser.
2. Pick a **Reveal style** (Wipe / Unfold / Circle / Diagonal / Shutter).
3. Switch the **Theme** (Dark / Light / Solarized).
4. Hit **Replay animation** to watch the clip-path reveal again.

No build step, no dependencies. The copy button is the only JS enhancement.

---

## 🎨 Reveal styles

| Style | Clip-path technique | Effect |
|-------|---------------------|--------|
| Wipe | `inset()` | Left-to-right wipe-in |
| Unfold | `inset()` + `scaleY` | Vertical blinds unfold |
| Circle | `circle()` | Iris open from center |
| Diagonal | `polygon()` | Sweep from top-left corner |
| Shutter | `polygon()` | Horizontal blinds open |

---

## 🧩 How it works (no JS!)

The component is a classic **CSS-only state machine**:

1. Each reveal style / theme is a hidden `<input type="radio">`.
2. A `<label>` styled as a segmented control is linked to each radio via `for`.
3. When a radio is `:checked`, the rule
   `.cpc-shell:has(#cpc-circle:checked)` overrides a custom property
   (`--cpc-reveal`) **on the whole shell**.
4. The code block's `animation` shorthand references `var(--cpc-reveal)`, so the
   matching clip-path keyframe plays automatically.
5. The selected segment gets the accent fill via
   `.cpc-radio:checked + .cpc-seg`.

Because the state lives in the DOM (not in JS), the block is accessible,
resilient, and portable.

---

## 🎛️ CSS custom properties

### Motion tokens

| Variable | Default | Description |
|---|---|---|
| `--cpc-elastic` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Spring overshoot easing |
| `--cpc-duration` | `0.7s` | Base reveal duration |
| `--cpc-duration-fast` | `0.3s` | Micro-interactions |
| `--cpc-reveal` | `cpc-kf-wipe` | Active reveal keyframe name |

### Geometry tokens

| Variable | Default | Description |
|---|---|---|
| `--cpc-radius` | `16px` | Block radius |
| `--cpc-radius-sm` | `9px` | Small surface radius |
| `--cpc-shadow` | `0 22px 60px rgba(8,12,24,.35)` | Elevation shadow |
| `--cpc-gap` | `16px` | Grid gaps |

### Theme tokens (overridden per theme)

| Variable | Description |
|---|---|
| `--cpc-bg` | Page background |
| `--cpc-surface` | Block / panel background |
| `--cpc-surface-2` | Subtle surface (bar, chips) |
| `--cpc-border` | Hairline borders |
| `--cpc-text` | Primary text |
| `--cpc-text-soft` | Secondary text |
| `--cpc-accent` | Accent / brand color |
| `--cpc-accent-ink` | Text drawn on accent fills |
| `--cpc-glow` | Accent glow / shadow tint |
| `--cpc-c / -f / -k / -s / -p / -n` | Syntax token colors |

---

## ✂️ Clip-path keyframes

All keyframes follow the EaseMotion naming convention `cpc-kf-<name>`:

| Keyframe | Used by | Effect |
|---|---|---|
| `cpc-kf-wipe` | Wipe style | `inset()` left-to-right reveal |
| `cpc-kf-unfold` | Unfold style | `inset()` + scaleY unfold |
| `cpc-kf-circle` | Circle style | `circle()` iris open |
| `cpc-kf-diagonal` | Diagonal style | `polygon()` corner sweep |
| `cpc-kf-shutter` | Shutter style | `polygon()` blinds open |
| `cpc-kf-elastic-pop` | Whole block | Scale + rise entrance |

---

## ♿ Accessibility

- **Keyboard**: `Tab` to a control group, `Arrow` keys to move between options
  (native radio behavior). Focus rings use `:focus-visible`.
- **Screen readers**: controls are wrapped in `role="radiogroup"` with an
  `aria-label`; the code block uses `aria-live="polite"` so reveals are announced.
- **Reduced motion**: a `prefers-reduced-motion: reduce` block disables all
  animations and forces `clip-path: none` so the code is always fully visible.
- **Forced colors**: `forced-colors: active` adds explicit borders and uses the
  system `Highlight` color for active controls.
- **Skip link**: a "Skip to code block demo" link is the first focusable element.

---

## 📱 Responsive behavior

| Breakpoint | Layout |
|---|---|
| `> 560px` | Controls in a multi-column auto-fit grid |
| `≤ 560px` | Controls stack into a single column |

The code block itself is `width: min(640px, 100%)` and scrolls horizontally for
long lines, so it never overflows small screens.

---

## 🛠️ Customizing

### Add a new reveal style

1. Add a radio + label inside the reveal `radiogroup`:

   ```html
   <input class="cpc-radio" type="radio" name="cpc-reveal" id="cpc-zoom" />
   <label class="cpc-seg" for="cpc-zoom">Zoom</label>
   ```

2. Define the keyframe:

   ```css
   @keyframes cpc-kf-zoom {
     0%   { clip-path: inset(50%); opacity: 0; }
     100% { clip-path: inset(0);   opacity: 1; }
   }
   ```

3. Wire it up:

   ```css
   .cpc-shell:has(#cpc-zoom:checked) { --cpc-reveal: cpc-kf-zoom; }
   ```

### Change the theme

Pick a different **Theme** preset, or override the `--cpc-*` tokens on
`.cpc-shell:has(#cpc-dark:checked)` (or add your own).

---

## 🧪 Browser support

- `:has()` is supported in all current evergreen browsers (Chrome 105+, Safari
  15.4+, Firefox 121+). For older engines the block still renders and is fully
  readable — it simply falls back to the default Wipe reveal.
- `clip-path` (polygon / circle / inset) is widely supported.
- `prefers-reduced-motion` and `forced-colors` are widely supported.

---

## ✅ Submission checklist

- [x] Files added **only** inside `submissions/examples/clip-path-code-block-ecsoc26/`
- [x] Includes `demo.html`, `style.css`, and `README.md`
- [x] Uses EaseMotion CSS variables and `cpc-kf-*` keyframes
- [x] Works without JavaScript (copy/replay are optional enhancements)
- [x] Responsive and accessible
- [x] Live demo in `demo.html`

---

<p align="center">
  Submitted under <strong>ECSoC26</strong> · Fixes issue
  <a href="https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/41422">#41422</a>
</p>
