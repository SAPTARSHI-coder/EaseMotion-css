# Quantum Holographic Telemetry Card (`ease-quantum-telemetry-card`)

A sci-fi Cyberpunk HUD Telemetry Card component for EaseMotion CSS.

## Features

- Laser scanner sweep overlay
- Holographic grid background
- Kinetic metric bars and glowing status dots
- Orbital radar target sweep animation
- Sci-Fi corner bracket accents
- Glassmorphism backdrop blur
- Pure HTML & CSS (zero JavaScript)

## Folder Structure

```
submissions/examples/ease-quantum-telemetry-card/
├── demo.html
├── style.css
└── README.md
```

## CSS Custom Properties

| Token | Default Value | Description |
|---|---|---|
| `--ease-qt-bg-dark` | `#070b19` | Viewport background color |
| `--ease-qt-card-bg` | `rgba(10, 22, 44, 0.85)` | Card glass backdrop color |
| `--ease-qt-card-border` | `rgba(0, 240, 255, 0.35)` | Border stroke color |
| `--ease-qt-cyan-primary` | `#00f0ff` | Primary cyan glow color |
| `--ease-qt-magenta-accent` | `#ff007f` | Neon magenta accent |
| `--ease-qt-green-active` | `#00ff66` | Active status green |
| `--ease-qt-amber-warning` | `#ffb700` | Warning status yellow |
| `--ease-qt-scan-duration` | `4s` | Laser scanbeam duration |
| `--ease-qt-radar-duration` | `6s` | Radar sweep rotation time |

## Usage

```html
<article class="ease-qt-card">
  <div class="ease-qt-corner-tr"></div>
  <div class="ease-qt-corner-bl"></div>
  <div class="ease-qt-grid-overlay"></div>
  <div class="ease-qt-scan-beam"></div>

  <header class="ease-qt-header">
    <div class="ease-qt-header-title">
      <h2>Quantum Core 01</h2>
    </div>
    <div class="ease-qt-status-badge">
      <span class="ease-qt-status-dot"></span>
      Active
    </div>
  </header>

  <section class="ease-qt-metrics-container">
    <div class="ease-qt-metric-item">
      <div class="ease-qt-metric-info">
        <span class="ease-qt-metric-label">Plasma Flux</span>
        <span class="ease-qt-metric-value">94.8%</span>
      </div>
      <div class="ease-qt-progress-track">
        <div class="ease-qt-progress-bar cyan" style="width: 94.8%;"></div>
      </div>
    </div>
  </section>

  <footer class="ease-qt-footer-actions">
    <button class="ease-qt-btn" type="button">Calibrate</button>
  </footer>
</article>
```

## Accessibility

Includes support for `prefers-reduced-motion` to disable animations for users with motion sensitivity. Uses semantic HTML5 tags throughout.

## Browser Support

- Chrome
- Firefox
- Safari
- Edge

## Why It Fits EaseMotion CSS

Provides a lightweight, reusable, pure CSS animated UI component with zero external JS dependencies following EaseMotion design principles.
