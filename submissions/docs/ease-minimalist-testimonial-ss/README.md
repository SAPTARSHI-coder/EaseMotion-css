# Minimalist User Testimonial Card - Responsive Guide

## Overview

The **Minimalist User Testimonial Card** component delivers a clean, content-first user review presentation optimized for modern design systems. Built with zero external Javascript dependencies, it leverages standard HTML5 semantic elements (`<figure>`, `<blockquote>`, `<figcaption>`) and modern CSS custom properties to provide a fluid, accessible, and responsive layout across all device viewports.

## HTML Semantic Specification

The component structure strictly adheres to HTML5 semantic markup standards to ensure proper document outline and assistive technology support:

```html
<figure class="ease-tm-card">
  <div class="ease-tm-rating" aria-label="Rated 5 out of 5 stars" title="5 out of 5 stars">
    <span aria-hidden="true">★</span>
    <span aria-hidden="true">★</span>
    <span aria-hidden="true">★</span>
    <span aria-hidden="true">★</span>
    <span aria-hidden="true">★</span>
  </div>
  <blockquote class="ease-tm-quote">
    "The minimalist design system allowed our engineering team to ship the beta three weeks ahead of schedule. The focus on pure semantics and accessibility is unparalleled."
  </blockquote>
  <figcaption class="ease-tm-author">
    <div class="ease-tm-avatar" role="img" aria-label="Avatar for Sarah Jenkins"></div>
    <div class="ease-tm-meta">
      <strong class="ease-tm-name">Sarah Jenkins</strong>
      <span class="ease-tm-role">VP of Engineering, CloudScale</span>
    </div>
  </figcaption>
</figure>
```

## Responsive Grid & Breakpoint Matrix

The grid container (`.ease-testimonial-grid`) employs a mobile-first responsive layout matrix using CSS Grid:

| Breakpoint | Viewport Range | Grid Structure | CSS Rule |
| :--- | :--- | :--- | :--- |
| **Mobile Base** | `< 640px` | 1 Column (Stacked layout) | `grid-template-columns: 1fr;` |
| **Tablet** | `640px - 1023px` | 2 Columns | `grid-template-columns: repeat(2, 1fr);` |
| **Desktop** | `>= 1024px` | 3 Columns | `grid-template-columns: repeat(3, 1fr); gap: 2rem;` |

## CSS Custom Property Themes (Tokens)

The component is configured via CSS custom properties scoped to `:root` or parent containers, allowing seamless integration with design system themes:

| Custom Property | Description | Default Value |
| :--- | :--- | :--- |
| `--tm-bg` | Showcase canvas background color | `#fafafa` |
| `--tm-surface` | Card background color | `#ffffff` |
| `--tm-border` | Minimalist stroke color | `#e4e4e7` |
| `--tm-text-primary` | High-contrast quote & header text color | `#18181b` |
| `--tm-text-secondary` | Subtle metadata text color | `#71717a` |
| `--tm-accent` | Primary accent color | `#18181b` |
| `--tm-star` | Star rating accent color | `#f59e0b` |
| `--tm-radius` | Card border radius | `12px` |

## Accessibility & WAI-ARIA Rating Guidelines (WCAG 2.1 AA)

To satisfy **WCAG 2.1 AA** compliance standards, the testimonial card incorporates explicit accessibility enhancements:

1. **Screen Reader Star Rating Announcement:**
   - The rating container MUST include an explicit `aria-label="Rated X out of 5 stars"` attribute.
   - Individual visual star symbols (`★`) MUST be hidden from screen readers using `aria-hidden="true"` on the containing `<span>` elements to prevent repetitive or confusing auditory output (e.g., preventing "black star black star black star...").

2. **Contrast & Color Requirements:**
   - High-contrast text `--tm-text-primary` (`#18181b`) against `--tm-surface` (`#ffffff`) delivers a visual contrast ratio of **16.1:1**, comfortably exceeding the minimum WCAG 2.1 AA 4.5:1 requirement for normal text.

3. **Accessibility Features & High-Contrast Support:**
   - Includes forced-colors media query (`@media (forced-colors: active)`) support for Windows High Contrast Mode, rendering cards with standard system canvas borders.
   - Supports `prefers-reduced-motion: reduce` by suppressing hover translations and transitions for users sensitive to motion.
