# CSS Zoom-In Hero Section — Fintech Dashboard Layout

A pure CSS/HTML showcase for **EaseMotion CSS** featuring a smooth zoom-in hero animation designed specifically for fintech dashboard interfaces.

---

## Live Preview

Open `demo.html` in any modern browser — no build step, no dependencies, no JavaScript required.

---

## What's Included

```
submissions/examples/fintech-zoom-hero/
├── demo.html     — Full HTML5 showcase page
├── style.css     — All animations and styles
└── README.md     — This file
```

---

## Animations Overview

### 1. `zoomInHero` — Core hero entrance
The primary animation. Elements zoom in from 72% scale with a slight upward drift and spring overshoot, giving the entrance a confident, physical feel.

```css
@keyframes zoomInHero {
  0%   { opacity: 0; transform: scale(0.72) translateY(24px); }
  60%  { opacity: 1; transform: scale(1.04) translateY(-4px); }
  100% { opacity: 1; transform: scale(1)    translateY(0); }
}
```

**Applied to:** badge, heading, subheading, CTA buttons, KPI grid  
**Stagger:** 100ms delay increments per element for a cascading reveal

---

### 2. `zoomInCard` — KPI and feature card entrance
A tighter zoom with no overshoot, suited for dense UI cards where subtlety matters.

```css
@keyframes zoomInCard {
  0%   { opacity: 0; transform: scale(0.8) translateY(20px); }
  100% { opacity: 1; transform: scale(1)   translateY(0); }
}
```

**Applied to:** `.kpi-card`, `.feature-card`  
**Stagger:** 120ms increments per card

---

### 3. `sonarRing` — Ambient background pulse (signature element)
Three concentric rings emanate from behind the hero content, mimicking a radar/sonar sweep. This is the unique visual identity of this component.

```css
@keyframes sonarRing {
  0%   { transform: translate(-50%, -50%) scale(0.6); opacity: 0.6; }
  100% { transform: translate(-50%, -50%) scale(2.8); opacity: 0; }
}
```

**Rings:** 3 total, offset by `1.33s` each, running on a 4s loop  
**Color:** `var(--cyan)` border, transparent fill

---

### 4. `statPulse` — KPI value glow
Periodically pulses the text-shadow on KPI numbers to simulate a live data heartbeat.

```css
@keyframes statPulse {
  0%, 100% { text-shadow: 0 0 12px var(--glow-cyan); }
  50%       { text-shadow: 0 0 28px var(--cyan), 0 0 48px var(--glow-cyan); }
}
```

---

### 5. `shimmerText` — Gradient headline shimmer
Sweeps a moving gradient across the accent text in the hero heading.

```css
@keyframes shimmerText {
  0%   { background-position: -200% center; }
  100% { background-position:  200% center; }
}
```

---

### 6. `tickerScroll` — Live market ticker
Scrolls a duplicated row of market symbols from right to left in a seamless loop.

```css
@keyframes tickerScroll {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
```

> **Seamless loop tip:** Duplicate your ticker items in HTML so the second copy picks up exactly where the first ends.

---

### 7. `barGrow` — Chart bar entrance
Bars scale up from their base (`transform-origin: bottom`) on load.

```css
@keyframes barGrow {
  0%   { transform: scaleY(0); opacity: 0; }
  100% { transform: scaleY(1); opacity: 1; }
}
```

---

### 8. `floatUp` / `float-slow` — Ambient floating
Applied to chart bars and the donut chart to create a gentle breathing motion after the entrance animation completes.

```css
@keyframes floatUp {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-10px); }
}
```

---

### 9. `fadeSlideUp` — Section content reveal
Used for chart cards and dashboard sections below the hero fold.

---

### 10. `blink` — Status dot indicator
The live status dot in the nav logo and hero badge pulses via opacity.

---

## CSS Custom Properties

All design decisions are centralized as custom properties on `:root`:

