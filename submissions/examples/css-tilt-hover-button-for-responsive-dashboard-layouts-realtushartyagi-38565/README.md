# CSS Tilt Hover Button for Responsive Dashboard Layouts

A pure CSS 3D animated button utilizing a smooth "Tilt Hover" interaction transition, explicitly styled to complement modern **Responsive Dashboard** interfaces (clean grayscales, crisp shadows, and vibrant primary actions).

## Files
- `demo.html` – Structural layout demonstrating the primary and secondary button variants using Semantic HTML and inline SVG icons.
- `style.css` – The core stylesheet containing the hardware-accelerated 3D transform logic, parallax icon configurations, and accessibility fallbacks.

## How it works
This component achieves a premium 3D tilt effect entirely without JavaScript by utilizing CSS `transform: perspective()` mechanics combined with static rotation matrixes applied via the `:hover` pseudo-class. 

To enhance the physical feeling:
1. The button itself rotates slightly on the X and Y axes while scaling up.
2. The internal `.ease-tilt-btn-icon` element is given a `translateZ(5px)` base offset, which increases to `translateZ(20px)` on hover, creating a distinct "parallax" popping effect as the parent container tilts.

## Usage
Simply drop the HTML structure into your project and link the stylesheet. 

```html
<!-- Primary Dashboard Button -->
<button class="ease-tilt-btn ease-tilt-primary">
  <span class="ease-tilt-btn-icon">
    <!-- SVG Icon -->
  </span>
  Generate Report
</button>

<!-- Secondary Dashboard Button -->
<button class="ease-tilt-btn ease-tilt-secondary">
  <span class="ease-tilt-btn-icon">
    <!-- SVG Icon -->
  </span>
  Edit Configuration
</button>
```

## Accessibility (prefers-reduced-motion)
The component implements a strict `@media (prefers-reduced-motion: reduce)` media query. If a user has system-level motion reduction enabled, the complex 3D tilt and parallax translation is gracefully downgraded to a standard 2D vertical lift (`translateY(-2px)`), ensuring the interface remains fully usable without triggering vestibular discomfort.

## Why it fits EaseMotion CSS
EaseMotion champions high-fidelity animations with zero JavaScript overhead. This component demonstrates how to achieve complex, depth-based parallax interactions using only CSS `transform-style: preserve-3d` and clever `translateZ()` utilization, keeping the DOM lightweight and strictly adhering to hardware-accelerated rendering paths.
