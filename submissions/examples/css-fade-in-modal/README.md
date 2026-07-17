# CSS Fade-In Modal

## What does this do?
A responsive, pure CSS modal component featuring a smooth, configurable fade-in and scale entrance animation built on the CSS `:target` pseudo-class with no JavaScript dependency.

## How is it used?

### HTML Structure
Add the trigger link and the modal skeleton with corresponding IDs:

```html
<!-- Open Trigger -->
<a href="#demo-modal" class="btn btn-primary">Open Modal</a>

<!-- Modal Overlay Container (matches ID with href) -->
<div id="demo-modal" class="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-title" tabindex="-1">
  <!-- Clickable backdrop overlay to close on background click -->
  <a href="#" class="modal-backdrop" aria-hidden="true" tabindex="-1"></a>
  
  <!-- Modal Content Card -->
  <div class="modal-card">
    <div class="modal-header">
      <h2 id="modal-title" class="modal-title">Modal Title</h2>
      <!-- Link targeting '#' clears the target state and closes the modal -->
      <a href="#" class="modal-close-icon" aria-label="Close modal">&times;</a>
    </div>
    
    <div class="modal-body">
      <p>Your modal body content goes here.</p>
    </div>
    
    <div class="modal-footer">
      <a href="#" class="btn btn-secondary">Cancel</a>
      <a href="#" class="btn btn-primary">Confirm</a>
    </div>
  </div>
</div>
```

### Configurable CSS Variables
Configure the transition behavior and style properties globally or per instance using CSS custom variables:

```css
#custom-modal {
  --modal-duration: 0.45s;                     /* Speed of transition */
  --modal-easing: cubic-bezier(0.34, 1.56, 0.64, 1); /* Bounce easing */
  --modal-scale-start: 0.85;                  /* Starting scale for cards */
  --modal-backdrop-blur: 12px;                /* Frosted glass backdrop blur */
  --modal-bg: rgba(30, 41, 59, 0.8);          /* Card background */
  --modal-border: 1px solid rgba(255, 255, 255, 0.15); /* Card border */
}
```

## Why is it useful?
It provides standard, modern modal interactions with a premium aesthetic and smooth entry/exit animations without requiring custom script loaders or framework integrations. 

By employing the native `:target` selector, keyboard user experiences are optimized out-of-the-box:
1. Triggering the modal link automatically shifts focus to the modal container via browser hash matching (`tabindex="-1"`).
2. Users can easily tab through form elements inside the modal.
3. Closing the modal is handled natively by shifting target hash back to `#` (which cancels the `:target` selector).
4. Accessibility guidelines for screen-readers are strictly enforced using ARIA attributes and focus-visible outlines.
5. Media query overrides respect system preferences for reduced motion.

---

## Tech Stack
- HTML5 (Semantic elements & WAI-ARIA)
- CSS3 (Variables, transitions, backdrop-filter, prefers-reduced-motion)

## Preview
Open `demo.html` directly in your browser to view standard, glassmorphic, and interactive form-based variants.
