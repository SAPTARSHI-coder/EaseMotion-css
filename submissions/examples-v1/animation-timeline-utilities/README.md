# Animation Timeline Utilities

## Overview

Animation Timeline Utilities provide a collection of multi-stage animation sequences that handle complex motion choreography with a single, human-readable CSS class. Each timeline combines multiple animation stages (entrance, emphasis, settle) into a cohesive motion experience.

## Problem Statement

Creating sophisticated animations often requires:

- Multiple animation keyframes chained together
- Careful timing coordination between stages
- Repetitive CSS boilerplate across projects
- Complex `animation` property chains in markup

This leads to inconsistent motion language and verbose, hard-to-maintain animation code.

## Proposed Solution

Timeline utilities encode complete animation sequences as semantic CSS classes. Each timeline combines:

1. **Entrance stage** — How the element appears
2. **Emphasis stage** — Optional flourish or highlight
3. **Settle stage** — Final resting state

A single class applies the entire choreography, making animations readable and reusable.

## Available Timeline Presets

### `.timeline-reveal`

**Purpose:** Gentle, approachable entrance for content.

**Stages:**

1. Fade In + Slide Up from 40px (0%)
2. Overshoot slightly to -5px (50%)
3. Settle to final position (100%)

**Duration:** 1.2s | **Easing:** Smooth curve

**Best for:** Hero sections, feature cards, page content, staggered reveals

**Example:**

```html
<div class="timeline-reveal">Welcome to my site</div>
```

---

### `.timeline-attention`

**Purpose:** Grab attention with scale and pulse effects.

**Stages:**

1. Fade In + Scale from 0.8 (0%)
2. Scale up to 1.05 (50%)
3. Subtle pulse effect (75-85%)
4. Settle at 1.0 (100%)

**Duration:** 1.4s | **Easing:** Smooth curve

**Best for:** Alerts, badges, important notifications, CTAs

**Example:**

```html
<div class="timeline-attention">Important update!</div>
```

---

### `.timeline-success`

**Purpose:** Celebratory entrance with bounce and glow.

**Stages:**

1. Fade In + Scale from 0.5 (0%)
2. Bounce up to 1.1 (50%)
3. Expanding glow pulse (75%)
4. Settle at 1.0 (100%)

**Duration:** 1.5s | **Easing:** Bounce curve

**Best for:** Success messages, confirmations, form completions

**Example:**

```html
<div class="timeline-success">✓ Your changes were saved</div>
```

---

### `.timeline-modal`

**Purpose:** Sophisticated centered entrance for overlays.

**Stages:**

1. Fade In + Scale from 0.85 + Translate from 30px (0%)
2. Slight scale overshoot to 1.02 (50%)
3. Settle at 1.0 (100%)

**Duration:** 0.9s | **Easing:** Smooth curve

**Best for:** Modals, dialogs, alerts, overlay content

**Example:**

```html
<div class="modal timeline-modal">
  <h2>Confirm Action</h2>
  <p>Are you sure?</p>
</div>
```

---

### `.timeline-loading`

**Purpose:** Continuous subtle pulsing for indeterminate states.

**Stages:**

1. Fade In (0%)
2. Opacity pulse (25% → 75%)
3. Repeats indefinitely

**Duration:** 2s (infinite) | **Easing:** Smooth curve

**Best for:** Loading states, skeleton screens, processing indicators, sync states

**Example:**

```html
<div class="timeline-loading">Loading your data...</div>
```

---

## Usage Examples

### Simple Entrance

```html
<h1 class="timeline-reveal">Welcome</h1>
<p class="timeline-reveal" style="animation-delay: 100ms;">Subtitle</p>
```

### Staggered Card List

```html
<div class="features">
  <div class="card timeline-reveal">Feature 1</div>
  <div class="card timeline-reveal" style="animation-delay: 100ms;">
    Feature 2
  </div>
  <div class="card timeline-reveal" style="animation-delay: 200ms;">
    Feature 3
  </div>
</div>
```

### Modal with Attention

```html
<div class="modal-overlay timeline-modal">
  <div class="modal-content">
    <h2>Important Notice</h2>
    <p class="timeline-attention">Your session is expiring soon</p>
  </div>
</div>
```

### Loading State

```html
<div class="spinner timeline-loading">⚙️ Processing...</div>
```

### Mixed Timelines in Page

```html
<section class="hero timeline-reveal">Hero</section>
<div class="features">
  <div class="card timeline-reveal" style="animation-delay: 100ms;">Card 1</div>
  <div class="card timeline-reveal" style="animation-delay: 200ms;">Card 2</div>
</div>
<button class="timeline-attention">Important CTA</button>
```

---

## Benefits

- **Semantic:** Classes describe animation intent, not implementation.
- **Choreography:** Entire sequences in one class name.
- **Consistency:** Unified motion language across project.
- **Accessible:** Respects `prefers-reduced-motion` media query.
- **Customizable:** Override durations with CSS variables or inline styles.
- **Lightweight:** Pure CSS; no JavaScript required.
- **Reusable:** Apply same animation to different contexts.

---

## Customization

### Global CSS Variables

Override default timings globally:

```css
:root {
  --timeline-duration-reveal: 1.5s;
  --timeline-duration-attention: 1.8s;
  --timeline-duration-success: 2s;
  --ease-in-out: cubic-bezier(0.2, 0, 0.8, 1);
}
```

### Per-Element Overrides

Use inline styles for specific elements:

```html
<div
  class="timeline-reveal"
  style="animation-duration: 0.8s; animation-delay: 50ms;"
>
  Custom timing
</div>
```

### Stagger with nth-child

Automatically stagger child elements:

```css
.timeline-reveal:nth-child(1) {
  animation-delay: 0ms;
}
.timeline-reveal:nth-child(2) {
  animation-delay: 100ms;
}
.timeline-reveal:nth-child(3) {
  animation-delay: 200ms;
}
```

---

## Accessibility

All timelines respect the `prefers-reduced-motion` media query. For users who prefer reduced motion:

- Animations are disabled
- Elements appear instantly
- Content remains fully interactive

No action required — accessibility is built-in.

---

## Browser Support

Animation Timeline Utilities use standard CSS `@keyframes` and `animation` properties. Supported in all modern browsers:

- Chrome/Edge 43+
- Firefox 16+
- Safari 9+
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Future Improvements

- Add exit/exit timelines (e.g., `.timeline-exit-fade`, `.timeline-exit-slide`).
- Provide JavaScript helper for auto-staggered lists.
- Create timeline variants (e.g., `.timeline-reveal-fast`, `.timeline-reveal-slow`).
- Add scroll-triggered timeline animations.
- Develop Figma/design token integration.
- Add web animation API support for advanced sequencing.

---

## Comparison: Before and After

### Before (Multiple Utilities)

```html
<div
  class="fade-in slide-up ease-smooth"
  style="animation-duration: 0.8s; animation-delay: 100ms;"
>
  Content
</div>
```

### After (Timeline Utilities)

```html
<div class="timeline-reveal" style="animation-delay: 100ms;">Content</div>
```

---

## Alignment with EaseMotion Philosophy

"If you can describe the motion, you should be able to apply it with one class."

Animation Timeline Utilities embody this by:

1. Making complex animations accessible with simple class names.
2. Encoding motion intent into readable, semantic classes.
3. Reducing CSS boilerplate while improving consistency.
4. Prioritizing accessibility and user experience.

---

Built with EaseMotion CSS philosophy. Animation should enhance, not complicate.
