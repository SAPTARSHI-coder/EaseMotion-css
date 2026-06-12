# Glitch Animation Effect

**EaseMotion CSS Submission**
`submissions/examples/glitch-animation/`

---

## What does this do?

This module provides a cyberpunk-style **glitch animation** built entirely from CSS keyframes and pseudo-elements — no JavaScript, no external libraries, no canvas.

The effect replicates classic **CRT signal corruption**: horizontal scanline slicing, RGB channel misregistration (the cyan/magenta fringing you see on old monitors), and brief tape-warp distortion bursts. Together these produce the visual language of hacker interfaces, broken transmissions, and dystopian UIs.

Three complementary animations run simultaneously on different timers so they never sync — keeping the motion feeling organic rather than mechanically looped:

| Animation         | Applied to             | What it does                                   |
| ----------------- | ---------------------- | ---------------------------------------------- |
| `glitch-shift`    | `::before` / `::after` | Slides the RGB ghost layers left/right         |
| `glitch-clip-a/b` | `::before` / `::after` | Cuts each layer to a different horizontal band |
| `glitch-distort`  | Host element           | Brief `skewX` + `translateX` tape-warp burst   |
| `glitch-flicker`  | Host element / accents | Opacity fluctuation, CRT power-wobble feel     |

---

## How is it used?

### 1. Add the stylesheet

```html
<link rel="stylesheet" href="style.css" />
```

### 2. Apply `glitch-text` to headings

The **data-text** attribute is required — pseudo-elements read it with `content: attr(data-text)` to mirror your heading text as RGB ghost layers.

```html
<!-- data-text must match the element's inner text exactly -->
<h1 class="glitch-text glitch-title" data-text="SYSTEM ERROR">SYSTEM ERROR</h1>
```

### 3. Size variants

| Class             | Description                                        |
| ----------------- | -------------------------------------------------- |
| `glitch-title`    | Large display heading (`clamp(3rem, 10vw, 7rem)`)  |
| `glitch-subtitle` | Section heading (`clamp(1.4rem, 4vw, 2.4rem)`)     |
| `glitch-label`    | Small caps UI label (`clamp(0.9rem, 2vw, 1.2rem)`) |

### 4. `glitch-effect` — for non-text elements

When you want the distortion on a **button, box, or image** without the RGB split, use `.glitch-effect`. No `data-text` needed.

```html
<button class="cyber-button glitch-effect">INITIATE</button>
```

### 5. Supporting components

```html
<!-- Glassmorphism card with hover scan-line -->
<div class="cyber-card">...</div>

<!-- Left-bordered info strip, 4 colour variants -->
<div class="neon-panel">...</div>
<div class="neon-panel magenta">...</div>
<div class="neon-panel green">...</div>
<div class="neon-panel yellow">...</div>

<!-- Status badges -->
<span class="status-badge active">ONLINE</span>
<span class="status-badge warning">ALERT</span>
<span class="status-badge critical">CRITICAL</span>
```

### 6. Combine with colour utilities

```html
<h2 class="glitch-text glitch-subtitle text-cyan" data-text="UPLINK">UPLINK</h2>
<h2 class="glitch-text glitch-subtitle text-magenta" data-text="OFFLINE">
  OFFLINE
</h2>
```

---

## Why is it useful?

**Pure CSS** means zero runtime overhead — no JS parse/execute cost, no framework dependency. The browser handles all animation scheduling on the GPU compositor thread.

It is a natural fit for:

- **Tech landing pages** — dramatic hero headings that communicate speed and edge
- **Hacker / terminal interfaces** — reinforces the "live system" aesthetic
- **Dark mode dashboards** — status indicators and alerts that feel urgent
- **Cyberpunk themed websites** — first-class thematic language without plugins
- **AI product showcases** — suggests intelligence and real-time processing

Because the glitch fires in tight time-windows (1–3% of the keyframe cycle) the element is readable the vast majority of the time. The effect catches the eye without degrading usability — a deliberate design constraint.

---

## How the animation works — technical detail

```
.glitch-text
│
├── ::before  (cyan ghost)
│   ├── content: attr(data-text)   ← mirrors heading text
│   ├── color: #00ffff
│   ├── left: -2px                 ← offset left for channel split
│   ├── animation: glitch-shift    ← slides left/right
│   └── animation: glitch-clip-a  ← cuts to upper band
│
└── ::after   (magenta ghost)
    ├── content: attr(data-text)
    ├── color: #ff00ff
    ├── left: +2px                 ← offset right
    ├── animation: glitch-shift (reverse)
    └── animation: glitch-clip-b  ← cuts to lower band
```

**clip-path slicing:** `clip-path: inset(15% 0 70% 0)` hides everything above 15% and below 70%, leaving only a 15px-tall horizontal band visible. Jumping this band's position across keyframe steps creates the scanline slice look.

**RGB split:** The ±2px `left` offset plus contrasting colours (`#0ff` / `#f0f`) produces the colour-fringing seen when an old CRT's electron guns fall out of alignment.

**Distort burst:** `skewX(-6deg) translateX(-4px)` for one keyframe step (1% of the cycle ≈ 30–40ms at typical durations) is fast enough to read as a glitch rather than a permanent lean.

**Desynchronised timers** prevent the animations ever landing on the same frame simultaneously:

```css
glitch-shift:   3s
glitch-clip-a:  2.7s
glitch-clip-b:  2s
glitch-distort: 4s
glitch-flicker: 6s
```

LCM of these durations is 108 seconds — so the full pattern doesn't repeat for nearly two minutes.

---

## Files

```
glitch-animation/
├── demo.html    ← open directly in any browser
├── style.css    ← drop into any project
└── README.md    ← this file
```

---

## Browser support

All modern browsers. Requires support for:

- `clip-path` (Chrome 55+, Firefox 54+, Safari 13.1+)
- CSS custom properties
- `@keyframes` / `animation`

No polyfills needed for any current browser.
