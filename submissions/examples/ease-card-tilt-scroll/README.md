# ease-card-tilt-scroll — EaseMotion CSS Demo

An interactive demonstration where cards in a responsive grid tilt in 3D as they scroll past the centre of the viewport. Powered entirely by native browser APIs — `getBoundingClientRect()`, CSS custom properties, and `perspective()` — with zero CSS keyframes, zero external libraries.

---

## Screenshot Placeholder

> Open `demo.html` directly in any modern browser — no build tools, no server required.

```
┌──────────────────────────────────────────────────────────────┐
│  ● EaseMotion   Demo  How It Works  Use Cases  Docs          │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│           [Scroll-Linked 3D Tilt]                            │
│                                                              │
│       ease-card-tilt                                         │
│       -scroll                                                │
│                                                              │
│  Cards tilt in real-time as they cross the viewport          │
│  centre. Powered by getBoundingClientRect() …                │
│                                                              │
│  [No @keyframes] [requestAnimationFrame] [CSS Variables]     │
│                                                              │
│                   ↓ Scroll to see cards tilt                 │
├────────────────┬─────────────────┬───────────────────────────┤
│ 📊   2.4°     │ 🖥️   -1.1°     │ 🎨   0.0°                │
│  Analytics    │  Dashboard      │  Portfolio                │
│  rotateX:2.40°│  rotateX:-1.10°│  rotateX:0.00°            │
├────────────────┼─────────────────┼───────────────────────────┤
│ 📦  -3.7°     │ 🖼️  -6.2°      │ 💰  -8.9°                │
│  Product      │  Gallery        │  Finance                  │
└────────────────┴─────────────────┴───────────────────────────┘
```

---

## Folder Structure

```
ease-card-tilt-scroll/
├── demo.html    ← Complete interactive demo (12 tilt cards + all sections)
├── style.css    ← Dark theme layout, tilt card CSS — no @keyframes
└── README.md    ← This file
```

---

## Sections

| # | Section | Description |
|---|---|---|
| 1 | **Navigation** | Sticky frosted nav — logo, 4 links, Try Demo CTA |
| 2 | **Hero** | Monospace title, description, tech-tag badges, bounce scroll indicator |
| 3 | **Demo Grid** | 12 live tilt cards — each shows a real-time rotateX angle badge |
| 4 | **How It Works** | 4 explanation cards with copy-pasteable code blocks |
| 5 | **Use Cases** | 6 application cards for different interface types |
| 6 | **Footer** | Brand statement, Example links, EaseMotion links, copyright |

---

## How the Scroll Tilt Works

### Step 1 — Find the viewport centre

```js
const vh = window.innerHeight / 2;
```

### Step 2 — Measure each card's position

```js
const rect       = card.getBoundingClientRect();
const cardCenter = rect.top + rect.height / 2;
```

`getBoundingClientRect()` returns coordinates relative to the current viewport on every call, so no manual offset arithmetic is needed.

### Step 3 — Calculate normalised distance

```js
const distance   = cardCenter - vh;
const normalized = Math.max(-1, Math.min(1, distance / vh));
```

- Card **above** viewport centre → negative value
- Card **at** viewport centre → `0`
- Card **below** viewport centre → positive value
- Clamped to `[−1, +1]` so cards at extreme positions don't over-rotate

### Step 4 — Map to a rotation angle

```js
const rotation = normalized * 10;  // −10° → 0° → +10°
```

Multiply by any maximum angle. `10` is tasteful; `20` is dramatic.

### Step 5 — Set the CSS custom property per card

```js
card.style.setProperty('--ease-card-tilt', `${rotation.toFixed(2)}deg`);
```

Setting on the element itself means each card carries its own value — they update independently.

### Step 6 — CSS consumes the variable

```css
.tilt-card {
  transform: perspective(1000px) rotateX(var(--ease-card-tilt, 0deg));
  transition: transform 80ms linear;
  will-change: transform;
}
```

`perspective(1000px)` creates the 3D projection from the viewer's eye. Smaller values = more dramatic depth; larger values = subtler.
The `transition: transform 80ms linear` adds a small lag that smooths out discrete scroll events without making the effect feel disconnected.

### Performance pattern

```js
let ticking = false;

window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(updateTilts);
    ticking = true;
  }
}, { passive: true });
```

