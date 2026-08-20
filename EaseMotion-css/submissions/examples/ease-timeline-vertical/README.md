# Component: ease-timeline-vertical

**Category:** Component — Timeline & Layouts  
**Type:** Pure CSS (Scroll-Driven Animations)  
**Folder:** `submissions/examples/ease-timeline-vertical/`

---

## What does this do?
Implements a responsive, pure-CSS vertical timeline component. The central track fill bar, entry slides, and dot marker glow activations are completely driven by viewport scroll progress.

---

## How is it used?

Include the vertical timeline layout in your page structure:

```html
<div class="ease-timeline-vertical">
  <!-- Progress fill line track -->
  <div class="ease-timeline-line" aria-hidden="true">
    <div class="ease-timeline-line-fill"></div>
  </div>

  <!-- Event 1 (Alternates Left automatically) -->
  <div class="ease-timeline-entry">
    <div class="ease-timeline-dot"></div>
    <div class="ease-timeline-card">
      <time class="ease-timeline-date">Jan 2026</time>
      <h4 class="ease-timeline-title">Event Title</h4>
      <p class="ease-timeline-description">Description text goes here.</p>
    </div>
  </div>

  <!-- Event 2 (Alternates Right automatically) -->
  <div class="ease-timeline-entry">
    <div class="ease-timeline-dot"></div>
    <div class="ease-timeline-card">
      <time class="ease-timeline-date">Feb 2026</time>
      <h4 class="ease-timeline-title">Another Event</h4>
      <p class="ease-timeline-description">Description text goes here.</p>
    </div>
  </div>
</div>
```

---

## Why is it useful?

1. **Interactive Scroll Progress:** Leverages modern W3C Scroll-Driven Animations (`animation-timeline: view()`) to sync line growth, marker expansions, and card slides directly with the scrolling progress.
2. **Zero Dependencies:** Eliminates heavy JavaScript libraries (like GSAP or ScrollMagic) and complex window event listeners, saving bundle weight and preventing paint delays.
3. **Responsive Alternating Layout:** Automatically shifts the alternating track layout to a left-aligned layout on mobile screens (`<= 768px`) to maximize readability.
4. **Progressive Enhancement Fallbacks:** Browsers lacking scroll-driven animation support fall back gracefully to standard static rendering (the accent progress track shows fully filled, and all timeline entries remain instantly visible).
5. **Accessibility Focus:** Supports user accessibility preferences (`prefers-reduced-motion: reduce`) by automatically bypassing all slide-ins and scale animations.

---

## Modifier Classes

| Class Name | Target Element | Description |
|---|---|---|
| `.ease-timeline-vertical` | Container | Main vertical timeline outer shell. Establishes track relative positioning. |
| `.ease-timeline-line` | Inner Element | Vertical line track wrapper. |
| `.ease-timeline-line-fill` | Inner Element | Progress filling line. Extends downwards relative to viewport scrolling. |
| `.ease-timeline-entry` | Inner Element | Single event container block. Alternates odd/even to left/right bounds. |
| `.ease-timeline-card` | Inner Element | Bordered container carrying descriptive text, titles, and dates. |
| `.ease-timeline-vertical--left` | Container Mod | Class override suffix that forces left-aligned timeline tracks on desktop viewports. |

---

## Customization (CSS Variables)

Set variable overrides in the container or `:root` to match your application branding:

```css
:root {
  --ease-timeline-accent: #6366f1;                 /* Primary accent focus color */
  --ease-timeline-accent-gradient: linear-gradient(180deg, #6366f1 0%, #a855f7 100%); /* Line gradient */
  --ease-timeline-line-color: rgba(255, 255, 255, 0.08); /* Background line color */
  --ease-timeline-dot-bg: #0b0f17;                 /* Central color inside the dot indicator */
  --ease-timeline-card-bg: #111827;                /* Card background fill */
  --ease-timeline-card-border: #1f2937;            /* Outline boundary edge line */
  --ease-timeline-radius: 16px;                    /* Card border-radius rounding */
}
```
