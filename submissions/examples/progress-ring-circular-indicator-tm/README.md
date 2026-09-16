# Circular Progress Ring Component

An animated, accessible, and highly customizable circular/ring progress indicator component. Built using responsive SVGs, CSS custom properties, and elastic transition animations. Designed to fit seamlessly into premium dashboards, stats panels, and micro-interactive widgets.

---

## Key Features

- **Zero-JS Initial Load Animation**: Fills from 0% to the target percentage automatically on load using pure CSS `@keyframes` and properties.
- **Dynamic CSS Integration**: Bind and update progress instantly in real-time by updating the `--percent` and `--dashoffset` custom properties.
- **Concentric Stacking Support**: Overlay multiple SVGs to display concentric tracker progress (similar to modern fitness tracking rings).
- **Responsive Size Options**: Predefined sizes from `SM` (85px) to `XL` (240px) matching common UI layouts.
- **Neon Blur Layer**: Neon accent glow wrapper that adaptively matches light/dark themes and gradient profiles.
- **Built for Accessibility (A11y)**: Configured with standard ARIA roles (`role="progressbar"`) and honors user preference queries (`prefers-reduced-motion`).

---

## How to Use

### 1. Basic Progress Ring Setup

Add the SVG element to your HTML markup. Set the initial progress inside the style attribute along with the mathematically calculated circumference and offset values:

```html
<div class="ease-progress-ring-wrapper">
  <!-- Glowing Background (Optional) -->
  <div class="ease-progress-ring-glow-layer glow-indigo"></div>

  <!-- Main Ring Component -->
  <div class="ease-progress-ring-container">
    <svg class="ease-progress-ring ease-ring-lg" 
         viewBox="0 0 120 120"
         role="progressbar" 
         aria-valuenow="75" 
         aria-valuemin="0" 
         aria-valuemax="100"
         style="--percent: 75; --circumference: 314.159; --dashoffset: 78.539;">
      
      <!-- Track background -->
      <circle class="ease-progress-ring-track" cx="60" cy="60" r="50"></circle>
      
      <!-- Progress Fill path (Solid Color or referenced Gradient ID) -->
      <circle class="ease-progress-ring-fill" cx="60" cy="60" r="50" stroke="#6366f1"></circle>
    </svg>
    
    <!-- Central Text Content -->
    <div class="ease-progress-ring-content">
      <span class="ease-progress-ring-value">75%</span>
      <span class="ease-progress-ring-label">Progress</span>
    </div>
  </div>
</div>
```

> [!NOTE]  
> The circumference of a circle is calculated as `2 * π * radius`. For a circle with a radius `r = 50`, the circumference is exactly `314.159`. The `--dashoffset` is computed as `circumference - (circumference * percent) / 100`.

---

### 2. Sizing Classes

Apply one of the following classes to adjust the size and stroke thickness of the ring:

- `.ease-ring-sm` - Small variant (85px size, 6px stroke)
- `.ease-ring-md` - Medium variant (130px size, 10px stroke)
- `.ease-ring-lg` - Large variant (175px size, 13px stroke)
- `.ease-ring-xl` - Extra Large variant (240px size, 18px stroke)

---

### 3. Gradient Fill Options

To color your rings with gradient highlights, specify a `<linearGradient>` inside your SVG's `<defs>` tag and reference it inside the stroke attribute of `.ease-progress-ring-fill`:

```html
<defs>
  <linearGradient id="emeraldGlow" x1="0%" y1="100%" x2="100%" y2="0%">
    <stop offset="0%" stop-color="#10b981" />
    <stop offset="100%" stop-color="#06b6d4" />
  </linearGradient>
</defs>
<circle class="ease-progress-ring-fill" cx="60" cy="60" r="50" stroke="url(#emeraldGlow)"></circle>
```

---

### 4. Concentric Nested Stack

For complex multi-metric trackers (e.g. Activity, Step, Sleep stats), you can stack concentric rings on top of each other using the `.ease-progress-concentric-group` layout:

```html
<div class="ease-progress-concentric-group">
  <!-- Outer Ring (r=50, circumference=314.159) -->
  <div class="ease-progress-ring-container">
    <svg class="ease-progress-ring" viewBox="0 0 120 120" style="--percent: 85; --circumference: 314.159; --dashoffset: 47.123;">
      <circle class="ease-progress-ring-track" cx="60" cy="60" r="50" style="--ring-stroke-width: 8px;"></circle>
      <circle class="ease-progress-ring-fill" cx="60" cy="60" r="50" stroke="#10b981" style="--ring-stroke-width: 8px;"></circle>
    </svg>
  </div>
  
  <!-- Inner Ring (r=38, circumference=238.761) -->
  <div class="ease-progress-ring-container">
    <svg class="ease-progress-ring" viewBox="0 0 120 120" style="--percent: 60; --circumference: 238.761; --dashoffset: 95.504;">
      <circle class="ease-progress-ring-track" cx="60" cy="60" r="38" style="--ring-stroke-width: 8px;"></circle>
      <circle class="ease-progress-ring-fill" cx="60" cy="60" r="38" stroke="#f43f5e" style="--ring-stroke-width: 8px;"></circle>
    </svg>
  </div>
</div>
```

---

## Technical Specifications

### Math & Dimensions Reference

| Ring Location / Style | Radius ($r$) | Circumference ($C$) | Stroke Width | Recommended Size |
| :--- | :--- | :--- | :--- | :--- |
| **Standard Outer** | `50` | `314.159` | `10px` | `120px` to `240px` |
| **Nested Middle** | `38` | `238.761` | `8px` | `120px` to `240px` |
| **Nested Inner** | `26` | `163.362` | `8px` | `120px` to `240px` |

---

## Framework Integration

This component follows the design tokens of the **EaseMotion CSS** ecosystem:
1. **Typography**: Leverages modern geometric sans-serif styling (`Outfit` / `Inter`).
2. **Animation curve**: Relies on EaseMotion's premium elastic curve (`cubic-bezier(0.34, 1.56, 0.64, 1)`) to provide a pleasant overshoot effect during load.
3. **Accessibility**: Responsive animations respects system-level configuration parameters (`prefers-reduced-motion: reduce`) by bypassing drawing animations.
