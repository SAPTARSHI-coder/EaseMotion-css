# Double Circle Loading Spinner

A modern, high-performance loading spinner component built using **pure HTML and CSS**. It uses two concentric rings that rotate in opposite directions to create a sophisticated, depth-charged loading indicator that looks professional, clean, and premium in any modern application.

---

## 1. What does this do?

The **Double Circle Loading Spinner** provides an elegant, smooth visual indicator that a page, block, or element is in a loading or processing state.

- **Double Circle Effect**: It displays two rings: an outer ring and a smaller inner ring.
- **Opposing Motion**: The outer ring rotates clockwise, while the inner ring rotates counter-clockwise.
- **Hardware Accelerated**: The rotation animations run at 60fps, utilizing GPU-accelerated CSS `transform` properties for zero-jank execution.
- **Customizable**: Leverages CSS Custom Properties (Variables) to easily adjust sizes, colors, border-widths, and rotation speeds.
- **Pure CSS**: Fully operational without loading external JavaScript files, making it extremely lightweight and secure.

---

## 2. How is it used?

### Basic Installation

Link the `style.css` stylesheet in your HTML document:

```html
<link rel="stylesheet" href="style.css" />
```

### Basic Spinner Markup

You only need a single, empty HTML tag to render the spinner. The base class is `.ease-double-spinner`:

```html
<!-- Default Spinner (Medium, Primary Color) -->
<div class="ease-double-spinner"></div>
```

### Sizes

Include a size modifier class (`-sm`, `-md`, `-lg`):

```html
<!-- Small Spinner (24px) -->
<div class="ease-double-spinner ease-double-spinner-sm"></div>

<!-- Medium Spinner (48px - Default) -->
<div class="ease-double-spinner ease-double-spinner-md"></div>

<!-- Large Spinner (80px) -->
<div class="ease-double-spinner ease-double-spinner-lg"></div>
```

### Color Themes

Include a color modifier class (`-primary`, `-success`, `-danger`):

```html
<!-- Primary Indigo -->
<div class="ease-double-spinner ease-double-spinner-primary"></div>

<!-- Success Green -->
<div class="ease-double-spinner ease-double-spinner-success"></div>

<!-- Danger Red -->
<div class="ease-double-spinner ease-double-spinner-danger"></div>
```

### CSS Variables Customization

Override the styling variables dynamically for any container or specific element:

```css
.my-custom-loader {
  --spinner-size: 64px;
  --spinner-border-width: 5px;
  --spinner-outer-color: #f59e0b; /* Amber */
  --spinner-inner-color: #3b82f6; /* Blue */
  --spinner-speed-outer: 1.8s;
  --spinner-speed-inner: 1.1s;
  --spinner-glow-color: rgba(245, 158, 11, 0.25);
}
```

---

## 3. Why is it useful?

- **Zero JavaScript Overhead**: Many spinners require heavy UI frameworks or complex script bundles to coordinate overlays. This loader is pure CSS, meaning zero page weight or initialization latency.
- **Visual Depth**: The counter-rotating circle design is visually engaging and immediately signifies processing states, providing a better user experience than standard single-circle animations.
- **Seamless Integrations**: Highly flexible classes allow developers to place the spinner in standard text buttons, card header controls, absolute-centered dashboard loading screens, or fullscreen transitions.
- **Accessibility Friendly**: Built with standard `@media (prefers-reduced-motion: reduce)` overrides to slow down the animations to a comfortable, non-triggering pace for users with vestibular motion sensitivities.
- **Fully Responsive**: Built with relative sizing variables (`calc()`) that adjust elements and child elements proportionally if the main spinner size changes.
