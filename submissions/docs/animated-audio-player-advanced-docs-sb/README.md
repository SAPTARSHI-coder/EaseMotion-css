# Animated Audio Player — advanced styling

Documentation guide for the **Animated Audio Player** component, focused on **advanced styling**.

## Overview
Advanced styling guide for the animated audio player: multi-band equalizer, gradient progress fill, and vinyl spin animation.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<div class="ease-audio">
  <button class="ease-audio__play" aria-label="Play">▶</button>
  <div class="ease-audio__eq"><span></span><span></span><span></span><span></span></div>
  <input type="range" class="ease-audio__seek" min="0" max="100" aria-label="Seek" />
</div>
```

## CSS class naming conventions
- `.ease-animated-audio-player-advanced` — root container
- `.ease-animated-audio-player-advanced__<element>` — BEM-style child elements
- `.ease-animated-audio-player-advanced--<variant>` — appearance modifier classes
- `.is-active`, `.is-up`, `.is-down` — state modifier classes

## Custom CSS variable overrides
```css
:root {
  --ease-player-bg: #6366f1;
  --ease-player-accent: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements (`<button>`, `<input>`) where possible.
- `:focus-visible` outlines are provided for keyboard users.
- `aria-current`, `aria-pressed`, `aria-label`, and `role` attributes are used where appropriate.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus between controls.
- Enter/Space to activate buttons/chips.
- For popovers/drawers, Escape closes and returns focus to the trigger.

Closes #81577
