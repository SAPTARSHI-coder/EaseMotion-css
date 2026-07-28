# Bounce-Pulse Gaming Hub Drawer

A pure CSS/HTML, high-performance slide-out navigation drawer designed for modern gaming dashboards, esports portals, and streaming platforms. Features custom cubic-bezier spring physics and continuous pulse glows without external JavaScript frameworks.

## 🌟 Key Features

- **Pure HTML5/CSS Implementation**: Driven via CSS custom properties and hidden checkbox input state (`#drawer-toggle`). Zero JavaScript required.
- **Physics-Inspired Bounce**: Custom cubic-bezier spring easing (`cubic-bezier(0.68, -0.55, 0.265, 1.55)`) combined with keyframe overshooting for gaming-inspired UI feedback.
- **Ambient Pulse FX**: Glow and badge pulsing keyframes to highlight live activities and alerts.
- **Full Accessibility**: Built-in `prefers-reduced-motion` overrides for users sensitive to motion.
- **Fully Responsive**: Adapts fluidly across mobile, tablet, and high-resolution desktop viewports.

---

## 🚀 Quick Usage

### 1. HTML Structure

Wrap the main application inside `.app-layout` and include the hidden toggle checkbox at the root level:

```html
<!-- Toggle Trigger -->
<input type="checkbox" id="drawer-toggle" class="drawer-checkbox">

<div class="app-layout">
  <header class="app-header">
    <label for="drawer-toggle" class="menu-btn bounce-pulse-hover">☰</label>
  </header>

  <!-- Backdrop overlay -->
  <label for="drawer-toggle" class="drawer-backdrop"></label>

  <!-- Bounce-Pulse Drawer -->
  <aside class="bounce-pulse-drawer">
    <!-- Navigation content -->
  </aside>

  <main class="main-content">
    <!-- Main Application View -->
  </main>
</div>