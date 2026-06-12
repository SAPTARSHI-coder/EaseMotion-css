# Sandbox Component Showcase: Pure-CSS Full-Screen Overlay Navigation Menu

## Overview

A high-performance, minimalist full-viewport overlay navigation panel built completely inside an isolated sandbox directory. It utilizes the checkbox hack configuration to drive micro-interactions, layout visibility, and cascading link fades without any JavaScript dependencies.

## 📁 Sandbox Configuration Files

- `demo.html` — Interactive presentation mockup showing structural layout interactions and staggered entrance animations.
- `style.css` — Scoped layout sheet setting viewport bounds and hardware-accelerated transition keys linked back to core variables.

## 🚀 Key Layout Mechanics

1. **Checkbox-Driven State Machine:** Replaces bulky event listeners by utilizing an invisible `input[type="checkbox"]` paired with a semantic `<label>`. The menu opens and closes natively on click by checking for the `:checked` pseudo-class.
2. **GPU-Optimized Scaling Curve:** By transitioning the modal layer via `transform: scale()` and `opacity`, the menu bypasses the browser's heavy main paint thread, offloading execution to the GPU layer for a smooth $60\text{fps}$ transition.
3. **Staggered Transition Cascade:** Uses sequential standard CSS `transition-delay` parameters on nth-of-type selector loops (`:nth-child(n)`). This creates an elegant cascading slide-in look for the navigation links once the overlay panel expands.
