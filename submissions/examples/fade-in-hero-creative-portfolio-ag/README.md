# Fade-In Hero Section — Creative Portfolio Layouts

A production-quality, pure CSS Fade-In Hero Section designed for Creative Portfolio websites, personal showcases, and agency landing pages. Built with zero JavaScript using standard EaseMotion CSS primitives and custom property controls.

## Overview

This component provides a focused, elegant entrance showcase for creative professionals. Elements enter in a controlled sequence using standard EaseMotion staggered fade utilities (`ease-fade-in` and `ease-delay-*`), supported by a restrained background grid and ambient lighting.

## Features

- **Pure HTML5 & CSS3:** No JavaScript frameworks or external dependencies.
- **EaseMotion Native Primitives:** Direct integration with core framework classes (`ease-fade-in`, `ease-delay-*`, design tokens).
- **Smooth Entrance Sequence:** GPU-accelerated motion combining opacity and subtle vertical translation.
- **Fully Responsive:** Fluid layout using `clamp()` typography and flexbox reflow across desktop, tablet, and mobile viewports.
- **Accessible & Screen-Reader Friendly:** Semantic HTML structure, visible focus states (`:focus-visible`), and explicit ARIA roles.
- **`prefers-reduced-motion` Support:** Automatically disables animations and transitions for users requesting reduced motion.

## EaseMotion Classes Used

| Class Name | Function |
| ---------- | -------- |
| `ease-fade-in` | Core EaseMotion fade-in animation keyframe utility |
| `ease-delay-100` | Staggers status badge entrance by 100ms |
| `ease-delay-200` | Staggers hero headline entrance by 200ms |
| `ease-delay-300` | Staggers description copy entrance by 300ms |
| `ease-delay-400` | Staggers call-to-action buttons entrance by 400ms |

## CSS Custom Properties

The component offers control over entrance dynamics through scoped CSS variables:

```css
:root {
  --portfolio-hero-bg: #060913;
  --portfolio-hero-surface: rgba(255, 255, 255, 0.035);
  --portfolio-hero-border: rgba(255, 255, 255, 0.09);
  --portfolio-hero-accent: #6366f1;
  --portfolio-hero-accent-light: #818cf8;
  --portfolio-hero-accent-glow: rgba(99, 102, 241, 0.35);

  /* Animation dynamics */
  --hero-fade-duration: 800ms;
  --hero-fade-ease: cubic-bezier(0.16, 1, 0.3, 1);
  --hero-fade-distance: 24px;
}
```

## Responsive Behavior

- **Desktop (≥ 769px):** Horizontal hero actions with fluid typography and centered layout.
- **Mobile (≤ 640px):** CTA buttons reflow into full-width stacked touch targets with adjusted vertical spacing.

## Accessibility

- **Keyboard Navigation:** High-contrast focus rings applied via `:focus-visible`.
- **Motion Reduction:** Handled via `@media (prefers-reduced-motion: reduce)` media query.

## File Structure

```text
submissions/examples/fade-in-hero-creative-portfolio-ag/
├── demo.html    # HTML5 showcase document
├── style.css    # Scoped styles and EaseMotion imports
└── README.md    # Component documentation
```
