# Animated Notification and Toast Component Examples

## Abstract
This module presents lightweight, accessible, CSS-only animated notification and toast feedback components designed for the EaseMotion CSS library. It delivers high-performance entrance transition effects (slide, fade, scale) across multiple contextual feedback states (success, warning, error, info) while respecting web accessibility standards and forced-colors media conditions.

## CONTRIBUTING.md Compliance

### 1. What does this do?
Implements a comprehensive collection of CSS-only animated notifications and toasts covering success, warning, error, and information states with slide, fade, and scale entrance animations.

### 2. How is it used?
Apply the `.ease-toast` class alongside status modifiers (`success`, `warning`, `error`, `info`) and animation classes (`anim-slide`, `anim-fade`, `anim-scale`) inside any container.

```html
<div class="ease-toast success anim-slide" role="alert">
  <span class="ease-toast-icon" aria-hidden="true">✓</span>
  <div class="ease-toast-content">
    <h3 class="ease-toast-heading">Changes Saved</h3>
    <p class="ease-toast-message">Your profile settings have been successfully updated.</p>
  </div>
</div>
```

### 3. Why is it useful?
Eliminates repetitive boilerplate for toast feedback systems while ensuring buttery-smooth, hardware-accelerated animations that function entirely without JavaScript.

## Notification State Architecture

The system utilizes modular design principles combining layout containment, variant indicators, and keyframe-driven entrance transitions:

- **Stage & Container (`.ease-toast-stage`, `.ease-toast-stack`)**: Provides structured stacking and responsive flex layouts.
- **Base Toast (`.ease-toast`)**: Formats padding, subtle elevation shadow, relative positioning, and border-radius.
- **Status Indicators (`::before` accent border)**: Color-codes status state via CSS variables without DOM overhead.
- **Entrance Animation Variants**:
  - `anim-slide`: Hardware-accelerated slide-in transition using `translateX`.
  - `anim-fade`: Smooth opacity entrance transition.
  - `anim-scale`: Elastic scale entrance using cubic-bezier easing.
- **Accessibility & Contrast**: Includes `role="alert"` semantics and High-Contrast mode (`forced-colors: active`) support.

## Custom CSS Properties

The following design tokens can be customized on `:root` or locally overridden:

| Property Name | Default Value | Description |
| :--- | :--- | :--- |
| `--toast-bg` | `#030712` | Main page background color |
| `--toast-surface` | `#1e293b` | Stage container background color |
| `--toast-border` | `rgba(255, 255, 255, 0.1)` | Subtle border stroke for stage & toast cards |
| `--toast-text` | `#f8fafc` | Primary text color |
| `--toast-muted` | `#94a3b8` | Subtitle and description body text color |
| `--success-color` | `#10b981` | Accent color for success notifications |
| `--warning-color` | `#f59e0b` | Accent color for warning notifications |
| `--error-color` | `#ef4444` | Accent color for error notifications |
| `--info-color` | `#3b82f6` | Accent color for info notifications & action buttons |
