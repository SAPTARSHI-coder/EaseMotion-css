# Interactive Animation Preview Studio 🎬

An internal documentation environment enabling real-time browser-based testing, loop calibration, parameter tweaking, and quick code class exportation for standard EaseMotion configurations.

## Configurable Layout Parameters

- **Dynamic Class Switching**: Intercepts active layout classes using hardware-driven keyframes safely (`fade-in`, `slide-up`, `bounce`, `pulse`).
- **Granular Slider Pipelines**: Updates animation runtime properties (`duration`, `delay`, `iteration-counts`) down to 100ms precision limits.
- **Dynamic CSS Repaint Injector**: Uses forced reflow overrides (`void element.offsetWidth`) to handle play/pause loop resets on demand without affecting standard DOM hierarchies.
- **Snippet Export Pipeline**: One-click asynchronous writing tool captures exact inline style string tokens for production deployment.

## Sandbox Integration Pattern

```html
<div
  class="preview-target em-slide-up"
  style="animation-duration: 1.5s; animation-delay: 0.2s;"
>
  EaseMotion Anchor Node
</div>
```
