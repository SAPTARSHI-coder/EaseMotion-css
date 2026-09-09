# EaseMotion Sticky Header

A high-performance, hardware-accelerated sticky navigation header featuring a modern glass-morphism aesthetic. It is specifically engineered for layout stability, handling dynamic text overflow and responsive screen constraints seamlessly.

## Overview
The `alm-sticky-header` component provides a polished, fixed-top navigation bar. It leverages GPU-accelerated CSS properties to ensure smooth scrolling while using modern flexbox constraints to prevent layout breakage on both desktop (via text truncation) and mobile (via responsive stacking).

## Features
* **Hardware-Accelerated:** Utilizes `will-change` and `translateZ(0)` for buttery-smooth performance by offloading rendering to the GPU.
* **Glass-Morphism:** Implements backdrop blur for a premium translucent effect.
* **Overflow Protection:** Prevents long, unbroken text strings from expanding the layout by utilizing `text-overflow: ellipsis`.
* **Mobile Responsive:** Automatically stacks the logo and navigation menu on small viewports (below 640px) to eliminate horizontal scrolling.

## Implementation Details
The component uses a combination of flex-shrink management and media queries to maintain integrity:

```css
/* Truncation Logic */
.alm-nav-logo {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0; /* CRITICAL: Allows flex item to shrink below content size */
}

/* Responsive Stacking */
@media (max-width: 640px) {
  .alm-sticky-header {
    flex-direction: column;
    gap: 0.75rem;
  }
}
