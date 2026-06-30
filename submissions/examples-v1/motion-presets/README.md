# Motion Presets

## Overview

Motion Presets provide a curated collection of reusable animation combinations that solve common UI entrance and reveal scenarios. Instead of layering multiple animation utilities, developers use a single, semantic class that combines entrance animation, easing curve, duration, and polish.

## Problem Statement

Animation in modern UIs requires coordination across multiple concerns:
- **What** enters (fade, scale, slide)
- **How** it enters (easing function)
- **When** it enters (duration, delay)
- **Polish** (stagger timing for lists)

Developers often repeat these combinations across projects, leading to inconsistent motion language and verbose CSS.

## Proposed Solution

Motion Presets encode common animation patterns as semantic CSS classes. Each preset is an opinionated but customizable combination of keyframe animation, easing function, and duration, designed for specific UI contexts.

## Available Motion Presets

### `.motion-hero`
**Use case:** Landing page hero sections, main value propositions, above-the-fold content.

**Behavior:**
- Entrance: Fade + Slide Up (40px)
- Duration: 0.8s
- Easing: Smooth curve (cubic-bezier(0.34, 1.56, 0.64, 1))
- Effect: Emphasizes importance; slight overshoot for appeal

**Example:**
```html
<section class="hero motion-hero">
  <h1>Welcome to Motion Presets</h1>
</section>
```

---

### `.motion-card`
**Use case:** Feature cards, dashboard cards, list items, any repeatable content blocks.

**Behavior:**
- Entrance: Fade + Lift (20px rise + 0.95 scale)
- Duration: 0.6s
- Easing: Soft curve (cubic-bezier(0.25, 0.46, 0.45, 0.94))
- Effect: Approachable, subtle lift suggests interactivity

**Example:**
```html
<div class="features-grid">
  <div class="card motion-card">Feature 1</div>
  <div class="card motion-card" style="animation-delay: 100ms;">Feature 2</div>
  <div class="card motion-card" style="animation-delay: 200ms;">Feature 3</div>
</div>
```

---

### `.motion-modal`
**Use case:** Modals, dialogs, alerts, overlay content.

**Behavior:**
- Entrance: Fade + Zoom (scale from 0.9)
- Duration: 0.5s
- Easing: Smooth curve
- Effect: Quick, centered emphasis; draws attention without distraction

**Example:**
```html
<div class="modal motion-modal">
  <h2>Confirm Action</h2>
  <p>Are you sure?</p>
</div>
```

---

### `.motion-gallery`
**Use case:** Image grids, masonry layouts, galleries, list reveals.

**Behavior:**
- Entrance: Fade + Slide from left (30px)
- Duration: 0.7s
- Easing: Soft curve
- Stagger: Built-in delays via nth-child (100ms intervals, up to 8 items)
- Effect: Creates a cascading reveal effect

**Example:**
```html
<div class="gallery-grid">
  <img class="motion-gallery" src="image1.jpg" alt="1" />
  <img class="motion-gallery" src="image2.jpg" alt="2" />
  <img class="motion-gallery" src="image3.jpg" alt="3" />
</div>
```

---

### `.motion-navbar`
**Use case:** Navigation bars, header elements, top-level navigation links.

**Behavior:**
- Entrance: Fade + Slide Down (30px from top)
- Duration: 0.4s
- Easing: Soft curve
- Effect: Fast, punchy entrance; feels responsive

**Example:**
```html
<nav class="navbar">
  <a href="/" class="motion-navbar">Home</a>
  <a href="/about" class="motion-navbar">About</a>
</nav>
```

---

## Usage Examples

### Simple Hero with Preset

```html
<section class="hero motion-hero">
  <h1>Launch Beautiful UIs</h1>
  <p>Motion Presets make animation effortless.</p>
</section>
```

### Staggered Card List with Delays

```html
<div class="features">
  <div class="card motion-card">Card 1</div>
  <div class="card motion-card" style="animation-delay: 100ms;">Card 2</div>
  <div class="card motion-card" style="animation-delay: 200ms;">Card 3</div>
</div>
```

### Auto-Staggered Gallery (No Manual Delays)

```html
<div class="gallery">
  <div class="item motion-gallery">Item 1</div>
  <div class="item motion-gallery">Item 2</div>
  <div class="item motion-gallery">Item 3</div>
</div>
```

---

## Benefits

- **Semantic:** Classes read like intent, not implementation.
- **Consistency:** Motion language is unified across pages and projects.
- **Fast iteration:** One class replaces multiple animation utilities.
- **Accessible:** Respects `prefers-reduced-motion` globally.
- **Customizable:** Easy to override durations, easings, and delays with inline styles.
- **Lightweight:** Pure CSS; no JavaScript required.

---

## Customization

Override preset durations and timing globally via CSS custom properties:

```css
:root {
  --duration-hero: 1s;
  --ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
}
```

Or per-element with inline styles:

```html
<div class="motion-card" style="animation-duration: 1.2s; animation-delay: 50ms;">
  Custom Card
</div>
```

---

## Future Improvements

- Add preset variants (e.g., `.motion-card-fast`, `.motion-card-slow`).
- Provide JavaScript helper to auto-stagger lists without manual delays.
- Add entry/exit presets (e.g., `.motion-exit-fade`, `.motion-exit-zoom`).
- Combine with Tailwind or other CSS frameworks via plugin.
- Add `motion-sequential` class for automatic staggering of all children.
- Expand with scroll-triggered and intersection-observer variants.

---

## Alignment with EaseMotion Philosophy

"Animation-first CSS for humans."

Motion Presets embody this by:
1. Making animation a first-class concern in the class API.
2. Using human-readable names that map to visual intent.
3. Reducing boilerplate and encouraging motion in every project.
4. Remaining lightweight, accessible, and easy to customize.

---

Built with EaseMotion CSS philosophy. If you can describe an animation, you should be able to write it as a class.