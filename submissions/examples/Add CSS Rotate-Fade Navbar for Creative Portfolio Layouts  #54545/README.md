# CSS Rotate-Fade Navbar for Creative Portfolio Layouts

A pure CSS, 3D perspective, and motion-driven navigation showcase engineered specifically for dark-themed creative portfolios, digital agency layouts, and interactive design studio exhibits.

## ✨ Overview

Navigation bars in high-end creative portfolios require more than simple underline hover effects. The **Rotate-Fade Navbar** collection introduces three distinct, pure CSS navigation systems that combine spatial rotation with smooth opacity and blur transitions:
1. **3D Perspective Link Roll (Desktop Navbar):** Navigation links utilize `perspective` and 3D transforms (`rotateX`) to rotate the default label upward and out of view while a secondary glowing neon label smoothly rotates in from below.
2. **Rotate-Fade Hamburger & Drawer (Mobile Menu):** A pure CSS checkbox toggle that transforms a hamburger icon into a close ('X') button via a 180° rotation and opacity swap. Toggling opens a glassmorphism dropdown menu where links cascade into view using a staggered 3D perspective rotation (`@keyframes` delay calc).
3. **Spinning Icon Dock (Floating Agency Dock):** A pill-shaped floating navigation bar where clicking pure CSS radio tabs triggers an elastic 360° icon spin paired with neon color and shadow transitions.

---

## 🚀 Features

- **100% Pure CSS & HTML:** Zero JavaScript required for state management, mobile menu drawer toggling, or tab selection.
- **3D Perspective Link Rolls:** Built with `perspective: 800px` and `transform-style: preserve-3d` for authentic depth-based rotation without GPU layout thrashing.
- **Staggered Drawer Entrance:** Mobile dropdown links enter with sequential CSS custom property delays (`calc(var(--menu-stagger) * index)`).
- **Studio Dark Mode & Glassmorphism:** Deep obsidian surfaces (`#07080c`) combined with `backdrop-filter: blur(20px)` and vibrant neon borders (`rgba(255, 255, 255, 0.12)`).
- **Cross-Browser Specification Compliance:** All `-webkit-` vendor prefixes (such as `-webkit-background-clip`) are explicitly paired with standard properties (`background-clip`) for 100% linter compliance and cross-browser reliability.
- **Accessibility & Reduced Motion:**
  - Fully keyboard accessible: All navigation items and custom toggles support `Tab` navigation and `:focus-visible` states that mirror mouse hover interactions.
  - Includes an `@media (prefers-reduced-motion: reduce)` block that replaces 3D rotations and spinning icons with instant, motion-free opacity swaps.

---

## 🎨 Customization (CSS Custom Properties)

Modify the baseline animation physics and studio color palette inside `:root`:

```css
:root {
  /* Animation Physics */
  --rotate-duration: 0.55s;
  --fade-duration: 0.35s;
  --rotate-ease: cubic-bezier(0.34, 1.56, 0.64, 1); /* Elastic spring snap */
  --menu-stagger: 0.08s;
  
  /* Studio Surfaces */
  --bg-navbar: rgba(18, 20, 30, 0.75);
  --bg-dropdown: rgba(26, 29, 44, 0.92);
  --glass-border: rgba(255, 255, 255, 0.12);
  
  /* Vibrant Accents */
  --accent-violet: #8b5cf6;
  --accent-cyan: #00f2fe;
}
```

---

## 📋 How to Use

### 1. 3D Perspective Link Roll (Desktop)
Wrap your link text in `.link-text-default` and `.link-text-hover` inside a 3D-preserved `.nav-link`:

```html
<nav class="navbar-container">
  <ul class="nav-menu">
    <li class="nav-item">
      <a href="#work" class="nav-link" tabindex="0">
        <span class="link-text-default">Selected Work</span>
        <span class="link-text-hover">Explore Portfolio</span>
      </a>
    </li>
  </ul>
</nav>
```

### 2. Pure CSS Rotate-Fade Mobile Drawer
Use a hidden checkbox input to control hamburger rotation and drawer expansion:

```html
<div class="mobile-nav-demo">
  <input type="checkbox" id="nav-toggle" class="mobile-toggle-input">
  
  <header class="mobile-header">
    <label for="nav-toggle" class="mobile-toggle-btn">
      <svg class="icon-burger">...</svg>
      <svg class="icon-close">...</svg>
    </label>
  </header>

  <nav class="mobile-dropdown">
    <ul class="mobile-menu-list">
      <li class="mobile-menu-item item-1"><a href="#1">Project 01</a></li>
      <li class="mobile-menu-item item-2"><a href="#2">Project 02</a></li>
    </ul>
  </nav>
</div>
```

---

## 🛠️ Verification & Testing Standards

- **Visual Quality:** Verified in dark studio aesthetics with glassmorphism blur and smooth neon gradients.
- **Responsiveness:** Fluid breakpoints adapt navbar layouts from multi-column desktop links to stacked mobile drawers.
- **Accessibility:** WCAG compliant contrast ratios, keyboard navigation support, and full `prefers-reduced-motion` compliance.

---
*Submitted for EaseMotion CSS Issue #54545*
