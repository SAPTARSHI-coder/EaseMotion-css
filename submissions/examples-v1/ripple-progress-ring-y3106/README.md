# Ripple Progress Ring

## 1. What does this do?

A dual-layered corporate progress ring component featuring an outer SVG circular progress track and an inner liquid-bubble container filled with dual-rotating volumetric wave ripples.

## 2. How is it used?

Embed the SVG layout and the wave containers. Adjust the SVG `stroke-dashoffset` and translation offsets of the waves to match progress values:

```html
<div class="progress-ring-card">
  <div class="progress-svg-container">
    <svg viewBox="0 0 100 100">
      <circle class="svg-track" cx="50" cy="50" r="44"></circle>
      <circle
        class="svg-progress"
        cx="50"
        cy="50"
        r="44"
        style="stroke-dasharray: 276; stroke-dashoffset: 138;"
      ></circle>
    </svg>
    <div class="liquid-bubble">
      <div class="liquid-wave" style="transform: translateY(50%);"></div>
      <div
        class="liquid-wave-overlay"
        style="transform: translateY(47%);"
      ></div>
      <span class="liquid-value">50%</span>
    </div>
  </div>
</div>
```

## 3. Why is it useful?

It matches EaseMotion CSS's architectural vision:

- **Human-readable**: Simple structural tags like `progress-svg`, `liquid-bubble`, and `liquid-wave` clearly express their layout responsibilities.
- **Animation-first**: Combines continuous orbital rotational physics for waves with smooth dash-offset transitions for progress tracks.
- **Composable**: Perfect for SaaS dashboard charts, storage capacity metrics, task loaders, or network download monitors.
