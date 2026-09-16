# Responsive Breakpoint Tester Component

A premium, interactive responsive design sandbox and breakpoint visualizer built using pure HTML, CSS variables, and modern **CSS Container Queries**.

This component provides developers and designers with an educational tool to test, verify, and demonstrate how layouts adapt dynamically across Mobile, Tablet, Laptop, and Desktop breakpoints.

---

## Features

- **Device Breakpoint Toggles:** Interactive buttons simulating Mobile, Tablet, Laptop, and Desktop widths.
- **Animated Viewport Resizing:** Smooth width transitions demonstrating layout shifts on-the-fly.
- **Pixel-perfect Ruler Guide:** A visible ruler marking key responsive widths (320px, 480px, 768px, 1024px, 1200px).
- **CSS Container Queries Visualizer:** Layout changes adapt to the simulated container rather than the browser window, showcasing modern CSS capabilities.
- **Interactive Metrics Display:** Displays the current viewport width and height dynamically.

---

## File Structure

- `demo.html` - Self-contained sandbox dashboard interface.
- `style.css` - Theme layout, interactive animations, and container query rulesets.
- `README.md` - Technical overview and usage specifications.

---

## Technical Specifications

The component utilizes **CSS Container Queries** (`container-type: inline-size`) on the viewport container to adapt sub-elements based directly on its simulated width:

```css
/* Container declaration */
.viewport-container {
  container-type: inline-size;
  container-name: preview;
  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Simulated mobile view adaptation */
@container preview (max-width: 767px) {
  .preview-grid {
    grid-template-columns: 1fr;
  }
  .preview-sidebar {
    display: none;
  }
  .stats-row {
    grid-template-columns: 1fr;
  }
}
```

---

## Usage

1. Open `demo.html` directly in any modern web browser.
2. Select any breakpoint button in the control panel to view layout reorganization.
3. Hover over the stat widgets and card items to view micro-interactions and smooth shadows.
