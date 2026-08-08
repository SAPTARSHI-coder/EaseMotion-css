# Animated Hero Section Component

A modern, SaaS/startup landing page hero component built with **pure HTML and CSS**. It incorporates floating background elements, glassmorphism overlays, stagger entrances, interactive hover states, and an abstract dashboard graphic made entirely with CSS shapes and animations.

---

## 1. What does this do?
The **Animated Hero Section** provides a high-impact landing page entrance that visually wows users as soon as the page loads:
- **Sequential Animations (Stagger)**: Headline, subtitle, and CTA buttons enter the screen in a timed cascade using CSS transition delays.
- **Ambient Depth (Background Orbs)**: Giant radial-gradient spheres drift slowly and organically behind the layout, creating a spatial, glowing grid backdrop.
- **Pure CSS Dashboard Visual**: The right-hand column features a browser window containing mock graph columns (that scale up on load) and glassmorphic stats widgets that float independently.
- **Scroll Indicator**: A mouse-shaped outline with a translating scroll wheel dot floats at the bottom, guiding users to scroll down.
- **100% JS-Free**: All motion and layouts are accomplished using pure CSS transitions, transforms, filter blurs, and keyframes.

---

## 2. How is it used?

### File Setup
Link `style.css` in the head of your document and copy the markup template:
```html
<link rel="stylesheet" href="style.css">
```

### HTML Layout Structure
The component uses semantic block containers:
```html
<!-- Ambient Background Elements -->
<div class="hero-bg-wrapper">
  <div class="hero-bg-grid"></div>
  <div class="bg-orb bg-orb-1"></div>
  <div class="bg-orb bg-orb-2"></div>
</div>

<!-- Main Hero Wrap -->
<section class="hero-section">
  <div class="hero-container">
    
    <!-- Left Column: Content -->
    <div class="hero-content">
      <div class="hero-badge"> ... </div>
      <h1 class="hero-headline"> ... </h1>
      <p class="hero-subtitle"> ... </p>
      <div class="hero-ctas"> ... </div>
    </div>
    
    <!-- Right Column: Visual Mockup -->
    <div class="hero-visual">
      <div class="browser-mockup">
        <!-- Dashboard components (graphs, metrics, overlays) -->
      </div>
    </div>
    
  </div>
</section>
```

### Customizable Properties
Easily override the main styling parameters using CSS variables in your layout:
```css
:root {
  --color-primary: #8b5cf6;      /* Customize primary brand color */
  --color-secondary: #06b6d4;    /* Customize cyan highlight color */
  --color-accent: #f43f5e;       /* Customize pink accent color */
  --bg-dark: #09090b;            /* Adjust background page color */
  
  /* Stagger Delay offsets */
  --delay-1: 0.15s;
  --delay-2: 0.35s;
  --delay-3: 0.55s;
}
```

---

## 3. Why is it useful?
- **Immediate UX WOW Factor**: Staggered, hardware-accelerated transitions capture visitor attention, improve brand perception, and establish a high-end feel.
- **High-Performance Motion**: Animations use CSS transforms, scales, and opacities that trigger compositor stages without causing layout repaints, resulting in a smooth 60fps experience even on lower-end hardware.
- **Responsive Layout**: Designed with fluid layouts and flex/grid architectures. Stacks nicely on tablet and mobile viewports, scaling font sizes and hiding complex decorative floating overlays automatically to save screen real estate.
- **Accessibility Safeguards**: Includes support for the `prefers-reduced-motion: reduce` query. When users enable this setting, all translations, scales, and continuous floating cycles are bypassed, displaying a clean, static, non-triggering grid instead.
