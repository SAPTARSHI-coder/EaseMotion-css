# Ease HTML Popover

An implementation of native popover modals utilizing the HTML Popover API and modern CSS entry/exit transition properties.

## 1. What does this do?

This component provides a fully functional, animated modal dialog rendered in the browser's top-layer without requiring any JavaScript. It utilizes the native HTML Popover API for modal state management and light-dismiss behaviors, coupled with modern CSS transitions (`@starting-style` and `allow-discrete`) for smooth entry and exit animations.

## 2. How is it used?

### HTML
Attach the `popover` attribute to the target container, and use `popovertarget` on trigger elements to open or close the popover.

```html
<!-- Trigger Button -->
<button class="ease-btn" popovertarget="ease-modal">Open Native Modal</button>

<!-- Popover Container -->
<div id="ease-modal" class="ease-popover" popover>
  <h2>Modal Title</h2>
  <p>Modal content goes here.</p>
  <button class="ease-btn" popovertarget="ease-modal" popovertargetaction="hide">Close Modal</button>
</div>
```

### CSS
Style the base state, `:popover-open` pseudo-class, backdrop, and `@starting-style` for entrance animation:

```css
.ease-popover {
  opacity: 0;
  transform: translateY(-20px) scale(0.95);
  transition: display 0.4s allow-discrete, overlay 0.4s allow-discrete, opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.ease-popover:popover-open {
  opacity: 1;
  transform: translateY(0) scale(1);
}

@starting-style {
  .ease-popover:popover-open {
    opacity: 0;
    transform: translateY(-20px) scale(0.95);
  }
}
```

## 3. Why is it useful?

- **Zero JavaScript Needed**: Eliminates JS state management as the browser natively handles opening, closing, backdrop clicks (light-dismiss), and `Esc` key handling.
- **Top-Layer Promotion**: Native popovers are promoted directly to the browser's top-layer, completely bypassing parent container `overflow: hidden` restrictions and eliminating `z-index` stacking context issues.
- **Pure CSS Entry & Exit Transitions**: Utilizing `@starting-style` alongside `allow-discrete` enables smooth fade-in and fade-out animations even as elements transition to and from `display: none`.
