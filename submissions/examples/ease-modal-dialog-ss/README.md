# Modal Dialog Component (#86842)

## Abstract
The `ease-modal-dialog` is a lightweight, high-performance modal feedback dialog component created for the EaseMotion CSS design system. It features a backdrop overlay with CSS background blur, accessible focus indicators, and custom spring-physics zoom entrance animations.

## CONTRIBUTING.md Compliance

### 1. What does this do?
Implements a centered Modal Dialog component (`.ease-modal-dialog`) featuring a blurred backdrop overlay (`backdrop-filter`) and a spring-physics zoom-up entrance transition.

### 2. How is it used?
Wrap the dialog box inside `.ease-modal-overlay` and toggle the `.is-open` modifier class via state or JavaScript.

```html
<div class="ease-modal-overlay is-open" role="dialog" aria-modal="true" aria-labelledby="dialog-title">
  <div class="ease-modal-dialog">
    <div class="ease-dialog-header">
      <h2 id="dialog-title" class="ease-dialog-title">Modal Title</h2>
      <p class="ease-dialog-body">Modal body text goes here.</p>
    </div>
    <div class="ease-dialog-actions">
      <button class="ease-btn-action">Cancel</button>
      <button class="ease-btn-action primary">Confirm</button>
    </div>
  </div>
</div>
```

### 3. Why is it useful?
Enhances feedback states and interruption workflows in web applications with a polished, hardware-accelerated dialog presentation without external UI frameworks.

## Backdrop & Zoom Architecture
- **Backdrop Blur & Dimming**: Utilizes `backdrop-filter: blur(8px)` alongside `var(--modal-backdrop)` (`rgba(0, 0, 0, 0.75)`) for an immersive visual hierarchy.
- **Spring Entrance Physics**: Employs `transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)` to deliver an energetic zoom-up effect on entry (`scale(0.8) translateY(20px)` to `scale(1) translateY(0)`).
- **High-Contrast Support**: Includes `@media (forced-colors: active)` overrides for `CanvasText` borders and `Highlight` outlines for complete accessibility.

## Custom CSS Properties
The component is fully customizable via `:root` level CSS variables:

| Property | Default Value | Description |
| :--- | :--- | :--- |
| `--modal-bg` | `#030712` | Main page background color |
| `--modal-surface` | `#0f172a` | Container stage surface background |
| `--modal-box-bg` | `#1e293b` | Dialog box card background |
| `--modal-border` | `rgba(255, 255, 255, 0.12)` | Subtle border for dark mode surfaces |
| `--modal-backdrop` | `rgba(0, 0, 0, 0.75)` | Backdrop mask color |
| `--modal-text` | `#f8fafc` | Primary text color |
| `--modal-muted` | `#94a3b8` | Muted secondary text color |
| `--modal-accent` | `#3b82f6` | Primary action button accent color |
| `--modal-shadow` | `0 25px 50px -12px rgba(0, 0, 0, 0.7)` | Elevation shadow |
