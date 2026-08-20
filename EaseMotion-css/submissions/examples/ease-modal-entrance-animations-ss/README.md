# CSS Modal Entrance Animations (Issue #87416)

## Abstract
This example provides a modular, lightweight CSS solution for dialog modal entrance animations featuring hardware-accelerated transitions and backdrop filter overlays. It includes 4 distinct animation variants (`Fade In`, `Scale Pop`, `Slide Down`, and `Zoom Blur`) designed to enhance user experience without reliance on external JavaScript animation libraries.

## CONTRIBUTING.md Compliance

### 1. What does this do?
Implements a curated collection of 4 unique CSS modal entrance animation styles (Fade In, Scale Pop, Slide Down, and Zoom Blur) with synchronized backdrop overlay transitions.

### 2. How is it used?
Apply the `.ease-modal-overlay` container class alongside an animation modifier class (`anim-fade`, `anim-scale`, `anim-slide`, or `anim-zoom`) and toggle the `.is-open` class using standard DOM class manipulation or state management hooks.

### 3. Why is it useful?
Eliminates repetitive animation boilerplate for dialog components while delivering buttery-smooth, hardware-accelerated transitions that enhance modern web application UX.

## Modal Animation Styles

- **Fade In (`.anim-fade`)**: A simple opacity transition for minimalist, low-distraction modal presentations.
- **Scale Pop (`.anim-scale`)**: A bouncy spring-physics scale effect (`cubic-bezier(0.34, 1.56, 0.64, 1)`) suitable for interactive confirmations.
- **Slide Down (`.anim-slide`)**: A top-down vertical entrance using a smooth custom easing curve (`cubic-bezier(0.16, 1, 0.3, 1)`).
- **Zoom Blur (`.anim-zoom`)**: A cinematic transition combining initial scale reduction and a backdrop filter blur fade (`filter: blur(8px)` -> `filter: blur(0)`).

## Custom CSS Properties

The following CSS Custom Properties are defined under `:root` for seamless theme customization:

| Token | Default Value | Description |
| --- | --- | --- |
| `--modal-bg` | `#030712` | Main page background color |
| `--modal-surface` | `#1e293b` | Modal card surface background color |
| `--modal-overlay` | `rgba(0, 0, 0, 0.75)` | Backdrop overlay tint color |
| `--modal-border` | `rgba(255, 255, 255, 0.1)` | Subtle border stroke color for surface elements |
| `--modal-text` | `#f8fafc` | Primary text color for headers and titles |
| `--modal-muted` | `#94a3b8` | Muted secondary text color |
| `--modal-accent` | `#3b82f6` | Accent color for buttons and interactive focus rings |
