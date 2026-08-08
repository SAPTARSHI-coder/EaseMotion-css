# Animated Stepper Component (`ease-stepper-xyz`)

A zero-dependency, CSS-only animated stepper/wizard component designed for the **EaseMotion CSS** framework. Perfect for multi-step forms, onboarding flows, and checkout processes.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation using state classes.
- **Animation-First**: Smooth progress line animations, completion bounce, and active pulse using EaseMotion timing tokens.
- **Design Token Compatible**: Leverages `--ease-duration-normal`, `--ease-out`, and color tokens for seamless theming.
- **Multiple Layouts**: Horizontal (default), vertical, and mini (compact) variants.
- **State Management**: Completed, active, and pending states with distinct visual indicators.
- **Progress Animation**: Connector lines animate to show progress between steps.
- **Accessible**: Proper semantic HTML structure and color contrast.
- **Reduced Motion Safe**: Respects `prefers-reduced-motion` OS settings.

## 🚀 Usage

### Horizontal Stepper (Default)
```html
<div class="ease-stepper-xyz">
  <!-- Completed Step -->
  <div class="ease-stepper-xyz-step ease-stepper-xyz-completed">
    <div class="ease-stepper-xyz-indicator">
      <span class="ease-stepper-xyz-icon">✓</span>
    </div>
    <div class="ease-stepper-xyz-content">
      <div class="ease-stepper-xyz-title">Step 1</div>
      <div class="ease-stepper-xyz-description">Description</div>
    </div>
  </div>

  <!-- Connector -->
  <div class="ease-stepper-xyz-connector ease-stepper-xyz-completed"></div>

  <!-- Active Step -->
  <div class="ease-stepper-xyz-step ease-stepper-xyz-active">
    <div class="ease-stepper-xyz-indicator">
      <span class="ease-stepper-xyz-number">2</span>
    </div>
    <div class="ease-stepper-xyz-content">
      <div class="ease-stepper-xyz-title">Step 2</div>
      <div class="ease-stepper-xyz-description">Description</div>
    </div>
  </div>

  <!-- Connector -->
  <div class="ease-stepper-xyz-connector"></div>

  <!-- Pending Step -->
  <div class="ease-stepper-xyz-step">
    <div class="ease-stepper-xyz-indicator">
      <span class="ease-stepper-xyz-number">3</span>
    </div>
    <div class="ease-stepper-xyz-content">
      <div class="ease-stepper-xyz-title">Step 3</div>
      <div class="ease-stepper-xyz-description">Description</div>
    </div>
  </div>
</div>