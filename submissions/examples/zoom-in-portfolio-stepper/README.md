# Zoom-In Stepper for Creative Portfolio Layouts

A pure CSS/HTML step navigator that visually zooms in the active step and its content panel, no JavaScript required. Driven entirely by hidden radio inputs and the `:checked` pseudo-class.

## Features

- 4-step navigator (easily extendable) with numbered dots and labels
- Active step zooms in (`scale(1.15)`) while inactive steps shrink slightly
- Animated progress track that fills as you move through steps
- Content panels reveal with a zoom-in + fade transition
- Fully responsive, labels collapse on small screens, dots resize
- Respects `prefers-reduced-motion` (all transforms/transitions disabled)
- Zero JavaScript, works with just CSS `:checked` selectors

## Usage

1. Copy `style.css` into your project and link it in your HTML `<head>`.
2. Copy the stepper markup from `demo.html`:
   - A `<input type="radio">` per step (hidden, drives state)
   - A `<label>` per step inside `.stepper__nav` (the visible dot)
   - A `<section class="stepper__panel stepper__panel--N">` per step
3. Add or remove steps by duplicating the radio/label/panel pattern and updating the nth panel width rule in `.stepper__progress`.

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--stepper-primary` | `#6366f1` | Accent color for active step and progress bar |
| `--stepper-primary-light` | `#a5b4fc` | Border/glow color on active step number |
| `--stepper-bg` | `#0f0f1a` | Page background |
| `--stepper-panel-bg` | `#1a1a2e` | Panel and dot background |
| `--stepper-text` | `#f4f4f8` | Primary text color |
| `--stepper-muted` | `#8b8ba7` | Secondary/muted text color |
| `--stepper-dot-size` | `3rem` | Diameter of each step number circle |
| `--stepper-zoom-inactive` | `0.85` | Scale applied to inactive step dots |
| `--stepper-zoom-active` | `1.15` | Scale applied to the active step dot |
| `--stepper-transition-duration` | `0.45s` | Duration for all zoom/fade transitions |
| `--stepper-transition-ease` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Easing curve (gives a slight "pop") |

Override any of these in your own stylesheet via `:root { --stepper-primary: #ff6b6b; }`.

## Accessibility

- Radio inputs are focusable and keyboard-navigable (arrow keys switch steps natively).
- Labels are proper `<label for="...">` elements tied to inputs, screen readers announce them correctly.
- All zoom/scale/opacity transitions are stripped under `prefers-reduced-motion: reduce`.

## Responsive Behavior

- Desktop/tablet: full labels visible beneath each numbered dot.
- Mobile (max-width 640px): labels hidden to save space, dot size reduced, track insets tightened.
