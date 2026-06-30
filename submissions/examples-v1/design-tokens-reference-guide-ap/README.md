# Design Tokens Reference Guide

Welcome to the **Design Tokens Reference Guide**! This comprehensive document details all CSS Custom Properties (design tokens) used to style and configure EaseMotion CSS animations, along with visual usage guides and override guidelines.

---

## 📋 Table of Contents

1. [Color Tokens Registry](#1-color-tokens-registry)
2. [Timing & Duration Scales](#2-timing--duration-scales)
3. [Spacing Scale Registry](#3-spacing-scale-registry)
4. [How to Override Tokens](#4-how-to-override-tokens)

---

## 1. Color Tokens Registry

Color tokens define core theme accents, feedback tones, and baseline surface values. Override these globally or locally to align with your design system.

| Variable Token Name      | Default Spec Value  | HEX Code  | Component Application                                       |
| :----------------------- | :------------------ | :-------: | :---------------------------------------------------------- |
| `--ease-color-primary`   | HSL (262, 89%, 66%) | `#8b5cf6` | Primary brand accent applied to visual focuses and springs. |
| `--ease-color-secondary` | HSL (217, 91%, 60%) | `#3b82f6` | Secondary accent.                                           |
| `--ease-color-success`   | HSL (162, 84%, 40%) | `#10b981` | Validation checks (green highlights).                       |
| `--ease-color-warning`   | HSL (38, 92%, 50%)  | `#f59e0b` | Alert badges (amber warnings).                              |
| `--ease-color-error`     | HSL (0, 84%, 60%)   | `#ef4444` | Reject states (red borders).                                |

---

## 2. Timing & Duration Scales

Timing tokens configure keyframe speeds and physics easing curves.

### 1. Duration Constants

| Duration Variable Token  | Default Value | Usage Scope                                          |
| :----------------------- | :------------ | :--------------------------------------------------- |
| `--ease-duration-fast`   | `200ms`       | Tiny transitions (hover shifts, scale taps).         |
| `--ease-duration-normal` | `450ms`       | Standard transitions (slide entry, fades).           |
| `--ease-duration-slow`   | `900ms`       | Large animations (page transitions, spring bounces). |

### 2. Easing Curves

| Easing Variable Token   | Cubic-Bezier Value                    | Motion Quality                    |
| :---------------------- | :------------------------------------ | :-------------------------------- |
| `--ease-curve-spring`   | `cubic-bezier(0.34, 1.56, 0.64, 1)`   | Elastic rebound physics.          |
| `--ease-curve-elastic`  | `cubic-bezier(0.25, 1.25, 0.5, 1.25)` | Exaggerated spring feedback.      |
| `--ease-curve-standard` | `cubic-bezier(0.4, 0, 0.2, 1)`        | Smooth acceleration/deceleration. |

---

## 3. Spacing Scale Registry

Spacing tokens define padding layouts, offsets, and grid gaps.

| Spacing Variable Token | Default Value (px) | Default Value (rem) | Usage Scope              |
| :--------------------- | :----------------- | :------------------ | :----------------------- |
| `--ease-space-1`       | `4px`              | `0.25rem`           | Small utility margins.   |
| `--ease-space-2`       | `8px`              | `0.5rem`            | Intermediate list gaps.  |
| `--ease-space-3`       | `12px`             | `0.75rem`           | Card padding bounds.     |
| `--ease-space-4`       | `16px`             | `1rem`              | Standard page grids.     |
| `--ease-space-6`       | `24px`             | `1.5rem`            | Large section headers.   |
| `--ease-space-8`       | `32px`             | `2rem`              | Hero element containers. |

---

## 4. How to Override Tokens

### 1. Global Overrides (Application-Wide)

To override variables globally, redefine them in your root stylesheet within the `:root` selector:

```css
/* root-variables.css */
:root {
  /* Override core branding color */
  --ease-color-primary: #10b981;

  /* Make all default transitions 30% faster */
  --ease-duration-normal: 300ms;
}
```

### 2. Local/Component-Level Overrides

To limit animations adjustments to specific UI containers, redefine variables within a local parent selector:

```css
/* CardComponent.css */
.custom-card {
  /* Only overrides durations inside this container scope */
  --ease-duration-normal: 900ms;
}

/* Children elements automatically inherit overridden variables */
.custom-card .ease-slide-in {
  animation-duration: var(--ease-duration-normal);
}
```
