# Animated Tooltip Collection (Issue #87415)

## Abstract
This component provides a lightweight, zero-dependency pure CSS animated tooltip system. It features directional positioning (top, bottom, left, right), smooth entrance animations (fade, scale, slide), dark mode aesthetic integration, keyboard focus accessibility via `:focus-within`, and Windows High Contrast Mode (`forced-colors`) support.

## CONTRIBUTING.md Compliance

### 1. What does this do?
Implements a collection of pure CSS animated tooltips supporting top, bottom, left, and right directional placements combined with fade, scale, and slide entrance transitions.

### 2. How is it used?
Wrap any interactive element in `.ease-tooltip-container`, add `.ease-tooltip` with positioning modifiers (`pos-top`, `pos-bottom`, `pos-left`, `pos-right`) and animation classes (`anim-fade`, `anim-scale`, `anim-slide`).

Example:
```html
<div class="ease-tooltip-container">
  <button type="button" class="ease-tip-btn">Hover or Focus Me</button>
  <div class="ease-tooltip pos-top anim-fade" role="tooltip">
    Informational top tip
  </div>
</div>
```

### 3. Why is it useful?
Eliminates repetitive tooltip styling boilerplate while providing accessible hover and keyboard focus-within states with zero JavaScript dependencies.

## Tooltip Architecture & Positioning

The component uses relative positioning on `.ease-tooltip-container` and absolute positioning on `.ease-tooltip`.

- **Top Position (`.pos-top`)**: Positioned above the trigger element (`bottom: calc(100% + 10px); left: 50%;`).
- **Bottom Position (`.pos-bottom`)**: Positioned below the trigger element (`top: calc(100% + 10px); left: 50%;`).
- **Left Position (`.pos-left`)**: Positioned to the left of the trigger element (`right: calc(100% + 10px); top: 50%;`).
- **Right Position (`.pos-right`)**: Positioned to the right of the trigger element (`left: calc(100% + 10px); top: 50%;`).

### Entrance Animations
- **Fade (`.anim-fade`)**: Smooth opacity transition.
- **Scale (`.anim-scale`)**: Scale transition from `0.85` to `1`.
- **Slide (`.anim-slide`)**: Vertical translation shift combined with fade-in.

## Custom CSS Properties

The component defines CSS custom properties on `:root` for effortless theme overrides and customization:

| Property | Default Value | Description |
| --- | --- | --- |
| `--tip-bg` | `#030712` | Main page background color |
| `--tip-surface` | `#1e293b` | Surface color for tooltips and buttons |
| `--tip-border` | `rgba(255, 255, 255, 0.12)` | Subtle border outline color |
| `--tip-text` | `#f8fafc` | Primary text color |
| `--tip-muted` | `#94a3b8` | Secondary/muted description text color |
| `--tip-accent` | `#3b82f6` | Accent focus highlight color |
| `--tip-shadow` | `0 10px 25px -5px rgba(0, 0, 0, 0.5)` | Tooltip elevation drop shadow |
