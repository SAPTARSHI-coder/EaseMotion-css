# Stepper / Progress Wizard Component

Multi-step wizard indicator with horizontal and vertical variants, supporting completed, active, and upcoming step states.

## Files

- `style.css` — Stepper component styles
- `demo.html` — Live demo with interactive prev/next for 3 variants

## Usage

```html
<div class="ease-stepper">
  <div class="ease-step ease-step-completed">
    <div class="ease-step-indicator">✓</div>
    <div class="ease-step-content">
      <div class="ease-step-title">Step 1</div>
    </div>
  </div>
  <div class="ease-step-connector"></div>
  <div class="ease-step ease-step-active">
    <div class="ease-step-indicator">2</div>
    <div class="ease-step-content">
      <div class="ease-step-title">Step 2</div>
    </div>
  </div>
</div>
```

## Classes

| Class | Purpose |
|-------|---------|
| `.ease-stepper` | Horizontal stepper container |
| `.ease-stepper-vertical` | Vertical layout variant |
| `.ease-step` | Individual step |
| `.ease-step-active` | Current active step |
| `.ease-step-completed` | Completed step |
| `.ease-step-indicator` | Number/icon circle |
| `.ease-step-indicator-icon` | Icon inside indicator |
| `.ease-step-content` | Title + description wrapper |
| `.ease-step-title` | Step label |
| `.ease-step-description` | Step subtitle |
| `.ease-step-connector` | Line connecting steps |
| `.ease-step-sm` / `.ease-step-lg` | Size variants |
