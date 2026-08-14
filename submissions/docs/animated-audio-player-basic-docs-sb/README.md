# Animated Audio Player — basic usage

Documentation guide for the **Animated Audio Player** component, focused on **basic usage**.

## Overview
An audio player with a play/pause toggle, an animated equalizer bar visualizer, and a progress scrubber.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<div class="ease-audio">
  <button class="ease-audio__play" aria-label="Play">▶</button>
  <div class="ease-audio__eq"><span></span><span></span><span></span></div>
  <input type="range" class="ease-audio__seek" min="0" max="100" aria-label="Seek" />
</div>
```

## CSS class naming conventions
- `.ease-{slug}` — root container
- `.ease-{slug}__<element>` — BEM-style child elements
- `.is-active`, `.is-complete`, `.is-up`, `.is-down` — state modifier classes

## Custom CSS variable overrides
```css
:root {
  --ease-player-bg: #6366f1;
  --ease-player-accent: #6366f1;
  --ease-eq-bar: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements (`<button>`, `<input>`) where possible.
- `:focus-visible` outlines are provided for keyboard users.
- Decorative icons are hidden from AT with `aria-hidden="true"` or `alt=""`.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus between controls.
- Enter/Space to activate buttons.
- For popovers/menus, Escape closes and returns focus to the trigger.

Closes #81576
