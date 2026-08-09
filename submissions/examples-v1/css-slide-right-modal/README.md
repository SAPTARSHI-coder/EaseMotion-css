# Accessible Slide-Right Modal Drawer

A semantic, zero-JavaScript slide-out panel component optimized explicitly for high-contrast accessibility compliance (`WCAG AA` standards) and layout responsiveness.

## 🚀 Performance & Accessibility Benefits
- **No Layout Throttling:** Moves exclusively using CSS `transform: translateX()` targets, which offloads processing overhead to GPU composition layers.
- **Media Query Resilience:** Explicitly supports a `prefers-reduced-motion` safety override to prevent kinetic disorientations.
- **Native Context Closures:** Backdrop click targets are mapped directly to structural markup anchors without using script event listeners.

## 🎛️ Configurations Matrix

Exposed customizable parameters declared within the CSS `:root` node configuration block:

| Variable | Default Value | Usage Purpose |
| :--- | :--- | :--- |
| `--modal-speed` | `0.4s` | Structural entry/exit animation window runtime. |
| `--modal-slide-easing` | `cubic-bezier(0.16, 1, 0.3, 1)` | Dynamic entry motion interpolation profile. |
| `--modal-slide-distance` | `-100%` | Initial alignment offset (use `100%` to slide from right side). |
| `--focus-ring` | `#2563eb` | High-visibility focus indicator color parameter. |