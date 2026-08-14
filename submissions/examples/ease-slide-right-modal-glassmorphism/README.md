# Slide-Right Glassmorphic Modal

## What does this do?
This is a Pure HTML and CSS slide-right modal styled with a modern glassmorphism aesthetic. It opens with a combined slide-right and scale animation, utilizes backdrop-filter blur effects, and requires absolutely zero JavaScript for both opening and closing transitions.

## How is it used?
Structure your HTML using the `ease-modal` class convention:

```html
<!-- Trigger Button -->
<a href="#my-modal" id="modal-trigger-btn" class="ease-btn">Open Settings</a>

<!-- Modal Component -->
<div id="my-modal" class="ease-modal" role="dialog" aria-modal="true">
  <!-- Overlay Backdrop (click outside to close) -->
  <a href="#modal-trigger-btn" class="ease-modal__overlay" aria-label="Close modal"></a>
  
  <!-- Modal Content Container -->
  <div class="ease-modal__content">
    <!-- Close Button (returns focus back to trigger button) -->
    <a href="#modal-trigger-btn" class="ease-modal__close" aria-label="Close modal">&times;</a>
    
    <h2>Modal Content Heading</h2>
    <p>Your modal body content goes here...</p>
  </div>
</div>
```

## Why is it useful?
It provides a lightweight, performant, and dependency-free modal solution that integrates seamlessly into glassmorphism dashboard layouts. 

Key advantages:
- **No JavaScript**: Transitions and toggling are completely managed by native CSS `:target` state logic.
- **Accessibility & Focus Management**: Includes support for `:focus-visible`, proper ARIA roles, and uses URL-hash targeting to automatically restore keyboard focus back to the opening trigger button upon closing.
- **Performance**: Animations are highly optimized (transitioning only `transform` and `opacity`) and fully respect the `prefers-reduced-motion` accessibility media queries.
- **Extremely Customizable**: Styled using easily configurable CSS Custom Properties for animation, sizing, blur, and opacity.

## Customization Variables
You can override the default modal configuration in your stylesheet:

```css
.ease-modal {
  --ease-modal-duration: 0.45s;                            /* Animation duration */
  --ease-modal-easing: cubic-bezier(0.16, 1, 0.3, 1);       /* Easing function */
  --ease-modal-width: 520px;                               /* Modal width */
  --ease-modal-blur: 20px;                                 /* Blur intensity */
  --ease-modal-bg-opacity: 0.08;                           /* Background opacity */
  --ease-modal-radius: 28px;                               /* Border radius */
  --ease-modal-glow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), /* Shadow/glow strength */
                     0 0 0 1px rgba(255, 255, 255, 0.1) inset,
                     0 0 40px rgba(108, 99, 255, 0.15);
}
```

## Tech Stack
- HTML5
- CSS3 (Vanilla CSS, custom variables, transition logic)

## Preview
Open `demo.html` directly in your browser to interact with the demo.
