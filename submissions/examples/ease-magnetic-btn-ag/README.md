# CSS Magnetic Hover Button (ease-magnetic-btn-ag)

A premium multi-directional magnetic hover button layout engineered using **100% pure HTML and CSS**. It requires **zero JavaScript**, using a static grid of invisible hover sensors overlaid on the button to translate and scale the visual container in the direction of the cursor.

---

## Features

- **Pure HTML/CSS Sensory Grid**: Utilizes a 3x3 layout map of absolute-positioned sibling sensors to detect cursor quadrants and translate content in real-time.
- **Natural Spring Ease**: Tailored `cubic-bezier(0.23, 1, 0.32, 1)` easing curve delivers responsive, magnetic attraction properties without input lag.
- **Multiple Visual Themes**:
  - **Primary Solid**: High-contrast filled color variant (cyan on dark, dark on light).
  - **Secondary Glassmorphism**: Translucent frosted glass blending with background gradients.
  - **Outline Aura**: Gradient-glowing border outlines for clean call-to-actions.
- **Pre-detection Boundaries**: Sensory grid triggers extend slightly outside the button visual area, creating a magnetic attraction feel before the cursor crosses the button borders.
- **A11y (Accessibility)**: Native buttons, keyboard traversal with distinct custom focus rings, and proper ARIA labels.
- **System Preference Aware**: Automatically turns off translation vectors and sensor detection under media rules matching `prefers-reduced-motion: reduce`.

---

## Folder Structure

```text
submissions/examples/ease-magnetic-btn-ag/
├── demo.html    # Layout boards showcasing Hero and dark/light modes
├── style.css    # Sibling selector triggers, theme designs, & sensory maps
└── README.md    # Documentation (this file)
```

---

## Usage

### 1. HTML Structure
Add the nested sensor span tags alongside the visual container inside a `<button>` element:

```html
<button class="ease-magnetic-btn btn-primary" aria-label="Primary Magnetic Button">
  <!-- Sibling Sensors (Trigger Map) -->
  <span class="magnetic-sensor top-left"></span>
  <span class="magnetic-sensor top-center"></span>
  <span class="magnetic-sensor top-right"></span>
  <span class="magnetic-sensor middle-left"></span>
  <span class="magnetic-sensor middle-center"></span>
  <span class="magnetic-sensor middle-right"></span>
  <span class="magnetic-sensor bottom-left"></span>
  <span class="magnetic-sensor bottom-center"></span>
  <span class="magnetic-sensor bottom-right"></span>
  
  <!-- Visual Content -->
  <span class="btn-content">
    <span class="btn-text">Primary Pull</span>
  </span>
</button>
```

### 2. Sibling Trigger Concept (CSS logic)
The sensory spans overlay the button space. Using CSS general sibling combinators (`~`), we target and shift the `.btn-content` container located next to the hovered sensor:

```css
/* When the top-left sensor is hovered, shift the sibling content wrapper up and left */
.magnetic-sensor.top-left:hover ~ .btn-content {
  transform: translate(calc(var(--magnetic-pull-x) * -1), calc(var(--magnetic-pull-y) * -1)) scale(1.04);
}
```

---

## Customization

You can fully customize the component dimensions and pull weights using CSS variables:

| CSS Variable | Description | Default Value |
| :--- | :--- | :--- |
| `--btn-width` | Sizing width of the button frame | `190px` |
| `--btn-height` | Sizing height of the button frame | `54px` |
| `--btn-radius` | Border radius of the inner visual content | `12px` |
| `--magnetic-pull-x` | Maximal horizontal translation offset | `12px` |
| `--magnetic-pull-y` | Maximal vertical translation offset | `10px` |
| `--magnetic-duration` | Velocity timing of transition shift | `0.35s` |
| `--magnetic-ease` | Easing transition curve | `cubic-bezier(0.23, 1, 0.32, 1)` |

---

## Accessibility

- **Keyboard Focus**: Focus is managed on the parent button. When active, it displays a distinct two-layer offset border glow surrounding the inner content box (`:focus-visible`), remaining readable across dark and light canvases.
- **Screen Readers**: Fits with native interactive button semantics and supports explicit description fields through `aria-label`.
- **System Settings Friendly**: Integrates media queries matching `prefers-reduced-motion: reduce` to hide the sensory targets and disable translation rules.

---

## Browser Support

- Chrome / Chromium Edge (v80+)
- Firefox (v72+)
- Safari / iOS Safari (v13.1+)
- Opera (v65+)

---

## Why it fits EaseMotion CSS

EaseMotion-css focuses on high-performance, lightweight interaction patterns. This component provides premium magnetic micro-interactions that typically require heavy mouse-movement JavaScript listeners, replacing them with a fast, declarative CSS grid layout. It has zero dependencies, keeps rendering jank-free at 60fps, and can be integrated into any framework.
