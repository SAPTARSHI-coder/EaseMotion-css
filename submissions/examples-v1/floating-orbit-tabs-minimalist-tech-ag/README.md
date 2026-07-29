# Floating Orbit Tabs — Minimalist Tech (`floating-orbit-tabs-minimalist-tech-ag`)

## 1. What does this do?
This is a pure HTML/CSS tab component featuring an orbital trajectory transition for active selection, styled for a sleek, Minimalist Tech interface with zero JavaScript overhead.

## 2. How is it used?
Place visually hidden radio inputs (`.ease-orbit-tab-input`) linked to corresponding tab labels (`.ease-orbit-tab-label`) inside a navigation track (`.ease-orbit-tabs-nav`), alongside an active floating orbit indicator (`.ease-orbit-indicator`):

```html
<div class="ease-orbit-tabs">
  <!-- Hidden Radio Controls -->
  <input type="radio" id="tab-1" name="orbit-tabs" class="ease-orbit-tab-input" checked />
  <input type="radio" id="tab-2" name="orbit-tabs" class="ease-orbit-tab-input" />

  <!-- Navigation Track Bar -->
  <nav class="ease-orbit-tabs-nav" aria-label="System Metrics Navigation">
    <div class="ease-orbit-track">
      <!-- Active Orbit Indicator -->
      <div class="ease-orbit-indicator" aria-hidden="true">
        <div class="ease-orbit-pill">
          <div class="ease-orbit-glow"></div>
          <div class="ease-orbit-particle-ring">
            <div class="ease-orbit-particle"></div>
          </div>
        </div>
      </div>

      <!-- Tab Labels -->
      <label for="tab-1" class="ease-orbit-tab-label">Overview</label>
      <label for="tab-2" class="ease-orbit-tab-label">Telemetry</label>
    </div>
  </nav>

  <!-- Content Panels -->
  <div class="ease-orbit-tabs-content">
    <section class="ease-orbit-tab-panel">Overview Content</section>
    <section class="ease-orbit-tab-panel">Telemetry Content</section>
  </div>
</div>
```

### CSS Custom Properties API
Customize the floating orbit interaction by overriding these CSS custom properties on `.ease-orbit-tabs` or `:root`:

| Property | Default Value | Description |
|---|---|---|
| `--orbit-duration` | `450ms` | Transition duration when switching tabs |
| `--orbit-easing` | `cubic-bezier(0.34, 1.4, 0.64, 1)` | Physics spring easing curve for orbital arc movement |
| `--orbit-scale` | `1.06` | Lift scale expansion factor during transition |
| `--orbit-lift` | `-6px` | Vertical arc displacement height during orbital jump |
| `--orbit-particle-speed` | `6s` | Duration for full 360° orbital particle revolution |
| `--orbit-accent` | `var(--ease-color-primary, #6c63ff)` | Primary accent and glow color |

## 3. Why is it useful?
It exemplifies EaseMotion's philosophy of zero-dependency, pure-CSS micro-interactions. By combining hardware-accelerated transforms (`translateX`, `translateY`, `scale`) with an orbital trajectory curve and continuous particle drift, it provides a high-end Minimalist Tech experience that is responsive, keyboard accessible (`:focus-visible`), and respects motion preferences (`prefers-reduced-motion: reduce`).
