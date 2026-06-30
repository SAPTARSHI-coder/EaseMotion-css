# CSS Animation Chaining & Sequencing Guide

Welcome to the **CSS Animation Chaining & Sequencing Guide**! This comprehensive tutorial explains how to orchestrate complex user interface motions using CSS custom properties, animation delay scales, shorthand multi-value configurations, and the fill-mode property.

---

## 📋 Table of Contents

1. [Introduction to Animation Orchestration](#1-introduction-to-animation-orchestration)
2. [Single-Element Chaining (Shorthand Syntax)](#2-single-element-chaining-shorthand-syntax)
3. [Sequencing Across Multiple Elements](#3-sequencing-across-multiple-elements)
4. [The Critical Role of `animation-fill-mode: both`](#4-the-critical-role-of-animation-fill-mode-both)
5. [Real-World Showcase Examples](#5-real-world-showcase-examples)
6. [Web Accessibility (WCAG 2.1 Guidelines)](#6-web-accessibility-wcag-21-guidelines)
7. [Performance & Rendering Optimization](#7-performance--rendering-optimization)

---

## 1. Introduction to Animation Orchestration

In standard CSS animation design, motions are often treated as independent events. However, advanced interfaces require choreographed transitions where animations occur in stages on a single element or ripple across multiple elements in sequence.

- **Chaining**: Applying multiple keyframes to a single element, executing them sequentially or with overlapping offsets.
- **Sequencing**: Directing a timeline of entrance effects across a group of separate sibling elements.

---

## 2. Single-Element Chaining (Shorthand Syntax)

CSS allows you to specify multiple animations on a single selector by separating the animation property values with commas.

### CSS Animation Syntax Specification

```css
animation: [name] [duration] [timing-function] [delay] [iteration-count]
  [direction] [fill-mode];
```

### Multi-Chaining Code Example

```css
.chained-banner {
  /* Chains slideIn (0.6s entry) and then pulseGlow (infinite loop starting after entry finishes) */
  animation:
    slideInDown 0.6s cubic-bezier(0.16, 1, 0.3, 1) both,
    pulseGlow 1.5s ease-in-out 0.6s infinite;
}
```

By adding a `delay` of `0.6s` to the second animation (`pulseGlow`), we ensure it begins exactly when the first animation (`slideInDown`) finishes.

---

## 3. Sequencing Across Multiple Elements

To orchestrate animations across sibling elements, we apply the same animation class to each element but calculate a custom `animation-delay` offset for each child node.

```css
/* Shared entry settings */
.sequenced-item {
  opacity: 0;
  animation: slideInLeft 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
}

/* Staged delay offsets */
.seq-1 {
  animation-delay: 0.1s;
}
.seq-2 {
  animation-delay: 0.3s;
}
.seq-3 {
  animation-delay: 0.5s;
}
.seq-4 {
  animation-delay: 0.7s;
}
```

---

## 4. The Critical Role of `animation-fill-mode: both`

When sequencing delayed animations, a common bug is the **"pre-animation flash"**. Because the element has a delay, it is initially rendered in its default style (often fully visible), then flashes hidden when the animation starts, and finally executes.

To solve this, use `animation-fill-mode: both`.

```css
.sequenced-item {
  animation-fill-mode: both;
}
```

### Fill-Mode Options

- `none` (default): No styles are applied before the animation starts or after it finishes.
- `forwards`: The element retains the styles defined in the final keyframe (`100%` or `to`).
- `backwards`: The element applies the styles defined in the first keyframe (`0%` or `from`) immediately during the delay offset period.
- `both`: Applies both **forwards** and **backwards** behaviors. This guarantees the element remains hidden (retaining the `from` opacity of `0`) during the delay and stays visible upon completion.

---

## 5. Real-World Showcase Examples

The accompanying `demo.html` implements three patterns of CSS animation chaining:

### Pattern 1: Multi-Stage Sale Banner

- **Behavior**: Slides down from the top, settles with elastic bounce, and begins a continuous breathing glow effect.
- **Chaining Method**: Comma-separated shorthand animations on a single element.

### Pattern 2: Wizard Checklist Steps

- **Behavior**: Steps slide in from the left one after the other.
- **Sequencing Method**: Incremental delay scales (`0.1s`, `0.3s`, `0.5s`, `0.7s`) combined with `animation-fill-mode: both`.

### Pattern 3: Hybrid Hero Reveal Card

- **Behavior**: The card container scales in first. Once expanded, the headers and bodies slide in sequentially. Finally, a specialty badge bounces into view and initiates a slow loop.
- **Orchestration Method**: Combined multi-element sequencing delays and multi-stage shorthand chaining.

---

## 6. Web Accessibility (WCAG 2.1 Guidelines)

Overly complex animation sequences can cause distraction or vestibular distress. Always include accessibility overrides for users who request reduced motion at the operating system level.

```css
@media (prefers-reduced-motion: reduce) {
  .chained-banner,
  .sequenced-item,
  .hero-card,
  .hero-header,
  .hero-body,
  .hero-badge {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}
```

---

## 7. Performance & Rendering Optimization

To keep your chained and sequenced animations running at a smooth 60 FPS:

- **Promote Compositor Layers**: Use `will-change: transform, opacity;` on sequenced elements.
- **Avoid Layout Repaints**: Stick to animatable properties that do not trigger layout reflows (avoid changing `width`, `height`, `margin`, `top`, `left`).
