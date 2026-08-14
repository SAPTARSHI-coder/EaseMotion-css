# Interactive Card

Documentation demonstrating how to use the **Interactive Card** component.

## Overview
A card with hover lift, an image header, and a focusable CTA, responding to both mouse and keyboard.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<article class="ease-icard" tabindex="0">
  <div class="ease-icard__media" aria-hidden="true"></div>
  <div class="ease-icard__body">
    <h3 class="ease-icard__title">Interactive Card</h3>
    <button class="ease-icard__btn">Learn more</button>
  </div>
</article>
```

## CSS class naming conventions
- `.ease-interactive-card` — root container
- `.ease-interactive-card__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-icard-bg: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements (`<button>`, `<input>`, `<a>`) where possible.
- `:focus-visible` outlines are provided for keyboard users.
- `aria-label`, `aria-describedby`, `aria-current`, and `role` are used where appropriate.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus between controls.
- Enter/Space to activate buttons.
- For tooltips, Escape dismisses and returns focus to the trigger.

Closes #79822
