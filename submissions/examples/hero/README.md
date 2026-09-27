# Responsive Brutalist Hero Banner

A lightweight, zero-dependency Responsive Hero Banner component designed with Neobrutalism principles and powered by EaseMotion CSS design tokens.

---

## Features

- **Pure CSS**: Zero JavaScript dependencies required.
- **Brutalist Aesthetics**: High-contrast typography, heavy solid borders (`4px`), offset box-shadows (`6px 6px`), and vibrant accent palettes.
- **EaseMotion Tokens**: Built using EaseMotion custom properties for smooth state transitions and timing functions.
- **Responsive Layout**: Mobile-first design adapting fluidly across mobile, tablet, and desktop breakpoints.
- **Accessibility First**: Full support for `prefers-reduced-motion` and keyboard focus indicators.

---

## 1. EaseMotion Tokens & Custom Properties

The component relies on custom CSS variables that can be overridden at `:root` or container level:

```css
:root {
  /* Color Tokens */
  --hero-bg: #ffde59;
  --hero-surface: #ffffff;
  --hero-text: #000000;
  --hero-accent: #ff5757;
  --hero-border: #000000;
  
  /* Layout & Geometry */
  --hero-border-width: 4px;
  --hero-shadow-offset: 6px;
  
  /* EaseMotion Design Tokens */
  --easemotion-duration-fast: 150ms;
  --easemotion-duration-normal: 300ms;
  --easemotion-ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
  --easemotion-ease-out: cubic-bezier(0.16, 1, 0.3, 1);
}
