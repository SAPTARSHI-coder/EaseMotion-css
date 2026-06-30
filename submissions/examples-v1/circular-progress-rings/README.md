# Animated Circular Progress Ring — EaseMotion CSS

Highly scalable, responsive circular visualization rings utilizing dual engine choices: performance modern CSS Conic Gradient configurations and legacy responsive SVG Vector structures.

## 🛠 Features & System Design

| Name Class                                 | Element Layer | Technical Description                                                                    |
| ------------------------------------------ | ------------- | ---------------------------------------------------------------------------------------- |
| `.ease-progress-ring-container`            | Wrapper       | Centralized structural alignment anchor. Defines global custom configuration footprints. |
| `.ease-progress-conic`                     | Engine Ring   | Generates rendering paths by mapping properties onto native conic matrices.              |
| `.ease-svg-fill`                           | Vector Path   | Controls circular border-drawing offsets calculated from true geometric radius paths.    |
| `.ease-ring-success` / `.ease-ring-danger` | Theme Palette | Instantly sets color presets for specific feedback metrics.                              |

## 📦 Basic HTML Sample Mapping

```html
<div class="ease-progress-ring-container" style="--ease-ring-size: 100px;">
  <div
    class="ease-progress-conic ease-animate"
    style="--ease-progress-value: 80;"
  ></div>
  <span class="ease-progress-ring-label" data-target="80">0%</span>
</div>
```