| Token | Value | Usage |
|-------|-------|-------|
| `--bg-deep` | `#0A0F1E` | Page background |
| `--bg-card` | `#111827` | Card backgrounds |
| `--bg-card-hover` | `#1A2540` | Card hover state |
| `--cyan` | `#00D4FF` | Primary accent, CTAs |
| `--mint` | `#00FF88` | Positive indicators |
| `--purple` | `#7C3AED` | Tertiary accent |
| `--text-primary` | `#F0F4FF` | Headings, values |
| `--text-muted` | `#6B7FA3` | Labels, secondary text |
| `--border` | `rgba(0,212,255,0.12)` | Card borders |
| `--glow-cyan` | `rgba(0,212,255,0.25)` | Box/text shadow glow |
| `--font-display` | `'Space Grotesk'` | Headings, numbers, UI |
| `--font-body` | `'Inter'` | Body text |
| `--ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Springy hover/entrance |
| `--ease-smooth` | `cubic-bezier(0.4, 0, 0.2, 1)` | Standard transitions |

---

## EaseMotion CSS Classes

### Animation entry utilities

| Class | Animation | Duration |
|-------|-----------|----------|
| `.float` | `floatUp` 4.5s loop | Infinite |
| `.float-slow` | `floatUp` 6s loop, 1s delay | Infinite |

### Card modifier classes

| Class | Effect |
|-------|--------|
| `.kpi-value.mint` | Colors value text with `--mint` |
| `.kpi-value.cyan` | Colors value text with `--cyan` |
| `.kpi-delta.up` | Mint positive delta label |
| `.kpi-delta.dn` | Red negative delta label |
| `.bar.cyan` | Cyan gradient bar fill |
| `.bar.mint` | Mint gradient bar fill |
| `.bar.purple` | Purple gradient bar fill |

### Icon background utilities

| Class | Color |
|-------|-------|
| `.feature-icon.cyan-bg` | Cyan tint background |
| `.feature-icon.mint-bg` | Mint tint background |
| `.feature-icon.purple-bg` | Purple tint background |

---

## Usage: Reusing the Zoom-In Hero

Copy the following structure into your own project:

```html
<section class="hero">
  <!-- Sonar rings (optional ambient effect) -->
  <div class="sonar-wrap" aria-hidden="true">
    <div class="sonar-ring"></div>
    <div class="sonar-ring"></div>
    <div class="sonar-ring"></div>
  </div>

  <div class="hero-inner">
    <!-- Add your content here -->
    <!-- Each child will animate in with zoomInHero -->
  </div>
</section>
```

For the KPI cards:

```html
<div class="kpi-grid">
  <div class="kpi-card">
    <div class="kpi-label">Your Metric</div>
    <div class="kpi-value cyan">$0.00</div>
    <div class="kpi-delta up">↑ 0.0%</div>
  </div>
</div>
```

---

## Accessibility

- **`prefers-reduced-motion`**: All animations are disabled via `animation-duration: 0.01ms` when the user has enabled reduced motion in their OS settings.
- **ARIA labels**: Chart regions, KPI lists, and ticker use descriptive `aria-label` attributes.
- **Keyboard navigation**: All interactive elements (buttons, links) maintain visible focus states through browser defaults.
- **Color contrast**: Text against card and page backgrounds meets WCAG AA standards.
- **Semantic HTML**: Section headings (`h1`, `h2`), `nav`, `footer`, and list roles are used throughout.

---

## Browser Support

| Browser | Support |
|---------|---------|
| Chrome 90+ | ✅ Full |
| Firefox 88+ | ✅ Full |
| Safari 14+ | ✅ Full |
| Edge 90+ | ✅ Full |
| iOS Safari 14+ | ✅ Full |

Uses only standard CSS properties: `@keyframes`, `animation`, `transform`, `backdrop-filter` (progressive enhancement), `clip-path` for text gradients.

---

## Responsive Breakpoints

| Breakpoint | Layout change |
|------------|---------------|
| `< 900px` | KPI grid → 2 columns; sub-row stacks; nav links hidden |
| `< 600px` | KPI grid stays 2 columns; features → 1 column; hero title shrinks; nav CTA hidden |

---

## Performance Notes

- Zero JavaScript — all animations are GPU-accelerated via `transform` and `opacity`
- `will-change` is intentionally omitted to avoid unnecessary layer promotion
- Fonts loaded with `display=swap` to prevent FOIT
- Animation delays use `animation-fill-mode: both` to prevent flashes before entrance

---

## License

Part of the **EaseMotion CSS** open-source project.  
Submitted as part of GSSoC '26 — Issue #59389.