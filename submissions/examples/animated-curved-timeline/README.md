# Animated Curved Timeline

A premium, CSS-only animated timeline component for [EaseMotion CSS](https://github.com/easemotioncss) — featuring glassmorphism cards, animated SVG connectors, growing spine, and rich hover micro-interactions. Zero JavaScript. Zero dependencies.

---

## Description

The **Animated Curved Timeline** turns a sequential list of milestones into a living, breathing visual narrative. A glowing central spine grows as the page loads. Milestone cards fade and slide into view on stagger delays. SVG connector paths draw themselves across the axis. Every hover lifts, glows, and pulls the eye — all in pure CSS.

The component ships with six pre-built milestone cards covering a typical product journey (Research → Planning → Design → Development → Testing → Launch), but the semantic HTML structure makes it trivially easy to remap to any sequential content: company history, feature roadmap, personal portfolio, or educational curriculum.

---

## Features

- **Responsive layout** — Alternating left/right cards on desktop, centered on tablet, single-column on mobile. One component, three breakpoints, no layout jank.
- **Curved timeline connector** — SVG `<path>` elements animated with `stroke-dashoffset` to draw themselves into view, giving the illusion of a line tracing its way across the spine.
- **Growing spine** — The central vertical track scales from `scaleY(0)` to `scaleY(1)` on load, seeding a satisfying "build" moment before any cards appear.
- **Animated timeline dots** — Each dot pops in with a spring-eased `scale + rotate` entrance, then continuously pulses a ring outward using a repeating `em-dotPulse` keyframe.
- **Staggered card entrance** — Cards use a `--delay` CSS custom property so each milestone enters 150 ms after the last, creating a natural reading rhythm without JavaScript.
- **Hover lift** — Cards translate upward and scale slightly on `:hover`, paired with an increased `box-shadow` and a brightened `border-color`, for a tactile "pick up" sensation.
- **Glow effect** — A blurred gradient layer behind each card fades in on hover; the dot glow radius also expands via a sibling `~` selector.
- **Card scaling** — Subtle `scale(1.015)` on hover prevents the lift from feeling flat.
- **Glassmorphism** — Cards use `backdrop-filter: blur(20px) saturate(1.4)` with a semi-transparent `rgba` fill to achieve the frosted-glass look against the dark gradient background.
- **Animated background blobs** — Three blurred radial gradients drift across the fixed background using `em-blobDrift`, adding atmospheric depth without distracting from the content.
- **Accessibility** — `prefers-reduced-motion` media query collapses all animation durations to `0.01ms`, ensuring the component is safe for users who need reduced motion. Decorative elements carry `aria-hidden="true"`.

---

## Usage

### 1. Copy the files

```
animated-curved-timeline/
├── demo.html
├── style.css
└── README.md
```

### 2. Link the stylesheet

```html
<link rel="stylesheet" href="style.css" />
```

### 3. Add the font (optional but recommended)

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Syne:wght@600;700;800&display=swap"
  rel="stylesheet"
/>
```

### 4. Drop in the HTML structure

Each milestone follows this pattern:

```html
<!-- Hidden SVG gradient (add once, before the first milestone) -->
<svg class="svg-defs" aria-hidden="true" focusable="false">
  <defs>
    <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#6366f1" stop-opacity="0.8" />
      <stop offset="50%" stop-color="#8b5cf6" stop-opacity="1" />
      <stop offset="100%" stop-color="#a78bfa" stop-opacity="0.8" />
    </linearGradient>
  </defs>
</svg>

<!-- Left-side card (use milestone--right for the opposite side) -->
<article class="milestone milestone--left" style="--delay: 0.1s">
  <!-- Connector: SVG line + animated dot -->
  <div class="milestone__connector" aria-hidden="true">
    <svg
      class="connector-curve"
      viewBox="0 0 120 60"
      fill="none"
      preserveAspectRatio="none"
    >
      <path class="curve-path" d="M 0 30 C 40 30, 80 30, 120 30" />
    </svg>
    <div class="milestone__dot">
      <div class="milestone__dot-ring"></div>
      <div class="milestone__dot-core"></div>
    </div>
  </div>

  <!-- Card -->
  <div class="milestone__card">
    <div class="milestone__card-glow" aria-hidden="true"></div>

    <!-- Icon -->
    <div class="milestone__icon-wrap">
      <svg
        class="milestone__icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <!-- your icon path here -->
      </svg>
    </div>

    <div class="milestone__meta">
      <time class="milestone__date">January 2024</time>
      <h2 class="milestone__title">Research</h2>
    </div>

    <p class="milestone__desc">Your milestone description here.</p>

    <div class="milestone__footer">
      <span class="milestone__tag">Tag One</span>
      <span class="milestone__tag">Tag Two</span>
    </div>
  </div>
</article>
```

### 5. Stagger your milestones

Control entrance order with the `--delay` CSS variable on each `.milestone`:

```html
<article class="milestone milestone--left" style="--delay: 0.1s">…</article>
<article class="milestone milestone--right" style="--delay: 0.25s">…</article>
<article class="milestone milestone--left" style="--delay: 0.4s">…</article>
```

### 6. Customise the design tokens

All palette, spacing, and timing decisions live in `:root` inside `style.css`. Override any variable in your own stylesheet without touching the source:

```css
:root {
  --color-bg: #06060d; /* page background */
  --dot-color: #7c3aed; /* dot fill */
  --grad-primary: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  --section-gap: 3rem; /* vertical space between milestones */
  --timeline-width: 1000px; /* max-width of the timeline */
}
```

---

## Why it fits EaseMotion CSS

EaseMotion CSS is built on three principles. The Animated Curved Timeline honours each of them:

### Animation-first

Every visual element in the component serves a motion purpose. The spine grows before the cards appear — establishing spatial orientation. Cards stagger in with `em-fadeUp` so the eye is guided rather than overwhelmed. The SVG paths self-draw to reinforce the idea of progress and sequence. Animation isn't applied on top of a static design; it _is_ the design.

### Human-readable

Every keyframe has a plain-English name prefixed with `em-`: `em-fadeUp`, `em-dotPop`, `em-growDown`, `em-drawLine`, `em-blobDrift`. A developer reading the stylesheet for the first time can immediately understand what each animation does and where to change it. CSS custom properties like `--delay`, `--dot-size`, and `--grad-primary` make the configuration layer self-documenting and safe to override.

### Composable

The component is pure HTML + CSS with no JavaScript, no utility-class framework, and no build step. It integrates with any stack by simply linking `style.css`. Individual keyframes (`em-fadeUp`, `em-dotPulse`) and utility classes (`.milestone__card`, `.milestone__tag`) are scoped and namespaced so they can be extracted and reused in other EaseMotion components without conflict. The `--delay` token makes stagger orchestration a one-line HTML attribute, not a JS timer.

---

## Folder Structure

```
animated-curved-timeline/
├── demo.html      ← Full working demo with 6 milestones
├── style.css      ← All styles, keyframes, variables, and media queries
└── README.md      ← This file
```

---

## Browser Support

| Feature                  | Chrome | Firefox | Safari | Edge |
| ------------------------ | ------ | ------- | ------ | ---- |
| `backdrop-filter`        | ✓      | ✓       | ✓      | ✓    |
| CSS custom properties    | ✓      | ✓       | ✓      | ✓    |
| CSS `@keyframes`         | ✓      | ✓       | ✓      | ✓    |
| SVG `stroke-dashoffset`  | ✓      | ✓       | ✓      | ✓    |
| `prefers-reduced-motion` | ✓      | ✓       | ✓      | ✓    |

Minimum recommended: Chrome 88+, Firefox 89+, Safari 14+, Edge 88+.

---

## License

MIT © EaseMotion CSS Contributors
