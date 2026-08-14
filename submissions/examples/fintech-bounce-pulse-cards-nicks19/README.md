# CSS Bounce-Pulse Card Grid

A highly polished, purely CSS-driven card grid tailored for **Fintech Dashboard Layouts**. It combines a fluid bounce transformation on hover with an infinite, radiating box-shadow pulse animation to draw attention to key financial metrics.

## Features

- **Pure CSS**: Zero JavaScript required. Powered by `transform`, `transition`, and `@keyframes`.
- **Bounce & Pulse Engine**: Combines a spring-like cubic-bezier translation (`transform: translateY()`) with a continuous keyframe animation that expands and fades a colored `box-shadow`, mimicking a radar pulse.
- **Fintech Aesthetics**: Dark-mode optimized (`#0b0f19` background) with high-contrast typography and subtle inner borders to separate layers effectively.
- **Themable Pulses**: Easily change the pulse color per card using modifier classes (`.primary`, `.success`, `.warning`).
- **Accessibility Friendly**: Includes `prefers-reduced-motion` support to fall back to a static, non-animating elevation shadow for sensitive users.

## Usage

```html
<div class="ease-fintech-grid">
    <!-- Apply modifier classes like .success or .warning to change the pulse color -->
    <div class="ease-fintech-card success">
        <div class="ease-fintech-card-header">
            <span>Monthly Income</span>
        </div>
        <div class="ease-fintech-card-value">$14,230.00</div>
        <div class="ease-fintech-card-trend up">
            +12.5% vs target
        </div>
    </div>
</div>
```

## CSS Customization

The pulse color is driven by a local CSS variable `--ease-pulse-color`. You can override this in your CSS or inline styles:

```css
.ease-fintech-card.custom-purple {
  --ease-pulse-color: rgba(168, 85, 247, 0.6);
}
```

## Why it fits EaseMotion CSS

- **Motion-First Focus**: Transforms standard flat data cards into highly interactive UI elements using advanced, layered CSS animations (combining transitions on state change with infinite keyframe loops).
- **Dependency Free**: Perfect for lightweight dashboards where you want premium interaction without the overhead of heavy animation libraries.
