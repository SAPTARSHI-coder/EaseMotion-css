# Modal Scale Overlay

## What does this do?

It opens a centered modal panel with a dark blurred overlay behind it. The content box enters with an elastic scale-up transition (0.7 → 1.0) while the overlay fades in.

## How is it used?

Wrap your modal markup with the `.modal-scale-overlay-ij` container and use the child classes `.mso-overlay-ij` (backdrop), `.mso-content-ij` (panel), and `.mso-close-ij` (close button). Toggle the `.mso-open` class on the container to show/hide the modal.

```html
<div class="modal-scale-overlay-ij" id="modal">
  <div class="mso-overlay-ij" id="overlay"></div>
  <div class="mso-content-ij">
    <button class="mso-close-ij">&times;</button>
    Your content here
  </div>
</div>
```

```js
// Open
modal.classList.add('mso-open');
document.body.style.overflow = 'hidden';

// Close
modal.classList.remove('mso-open');
document.body.style.overflow = '';
```

Customize the look by overriding these `:root` variables:

```css
:root {
  --mso-overlay-color: rgba(0, 0, 0, 0.55);
  --mso-content-bg: #fff;
  --mso-transition-duration: 0.3s;
  --mso-max-width: 480px;
}
```

## Why is this useful?

This provides a lightweight, accessible modal pattern with a polished scale animation. It relies only on CSS transforms and opacity transitions (GPU-composited) for smooth performance. The reduced-motion query disables all transitions when the user prefers it.
