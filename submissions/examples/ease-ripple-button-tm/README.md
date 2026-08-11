# ease-ripple-button-tm

A button component that emits a satisfying radial ripple wave on click — pure CSS, powered by EaseMotion design tokens.

## What does this do?

Adds a `::after`-based ripple animation to clickable buttons. The ripple expands from the click origin using `radial-gradient`, scales to 2.5× with an ease-out curve, and fades out. Every timing value is driven by EaseMotion tokens so the animation feels consistent with the rest of the framework.

## Features

- Radial ripple expand + fade on click, triggered by a CSS class toggle via JavaScript
- Seven color variants: primary, secondary, success, danger, warning, info
- Three size variants: sm, md (default), lg
- Two style variants: outline and ghost
- Full-width option
- Disabled state styling
- Hover lift and active press feedback using `--ease-shadow-*` tokens
- Dark mode support using CSS `prefers-color-scheme`
- Respects `prefers-reduced-motion` — ripple animation is suppressed when user has requested reduced motion
- Focus-visible ring for keyboard accessibility

## Usage

```html
<button class="ripple-btn ripple-btn-primary" type="button">Click Me</button>
```

Add the JavaScript to toggle the ripple class:

```javascript
btn.addEventListener('click', function() {
  btn.classList.remove('is-rippling');
  void btn.offsetWidth;
  btn.classList.add('is-rippling');
  setTimeout(() => btn.classList.remove('is-rippling'), 700);
});
```

## Why is it useful?

Material Design popularized ripple interactions, but most implementations reach for JavaScript canvas libraries. This submission proves it can be done with a single CSS pseudo-element, a CSS class toggle, and the framework's existing timing tokens (`--ease-speed-medium`, `--ease-ease-out`). It integrates naturally into any EaseMotion-based UI without introducing new dependencies.
