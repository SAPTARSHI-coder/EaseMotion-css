# Navbar ScrollSpy & Premium CTA Utility 🧭

A modern, fluid navigation framework component implementing accurate fixed section targeting, scroll offsets, and an asynchronous `IntersectionObserver` scroll-spy state tracking pipeline.

## Core Features Implemented

- **Fixed-Header Scroll Offset**: Configures native `scroll-padding-top` variables to prevent fixed navbar footprints from overlapping section header bounds.
- **Asynchronous Viewport Tracking**: Utilizes highly performant native `IntersectionObserver` architecture instead of raw, janky window scroll listeners.
- **Visual Micro-Feedback Link States**: Leverages subtle glowing translucent container bounds for active structural highlights.
- **Redesigned CTA Interface Token**: Upgrades action components using deep dark-theme gradients and drop-shadow depth vectors.

## Structure Reference

```html
<header class="site-header">
  <a href="#section-id" class="nav-link">Label</a>
</header>
<section id="section-id" class="doc-section">...</section>