# CSS Morph-Glow Toast for Creative Portfolio Layouts

A pure CSS, shape-morphing, and neon-illuminated notification toast component engineered specifically for modern dark-themed creative portfolios, digital agency showcases, and interactive web exhibits.

## ✨ Overview

Traditional toast notifications are static, rectangular boxes that often clutter high-aesthetic studio layouts. The **Morph-Glow Toast** reimagines the notification lifecycle:
1. **Pill State (Resting):** By default, the toast rests as an ultra-compact, glowing 50px pill that displays only the primary status icon, title, and a pulsing status indicator—preserving valuable screen real estate.
2. **Card State (Morphed):** Upon user hover or keyboard focus (`:focus-within`), the geometry smoothly morphs into an expanded studio card. The description, portfolio metadata tags, and primary/secondary action buttons slide into view using staggered transitions, while an underlying neon glow intensifies around the component.
3. **Pure CSS Dynamic Triggering:** Features an interactive playground that uses the CSS checkbox hack (`:checked ~`) to dynamically launch floating toasts into a fixed viewport without a single line of JavaScript.

---

## 🚀 Features

- **100% Pure CSS & HTML:** Zero JavaScript required for state management, shape morphing, or interactive toggle buttons.
- **Shape-Morphing Geometry:** Seamlessly transitions `border-radius`, `width`, `padding`, and `max-height` powered by an elastic spring curve (`cubic-bezier(0.34, 1.56, 0.64, 1)`).
- **Ambient Neon Glow Layering:** Utilizes layered `::before` and `::after` pseudo-elements with `filter: blur()` and composite masks to cast an atmospheric glowing aura that dynamically reacts to user interactions.
- **4 Studio Color Themes:** Pre-configured with vibrant gradient palettes tailored for creative layouts:
  - 🟢 **Emerald Mint (`.toast-theme-emerald`):** Perfect for successful deployments and published showcases.
  - 🟣 **Electric Purple (`.toast-theme-purple`):** Designed for client reviews and design approvals.
  - 🔵 **Cyber Cyan (`.toast-theme-cyan`):** Ideal for 3D asset exports and system info.
  - 🔴 **Rose Crimson (`.toast-theme-rose`):** High-visibility alert for render bottlenecks or build failures.
- **Accessibility & Reduced Motion:** 
  - Fully keyboard accessible: Tabbing into a toast automatically triggers the `:focus-within` morphing state so screen reader and keyboard users can access all action buttons.
  - Includes a comprehensive `@media (prefers-reduced-motion: reduce)` block that disables floating and pulsing animations while providing instant, motion-free shape transitions.

---

## 🎨 Customization (CSS Custom Properties)

The component exposes standard design tokens on `:root` and theme-specific tokens for effortless theming and integration into any project:

```css
:root {
  /* Animation Timing & Physics */
  --morph-duration: 0.55s;
  --morph-ease: cubic-bezier(0.34, 1.56, 0.64, 1); /* Spring bounce */
  --glow-ease: cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Studio Surfaces */
  --bg-surface: rgba(20, 22, 32, 0.75);
  --bg-surface-elevated: rgba(30, 33, 48, 0.85);
  --glass-border: rgba(255, 255, 255, 0.12);
}

/* Applying a Theme to a Toast */
.toast-theme-purple {
  --theme-start: #a855f7;
  --theme-end: #ec4899;
  --theme-shadow: rgba(168, 85, 247, 0.45);
}
```

---

## 📋 How to Use

### 1. Standard Hover/Focus Morphing Card
Copy this markup to embed a shape-morphing toast card within your layout:

```html
<div class="morph-toast toast-theme-purple" tabindex="0" role="status">
  <!-- Always visible header (Pill State) -->
  <div class="morph-toast-header">
    <div class="toast-icon-wrap">
      <!-- Your SVG Icon -->
    </div>
    <div class="toast-title-area">
      <div class="toast-title">Case Study Published</div>
    </div>
    <div class="toast-status-pulse"></div>
  </div>

  <!-- Expands on Hover or Keyboard Focus (Card State) -->
  <div class="morph-toast-body">
    <p class="toast-description">Your new project showreel is now live on the showcase.</p>
    <div class="toast-meta">
      <span>4k 60fps</span>
      <span class="meta-dot"></span>
      <span>100% Core Web Vitals</span>
    </div>
    <div class="toast-actions">
      <a href="#view" class="toast-btn toast-btn-primary">View Live</a>
      <button class="toast-btn toast-btn-secondary">Dismiss</button>
    </div>
  </div>
</div>
```

### 2. Pure CSS Interactive Floating Trigger
To dynamically launch toasts on button clicks without JavaScript:

```html
<!-- Place hidden input at the root or section container -->
<input type="checkbox" id="my-toast-trigger" class="toast-trigger-input">

<!-- Trigger Button -->
<label for="my-toast-trigger" class="trigger-label-btn btn-purple">
  ✨ Show Notification
</label>

<!-- Fixed Viewport Container -->
<div class="floating-viewport">
  <div class="morph-toast floating-toast toast-theme-purple">
    <div class="morph-toast-header">
      <div class="toast-title">Notification Spawned!</div>
      <!-- Dismiss X label unchecks the input -->
      <label for="my-toast-trigger" class="toast-close-btn" aria-label="Dismiss">✕</label>
    </div>
    <!-- Body content... -->
  </div>
</div>
```

---

## 🛠️ Verification & Testing Standards

- **Visual Quality:** Verified in dark studio aesthetics with glassmorphism blur and smooth neon gradients.
- **Responsiveness:** Grid layout adapts gracefully on desktop, tablet, and mobile (`max-width: 640px` breakpoint auto-expands toasts to full container width).
- **Accessibility:** Checked against WCAG contrast ratios, focus outlines, and `prefers-reduced-motion` compliance.

---
*Submitted for EaseMotion CSS Issue #54610*
