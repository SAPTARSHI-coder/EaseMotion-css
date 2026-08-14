# Cyberpunk FAQ Accordion — accessibility integration

Documentation guide for the **Cyberpunk FAQ Accordion** component, focused on **accessibility integration**.

## Overview
Accessibility guide for the cyberpunk FAQ accordion: button trigger with aria-expanded, region role for panel, focus-visible.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<div class="ease-faq"><details class="ease-faq__panel" open><summary class="ease-faq__q" aria-expanded="true" aria-controls="fa">What is EaseMotion?</summary><div id="fa" class="ease-faq__a" role="region">A CSS animation library.</div></details></div>
```

## CSS class naming conventions
- `.ease-cyberpunk-faq-accordion-a11y` — root container
- `.ease-cyberpunk-faq-accordion-a11y__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-faq-accent: #6366f1;
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

Closes #81592
