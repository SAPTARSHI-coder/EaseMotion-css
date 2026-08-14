# Animated Audio Player — accessibility integration

Documentation guide for the **Animated Audio Player** component, focused on **accessibility integration**.

## Overview
Accessibility guide for the animated audio player: play/pause button label, aria-pressed, and a visually-hidden progress announcement.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<div class="ease-audio" role="region" aria-label="Audio player"><button class="ease-audio__btn" aria-pressed="false" aria-label="Play">▶</button><div class="ease-audio__track" role="progressbar" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100" aria-label="Playback progress"><div class="ease-audio__fill"></div></div></div>
```

## CSS class naming conventions
- `.ease-animated-audio-player-a11y` — root container
- `.ease-animated-audio-player-a11y__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-audio-accent: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements (`<button>`, `<a>`) where possible.
- `:focus-visible` outlines are provided for keyboard users.
- `aria-label`, `aria-pressed`, `aria-expanded`, `aria-selected`, `role`, and `aria-controls` are used where appropriate.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus between controls.
- Enter/Space to activate buttons.
- For accordions/dropdowns, Escape closes and returns focus to the trigger.

Closes #81578
