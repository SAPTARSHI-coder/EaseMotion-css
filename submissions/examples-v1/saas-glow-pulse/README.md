# SaaS Glow Pulse Animation

A pure CSS animated Glow Pulse effect designed for modern SaaS showcase layouts. This example creates a premium product-card experience using smooth breathing glow transitions, gradient aura effects, and responsive UI styling.

## Features

- **Pure CSS Animation:** Zero JavaScript dependency with lightweight keyframe-based motion.
- **SaaS Showcase Ready:** Designed for landing pages, product cards, dashboards, and feature highlights.
- **Smooth Glow Pulse:** Creates a subtle breathing effect using scalable motion transitions and layered shadows.
- **CSS Variable Architecture:** Customize colors, timing, radius, and glow intensity through CSS custom properties.
- **Responsive Design:** Adapts smoothly across desktop, tablet, and mobile layouts.
- **Accessibility Support:** Includes `prefers-reduced-motion` support to reduce motion for users who prefer minimal animations.

## Customization

Modify the CSS variables inside `:root` to customize the animation:

```css
:root {
  --glow-primary: #6366f1;
  --glow-secondary: #22d3ee;
  --pulse-duration: 3s;
  --radius: 24px;
}
```

## Usage

Include the stylesheet and apply the animation structure:

```html
<div class="saas-card">
  <h1>AI Analytics Platform</h1>
  <p>Transform your business insights with intelligent automation.</p>
  <button class="saas-btn">
    Start Free Trial
  </button>
</div>
```

## Project Structure

```text
saas-glow-pulse/
├── demo.html      # Standalone browser demo
├── style.css      # Glow pulse animation styles
└── README.md      # Documentation
```

## Browser Support

Works in modern evergreen browsers supporting:

- CSS Custom Properties
- CSS Keyframe Animations
- CSS Gradients
- Flexbox
- CSS Grid
- `prefers-reduced-motion`

## Why it fits EaseMotion CSS

This animation follows the EaseMotion CSS philosophy by providing a reusable, human-readable visual effect without JavaScript overhead. It focuses on animation-first design, clean customization, responsive behavior, and accessible motion patterns.