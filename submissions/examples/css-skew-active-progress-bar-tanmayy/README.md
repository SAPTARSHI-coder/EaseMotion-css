# CSS Skew-Active Progress Bar

A pure-CSS animated progress bar utilizing a Skew-Active visual aesthetic, designed to complement Gaming Hub and Sci-Fi interface layouts. It features smooth loading animations, animated active state stripes, and glowing visual feedback.

## 📋 Mandatory Questions

### 1. What does this do?

This component provides a highly stylized progress bar commonly found in gaming UIs (like XP bars or shield capacity indicators). It features an angled (skewed) container, an inner fill bar that animates from 0% to a target width on load, and a continuous scrolling striped overlay to indicate an "active" state.

### 2. How is it used?

The component is entirely driven by HTML structure and CSS variables. The target width of the progress bar is set inline via the `--target-width` custom property, making it extremely easy to bind dynamically via any frontend framework (React, Vue, vanilla JS) without requiring complex animation libraries.

```html
<div class="skew-progress-container" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="skew-progress-track">
    <!-- Set the target width here using an inline style variable -->
    <div class="skew-progress-fill" style="--target-width: 75%;">
      <!-- Inner striped pattern for the 'active' effect -->
      <div class="skew-progress-stripes"></div>
    </div>
  </div>
</div>
```

**Customization via CSS Properties:**
You can adjust the core aesthetics locally or at the `:root` level.

```css
:root {
  --progress-skew-angle: -15deg; /* The angle of the gaming slant */
  --progress-height: 24px;
  --progress-anim-duration: 1.5s; /* Load animation time */
  --progress-stripe-speed: 2s; /* Speed of the active state stripes */
  
  --progress-color-fill: #00ffcc;
  --progress-color-glow: rgba(0, 255, 204, 0.5);
}
```

### 3. Why is it useful?

Gaming interfaces and modern sci-fi dashboards heavily rely on non-orthogonal, dynamic UI elements. Implementing skewed progress bars with internal animated stripes can be surprisingly tricky due to CSS transform behaviors (clipping and distortion). This component provides a robust, responsive, and purely CSS-driven solution that gracefully handles these complexities while strictly respecting accessibility preferences (`prefers-reduced-motion`).
