# Rotate Icon Emphasis

A smooth, spring-like icon rotation animation triggered on hover. Pure CSS — no JavaScript, no build step, no dependencies.

---

## What does this do?

When a user hovers over an icon card, the icon rotates a full 360° with a subtle scale pulse. The easing uses a spring-like cubic-bezier that slightly overshoots the endpoint and settles back, making the rotation feel physical and handcrafted rather than robotic.

Four ready-to-use variants are included:

| Class modifier | Behaviour |
|---|---|
| *(none)* | Default — 360° clockwise, 0.55 s spring ease |
| `.spin-ccw` | Counter-clockwise, same timing |
| `.spin-slow` | 360° clockwise, 0.9 s ease-out — stately, deliberate |
| `.spin-double` | 720° clockwise, 0.75 s spring ease — celebratory |

---

## How is it used?

### Minimal markup

```html
<!-- 1. Link the stylesheet -->
<link rel="stylesheet" href="style.css" />

<!-- 2. Card wrapper (apply a variant modifier here if needed) -->
<div class="icon-card">

  <!-- 3. Icon wrapper — set colour tokens with inline style or a utility class -->
  <div class="icon-wrap" style="--icon-bg: #fdecea; --icon-color: #c0392b;">

    <!-- 4. Drop in any inline SVG -->
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
         fill="none" stroke="currentColor" stroke-width="1.7"
         stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="3"/>
      <!-- … -->
    </svg>

  </div>

  <!-- 5. Optional label text -->
  <div class="icon-card-body">
    <span class="icon-card-label">Settings</span>
    <span class="icon-card-desc">Adjust your preferences.</span>
  </div>

</div>
```

### Applying a variant

Add the modifier class to `.icon-card`:

```html
<div class="icon-card spin-ccw"> … </div>
<div class="icon-card spin-slow"> … </div>
<div class="icon-card spin-double"> … </div>
```

Variants can be combined — `.spin-ccw.spin-slow` produces a slow counter-clockwise spin.

### Colour tokens

Two CSS custom properties on `.icon-wrap` control the tinted background and stroke colour:

```css
--icon-bg:    /* background fill of the icon tile */
--icon-color: /* SVG stroke / fill colour         */
```

Set them inline, in a stylesheet, or via any CSS-in-JS approach. The demo uses semantic colour variables declared in `:root` (see `style.css`).

---

## Why is it useful?

**Draws attention without noise.** A single rotation gives clear visual feedback that an element is interactive, without adding persistent motion that fatigues the eye on repeated views.

**Tactile feel.** The spring cubic-bezier (`cubic-bezier(0.34, 1.56, 0.64, 1)`) produces a micro-overshoot that mimics a physical dial or knob — a level of craft that flat CSS transitions rarely achieve.

**Universally appropriate.** Settings gears, refresh arrows, globes, loaders, compass roses — icons that imply action or rotation read especially well with this treatment. The counter-clockwise and double-spin variants let you differentiate icons semantically (undo vs redo, standard vs featured).

**Zero overhead.** The entire animation is driven by `@keyframes` and `transform` on the GPU compositing layer. No layout reflow, no JavaScript execution cost, and no third-party runtime to ship to users.

**Easy to integrate.** Drop in the two files, add two class names and two CSS variables, and the effect works. No build tooling required.

---

## File structure

```
rotate-icon-emphasis/
├── demo.html   — nine live examples with variant labels
├── style.css   — animation, card layout, colour tokens, responsive rules
└── README.md   — this file
```

## Browser support

Tested in Chrome 120+, Firefox 121+, Safari 17+, and Edge 120+. Uses only `@keyframes`, `transform`, `transition`, and CSS custom properties — all Baseline features with near-universal support.

## Licence

MIT — free to use and adapt.