# CSS Zoom-In Pricing Table (Creative Portfolio Layouts)

A modern, lightweight, pure CSS/HTML showcase example created for **EaseMotion CSS** (#54646). 

This example demonstrates a multi-layered **Zoom-In Pricing Table architecture** specifically tailored for **Creative Portfolio Layouts** and high-end digital design studios. It combines springy staggered entrance animations, an interactive pure CSS billing frequency switcher, and a cinematic "camera lens" focus pull interaction—all built without a single drop of JavaScript.

---

## 🌟 Key Features & Architectural Highlights

### 1. 🔍 Cinematic "Camera Lens" Focus Pull & Depth of Field
When a user hovers or focuses on any pricing tier, the active card dynamically zooms into sharp foreground focus (`transform: scale(1.12) translateZ(30px) translateY(-12px)`) while illuminating with an ambient neon gradient glow. Simultaneously, via CSS sibling and child combinators (`.pricing-grid:hover .pricing-card:not(:hover)`), surrounding inactive tiers gently **recede into the background** (`transform: scale(0.94)`, reduced opacity, and Gaussian blur). This creates an immersive depth-of-field effect reminiscent of a camera lens pulling focus.

### 2. ⚡ Pure CSS Interactive Billing Switcher
The monthly vs. annual billing toggle is powered entirely by pure CSS using hidden radio inputs (`#billing-monthly` and `#billing-annual`) and general sibling combinators (`~`). 
- Toggling the switch animates a glowing neon pill slider across the toggle bar.
- Switching to annual billing dynamically swaps the price values with a custom keyframe pop animation (`@keyframes price-zoom-pop`) and reveals annual savings badges.

### 3. 🎨 Creative Portfolio Obsidian & Neon Aesthetics
Designed to wow visual artists and creative agencies at first glance:
- **Obsidian Dark Theme**: Deep viewport backgrounds (`#06070a`) layered with radial studio lighting and subtle grid coordinates.
- **Glassmorphism Stage**: Multi-layered frosted glass surfaces (`backdrop-filter: blur(16px)`) with glowing borders that illuminate on interaction.
- **Curated Tier Palettes**: Distinct neon accents for each tier—Cyan (`#06b6d4`) for Indie Creative, Purple/Pink Gradient (`#a855f7` to `#ec4899`) for Studio Pro, and Amber (`#f59e0b`) for Global Collective.

### 4. 🔗 Native EaseMotion Framework Integration
Natively integrates with the core **EaseMotion CSS framework** by importing `easemotion.css` and leveraging standard utility classes:
- `.ease-zoom-in`: Applies smooth springy entrance scaling (`@keyframes ease-kf-zoom-in`).
- `.ease-delay-100` – `.ease-delay-500`: Creates a staggered cascading load sequence across the header and pricing tiers.
- `.ease-text-gradient-flow`: Produces an animated multi-color gradient sweep across the main title accent.
- `.ease-squish-button`: Delivers satisfying, tactile micro-interaction squish feedback when clicking action CTA buttons.

---

## 🛠️ CSS Custom Properties (Design Tokens)

The stylesheet defines semantic custom properties in `:root` for effortless customization and theming:

```css
:root {
  /* Zoom & Transition Speeds */
  --zoom-speed-fast: 0.25s;
  --zoom-speed-normal: 0.5s;
  --zoom-speed-slow: 0.8s;
  --zoom-ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --zoom-ease-smooth: cubic-bezier(0.16, 1, 0.3, 1);
  
  /* Zoom Scales for Depth of Field */
  --scale-default: 1;
  --scale-focused: 1.12;
  --scale-receded: 0.94;
  --blur-receded: 3px;
  --opacity-receded: 0.55;

  /* Obsidian Viewport & Glass Surface */
  --bg-viewport: #06070a;
  --card-surface: rgba(18, 20, 30, 0.7);
  --card-surface-hover: rgba(25, 28, 42, 0.85);
  --card-border: rgba(255, 255, 255, 0.08);

  /* Tier Accent Gradients */
  --tier-indie-color: #06b6d4;      /* Cyan */
  --tier-studio-color: #a855f7;     /* Purple */
  --tier-studio-grad: linear-gradient(135deg, #a855f7, #ec4899);
  --tier-agency-color: #f59e0b;     /* Amber */
}
```

---

## 📱 Responsive Architecture & Accessibility

### Responsive Viewports
- **Desktop (> 1024px)**: 3-column 3D perspective grid with dramatic foreground zoom.
- **Tablet (768px – 1024px)**: 2-column balanced grid where the Enterprise tier gracefully spans both columns.
- **Mobile (< 768px)**: Single-column vertical stack. Zoom scales and padding are automatically calibrated (`--scale-focused: 1.04`) to prevent viewport horizontal overflow while preserving tactile feedback.

### Accessibility Standards (`prefers-reduced-motion`)
Full compliance with modern WAI-ARIA and accessibility best practices:
- Complete keyboard navigability (`tabindex="0"`) with clear focus ring outlines and `:focus-within` zoom states.
- Semantic HTML5 landmarks (`<header>`, `<main>`, `<section>`, `<article>`, `<button>`).
- Dedicated `@media (prefers-reduced-motion: reduce)` support:
  ```css
  @media (prefers-reduced-motion: reduce) {
    .pricing-card, .switch-slider, .price-val {
      transition: opacity 0.2s ease, border-color 0.2s ease !important;
      animation: none !important;
      transform: none !important;
    }
    .pricing-grid:hover .pricing-card:not(:hover) {
      filter: none !important;
      transform: none !important;
    }
  }
  ```

---

## 📂 File Structure

```text
submissions/examples/Add CSS Zoom-In Pricing Table for Creative Portfolio Layouts  #54646/
├── demo.html    # Clean HTML5 showcase page using standard EaseMotion classes
├── style.css    # Pure CSS stylesheet with smooth keyframe zoom animations
└── README.md    # Documentation and usage guide
```
