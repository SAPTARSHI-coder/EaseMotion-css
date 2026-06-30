# CSS Core Contributing Guide

Welcome to the **CSS Core Contributing Guide**! This document outlines the architectural standards and review criteria for getting animation designs integrated directly into the EaseMotion core package (`core/animations.css`).

---

## 📋 Table of Contents

1. [Core Integration vs. Submissions Folder](#1-core-integration-vs-submissions-folder)
2. [Naming Conventions & Namespaces](#2-naming-conventions--namespaces)
3. [Required Keyframe Structure](#3-required-keyframe-structure)
4. [Maintainer Review Criteria Checklist](#4-maintainer-review-criteria-checklist)

---

## 1. Core Integration vs. Submissions Folder

Before submitting a pull request, determine where your code belongs:

### 1. What Qualifies for Core Integration (`core/animations.css`)

- **High Reusability**: General-purpose utilities (like transitions, slide reveals, zoom entries, spring bounces) that can be applied to any HTML element.
- **Low File Weight**: Animations must add minimal overhead to the library size (less than 1kb uncompressed).
- **Zero Layout Assumptions**: The CSS must not force specific component layouts (e.g. enforcing margins, paddings, flex positions).

### 2. What Belongs in Submissions (`submissions/examples/`)

- **Complex Showcases**: Multi-element landing pages, animated dashboards, or complex portfolio layouts.
- **Specialized Transitions**: Complex keyframe sequences designed for specific elements, such as card flips or modal headers.
- **JS-Dependent Demos**: Pages requiring heavy JavaScript orchestrations (e.g. scroll observers, react/vue dynamic states).

---

## 2. Naming Conventions & Namespaces

To prevent collisions with existing user styles, all class names, variables, and keyframe names must adhere to our namespace rules:

### 1. Selector Classes

Must use the `.ease-` prefix followed by lowercase words separated by dashes:

```css
/* Correct namespaces */
.ease-slide-in-spring { ... }

/* Incorrect namespaces */
.slideInSpring { ... }
.custom-slide { ... }
```

### 2. CSS Custom Variables

Must start with `--ease-` to ensure customization scope safety:

```css
.ease-slide-in-spring {
  /* Bind customization hooks */
  animation-duration: var(--ease-duration, 0.8s);
  animation-timing-function: var(
    --ease-easing,
    cubic-bezier(0.34, 1.56, 0.64, 1)
  );
}
```

### 3. Keyframe Identifiers

Must match the selector class using camelCase naming:

```css
/* Correct camelCase scope keyframes */
@keyframes easeSlideInSpring { ... }

/* Incorrect scopes */
@keyframes slide-in { ... }
@keyframes slideIn { ... }
```

---

## 3. Required Keyframe Structure

### 1. Compositor Thread Safety (Performance rules)

To guarantee smooth 60fps rendering, all animations must run on the browser's compositor thread.

- **Safe Properties**: `transform`, `opacity`, `filter`.
- **Prohibited Properties**: Animating layout properties (like `width`, `height`, `margin`, `padding`, `top`/`left`) is not permitted as they trigger main-thread layout reflows.

```css
/* CORRECT: Runs on GPU compositor */
@keyframes easeSlideInSpring {
  from {
    transform: translateY(40px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* INCORRECT: Triggers heavy main-thread reflow loops */
@keyframes slide-in {
  from {
    margin-left: -50px;
  }
  to {
    margin-left: 0;
  }
}
```

### 2. Fill-Mode Configuration

Core animations should include `animation-fill-mode: both` to prevent visual snapping when animations complete.

---

## 4. Maintainer Review Criteria Checklist

Maintainers verify all submissions against this checklist before merging into the core:

| Metric Criteria              | Check Scope Description                                             | Status Required |
| :--------------------------- | :------------------------------------------------------------------ | :-------------: |
| **Namespace Scopes**         | Classes prefixed with `.ease-`, variables with `--ease-`            |  **Mandatory**  |
| **GPU Optimization**         | Zero layout reflow triggers (`margin`, `top`/`left` are prohibited) |  **Mandatory**  |
| **Accessibility Compliance** | Reduced motion vestibular-safe fallbacks included                   |  **Mandatory**  |
| **Weight Budget**            | Keyframe code footprint size is within 1kb                          |  **Mandatory**  |
