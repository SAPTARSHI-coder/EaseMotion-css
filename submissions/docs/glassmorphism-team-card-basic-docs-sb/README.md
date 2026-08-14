# Glassmorphism Team Card — basic usage

Documentation guide for the **Glassmorphism Team Card** component, focused on **basic usage**.

## Overview
A team member card with a frosted glass avatar, name, role, and social links on a translucent panel.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<article class="ease-team-card">
  <img class="ease-team-card__avatar" src="avatar.jpg" alt="Ada Lovelace" />
  <h3 class="ease-team-card__name">Ada Lovelace</h3>
  <p class="ease-team-card__role">Engineer</p>
</article>
```

## CSS class naming conventions
- `.ease-{slug}` — root container
- `.ease-{slug}__<element>` — BEM-style child elements
- `.is-active`, `.is-complete`, `.is-up`, `.is-down` — state modifier classes

## Custom CSS variable overrides
```css
:root {
  --ease-team-bg: #6366f1;
  --ease-team-blur: #6366f1;
  --ease-team-accent: #6366f1;
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

Closes #81582