The `ticking` flag prevents queuing more than one `requestAnimationFrame` per rendered frame. `{ passive: true }` tells the browser this listener never calls `preventDefault()`, so it can start scrolling immediately without waiting for the handler to complete.

---

## EaseMotion Classes Demonstrated

### Entrance Animations

| Class | Used on |
|---|---|
| `ease-fade-in` | Nav logo, hero chip, hero badges, scroll cue, section chips |
| `ease-slide-up` | Hero title, hero description, section headings, section descriptions, explanation cards, use-case cards |

### Hover Effects

| Class | Used on |
|---|---|
| `ease-hover-lift` | All 6 use-case cards |
| `ease-hover-glow` | Try Demo nav button |
| `ease-hover-underline` | Nav links, footer column links |

### Continuous Animations

| Class | Used on |
|---|---|
| `ease-bounce` | Scroll cue arrow in hero |

### Glassmorphism

| Class | Used on |
|---|---|
| `ease-glass-card` | Explanation section cards (overridden to match dark theme) |

### Delay Staggering

| Class | Used on |
|---|---|
| `ease-delay-100` — `ease-delay-400` | Hero and section staggering |
| `ease-delay-100` — `ease-delay-600` | Use-case card grid |

---

## Customisation

### Change the tilt angle range

```js
const rotation = normalized * 10;  // ← change 10 to any value
```

| Value | Effect |
|---|---|
| `5` | Very subtle, barely perceptible |
| `10` | Default — tasteful 3D depth |
| `20` | Dramatic, editorial feel |
| `30` | Theatrical, skeuomorphic |

### Change the transition responsiveness

```css
.tilt-card {
  transition: transform 80ms linear;
}
```

A shorter duration (e.g. `30ms`) tracks scroll tightly; a longer one (e.g. `200ms`) adds a trailing spring feel.

### Change the perspective depth

```css
transform: perspective(1000px) rotateX(var(--ease-card-tilt, 0deg));
/*                     ↑ smaller = more dramatic 3D projection */
```

| Value | Visual |
|---|---|
| `400px` | Extreme fisheye-style depth |
| `800px` | Strong 3D |
| `1000px` | Default — balanced |
| `2000px` | Subtle, almost flat |

### Switch to Y-axis (horizontal tilt on mouse/horizontal scroll)

```js
card.style.setProperty('--ease-card-tilt-y', `${rotation.toFixed(2)}deg`);
```

```css
.tilt-card {
  transform: perspective(1000px) rotateY(var(--ease-card-tilt-y, 0deg));
}
```

---

## Browser Support

| Browser | Version | Support |
|---|---|---|
| Chrome / Edge | 88+ | ✅ Full |
| Firefox | 89+ | ✅ Full |
| Safari | 15+ | ✅ Full |
| iOS Safari | 15+ | ✅ Full |
| Samsung Internet | 14+ | ✅ Full |

**Reduced motion fallback:** `prefers-reduced-motion: reduce` disables the tilt effect and the transition entirely via a media query override, making the cards render flat.

---

## Usage Instructions

1. Copy the `ease-card-tilt-scroll/` folder to any location.
2. Open `demo.html` in any modern browser — it links to EaseMotion CSS via the relative path `../../easemotion.css` (correct from inside this repository).
3. To use outside this repository, update the link tag:

```html
<!-- Default (inside repo) -->
<link rel="stylesheet" href="../../easemotion.css" />

<!-- Custom path or CDN -->
<link rel="stylesheet" href="/assets/easemotion.css" />
```

4. Add `data-tilt` to any card element and give it the `.tilt-card` class.
5. Copy the JavaScript block and call `updateTilts()` on scroll + page load.

---

## Technical Notes

- **No `@keyframes`** — zero custom animation definitions. All animation is provided by EaseMotion classes or CSS `transition`.
- **No JavaScript frameworks** — two inline `<script>` sections use only native `IntersectionObserver` (scroll-reveal) and `requestAnimationFrame` (tilt). Combined: ~40 lines.
- **No build tools** — open `demo.html` directly. No npm, webpack, Vite, or server required.
- **Semantic HTML5** — `<nav>`, `<section>`, `<article>`, `<footer>`, `<pre>`, `<code>` used throughout. ARIA labels on live readout elements.
- **Accessible** — `prefers-reduced-motion` disables tilt and transitions; `aria-live="polite"` on angle readout badges; icon elements marked `aria-hidden="true"`.
