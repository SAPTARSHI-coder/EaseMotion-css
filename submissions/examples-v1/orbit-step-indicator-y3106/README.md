# Orbit Step Indicator

## 1. What does this do?

A pure CSS-interactive Cyberpunk stepper widget featuring concentric rotating tracking lines, neon checkpoints, and a glowing orbital tracer particle that orbits smoothly around step boundaries when switching steps.

## 2. How is it used?

Incorporate radio buttons with matching label actions overlaying the circular orbit structural rings to design a completely script-free stepper layout:

```html
<input
  type="radio"
  id="step-1"
  name="orbit-stepper"
  checked
  style="display: none;"
/>
<div class="orbit-stepper-container">
  <div class="orbit-ring-outer"></div>
  <div class="orbit-tracer-wrapper">
    <div class="orbit-particle"></div>
  </div>
</div>
```

## 3. Why is it useful?

It conforms fully to the EaseMotion CSS design philosophy:

- **Human-readable**: Simple structural classes like `orbit-ring-outer` and `orbit-particle` express their functional layouts directly.
- **Animation-first**: Implements advanced step-indicator transitions using rotational coordinate transforms and staggered ring rotations.
- **Composable**: Works as a premium gamified dashboard progress indicator, onboarding wizard stepper, or sci-fi interface check-in component.
