# Stepper Step Indicator (ease-stepper)

Step indicator component with animated connectors — perfect for multi-step forms and wizards.

## Files

| File                        | Description      |
| --------------------------- | ---------------- |
| 📄 [demo.html](./demo.html) | Interactive demo |
| 🎨 [style.css](./style.css) | Stepper styles   |
| 📖 [README.md](./README.md) | Documentation    |

## Classes

| Class                   | Description                |
| ----------------------- | -------------------------- |
| `ease-stepper`          | Horizontal stepper wrapper |
| `ease-stepper-vertical` | Vertical stepper wrapper   |
| `ease-step`             | Individual step            |
| `ease-step-active`      | Active state               |
| `ease-step-completed`   | Completed state            |
| `step-connector`        | Line between steps         |

## Usage

```html
<!-- Horizontal Stepper -->
<div class="ease-stepper">
  <div class="ease-step ease-step-active">
    <div class="step-number">1</div>
    <div class="step-label">Step 1</div>
  </div>
  <div class="step-connector"></div>
  <div class="ease-step">
    <div class="step-number">2</div>
    <div class="step-label">Step 2</div>
  </div>
</div>

<!-- Completed Step -->
<div class="ease-step ease-step-completed">
  <div class="step-number">✓</div>
  <div class="step-label">Completed</div>
</div>
```
