# Pure CSS Motion Matrix & Telemetry Hub (Iteration 105)

A high-performance, pure CSS interactive motion control matrix and real-time telemetry dashboard featuring 3D perspective transforms, dynamic oscilloscope waveforms, physics sandbox triggers, and pure CSS tab/drawer state management with zero JavaScript.

## 1. What does this do?

This component provides a complete interactive telemetry and physics animation cockpit built entirely with pure HTML5 and CSS3, demonstrating advanced state machines via CSS `:checked` pseudo-class selectors, 3D card tilt transformations, responsive subgrids, and custom cubic-bezier motion curves.

## 2. How is it used?

Include `style.css` in your project and structure the component with semantic HTML elements and CSS state-controller inputs:

```html
<!-- Theme Controller (Pure CSS) -->
<input type="radio" name="accent-theme" id="theme-cyan" class="theme-radio" checked>
<input type="radio" name="accent-theme" id="theme-purple" class="theme-radio">
<input type="radio" name="accent-theme" id="theme-emerald" class="theme-radio">

<!-- Workspace Container -->
<div class="hub-container">
  <!-- Interactive Tab Navigation -->
  <main class="matrix-workspace">
    <input type="radio" name="matrix-tab" id="tab-telemetry" class="tab-radio" checked>
    <input type="radio" name="matrix-tab" id="tab-curves" class="tab-radio">
    
    <nav class="matrix-tabs-nav" role="tablist">
      <label for="tab-telemetry" class="tab-btn" id="nav-telemetry">Telemetry</label>
      <label for="tab-curves" class="tab-btn" id="nav-curves">Easing Curves</label>
    </nav>

    <div class="tab-panels-wrapper">
      <div class="tab-panel panel-telemetry">
        <!-- Live Waveform & Telemetry Gauges -->
      </div>
      <div class="tab-panel panel-curves">
        <!-- Visual Easing Puck Tracks -->
      </div>
    </div>
  </main>
</div>
```

## 3. Why is it useful?

In alignment with EaseMotion CSS's philosophy of zero-dependency, animation-first web design, this component demonstrates that sophisticated, interactive desktop-grade dashboards and motion controllers can be achieved with zero JavaScript execution overhead, maximum 120 FPS GPU hardware acceleration, and full `prefers-reduced-motion` accessibility.

## Key Features

- **Pure CSS State Engine**: Tab switching, theme selection, and slide-out side inspector panel managed with pure CSS `:checked` input states without JavaScript.
- **3D Parallax & Depth**: Card depth perspective layering with `preserve-3d`, `rotateX()`, and `rotateY()` transformations.
- **Harmonic Wave Oscilloscope**: Staggered multi-bar animation utilizing custom cubic-bezier timing functions.
- **Radial Conic Gauges**: Smooth conic-gradient data visualization rings.
- **Multi-Theme Accent Support**: Instant switching between Neon Cyan, Cyber Violet, and Emerald Flux themes using CSS variable cascades.
- **Accessibility & Reduced Motion**: Automatically disables continuous animations when `prefers-reduced-motion: reduce` is enabled.

## Topics Covered

- CSS Grid & Flexbox Layouts
- CSS Custom Properties (`var(--*)`)
- 3D Transforms (`perspective`, `transform-style: preserve-3d`)
- Keyframe Animations (`@keyframes`)
- Conic & Linear Gradients
- Backdrop Filters & Glassmorphism
- Media Queries & Mobile Responsiveness
- Accessible Focus States & Reduced Motion Support

## Files Included

- `demo.html` — Interactive component markup and structure
- `style.css` — Complete component styling, animation keyframes, and design tokens
- `README.md` — Technical documentation and usage specifications

## License

Contributed to EaseMotion CSS as part of GSSoC 2026. Distributed under the MIT License.
