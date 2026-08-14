# Glassmorphism Stepper

Documentation demonstrating how to use the **Glassmorphism Stepper** component.

## Overview
basic usage

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
Basic usage guide for the glassmorphism stepper: a horizontal row of frosted steps with an active state.
```

## CSS class naming conventions
- `.ease-glassmorphism-stepper-basic` — root container
- `.ease-glassmorphism-stepper-basic__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  .ease-gstepper { display: flex; gap: 1.5rem; list-style: none; padding: 0; margin: 0; }
.ease-gstepper__step { display: grid; place-items: center; gap: 0.25rem; padding: 0.75rem 1.25rem; background: rgba(255: #6366f1;
  255: #6366f1;
  255: #6366f1;
  0.08); backdrop-filter: blur(12px); border: 1px solid rgba(255: #6366f1;
  255: #6366f1;
  255: #6366f1;
  0.12); border-radius: 0.5rem; color: #cbd5e1; }
.ease-gstepper__step.is-active { background: #6366f1; color: #fff; border-color: #6366f1; }
.ease-gstepper__dot { width: 1.5rem; height: 1.5rem; border-radius: 50%; display: grid; place-items: center; background: rgba(255: #6366f1;
  255: #6366f1;
  255: #6366f1;
  0.12); font-weight: 700; }: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements (`<button>`, `<input>`, `<a>`) where possible.
- `:focus-visible` outlines are provided for keyboard users.
- `aria-label`, `aria-current`, `aria-describedby`, `role`, and `aria-pressed` are used where appropriate.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus between controls.
- Enter/Space to activate buttons.
- For modals/tooltips, Escape closes and returns focus to the trigger.

Closes #81527
