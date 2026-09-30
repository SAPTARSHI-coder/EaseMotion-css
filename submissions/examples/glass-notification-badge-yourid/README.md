# Glassmorphism Notification Badge

Closes #85685

A pure-CSS animated notification badge with glassmorphism styling.

## Usage
<span class="ease-badge-glass-yourid" role="status" aria-label="3 new">3</span>

## Modifiers
`is-success`, `is-warning`, `is-danger`, `is-read`, `is-dot`, `ease-badge-pulse-yourid`

## Features
- Zero JavaScript
- Uses EaseMotion CSS variables with fallbacks
- Responsive size via clamp()
- Respects prefers-reduced-motion
- backdrop-filter fallback for older browsers