# Interactive Off-Canvas Cart Drawer

## 1. What does this do?

This is a premium, off-canvas shopping cart drawer example that features smooth slide transitions, subtotal calculations, and slide-out exit animations on individual cart item cards before they are removed from the DOM.

## 2. How is it used?

Configure the off-canvas drawer containers and item elements, applying the layout classes and state modifiers to control transitions:

```html
<!-- Floating Trigger Button -->
<button
  type="button"
  id="cart-trigger"
  aria-haspopup="dialog"
  aria-controls="cart-drawer-container"
>
  Cart (3)
</button>

<!-- Overlay Backdrop -->
<div id="cart-overlay-wrapper" class="cart-overlay">
  <!-- Drawer Box -->
  <div
    id="cart-drawer-container"
    class="cart-drawer"
    role="dialog"
    aria-modal="true"
    aria-labelledby="cart-heading"
  >
    <header class="cart-header">
      <h2 id="cart-heading" class="cart-title">Your Cart</h2>
      <button type="button" id="cart-close" aria-label="Close cart">×</button>
    </header>

    <!-- Items list -->
    <div id="cart-items-body" class="cart-body">
      <div class="cart-item">
        <!-- Item Details -->
        <button class="cart-item-remove-btn">Remove</button>
      </div>
    </div>
  </div>
</div>
```

To control animations:

- Add `.is-opening` class to trigger the sliding entrance animation (`drawer-slide-in`).
- Use `.is-open` to hold the open state.
- Add `.is-closing` to trigger the exit transition (`drawer-slide-out`) before hiding.
- Add `.is-removing` to a `.cart-item` to animate it out (`item-slide-out-fade`) before deletion.

## 3. Why is it useful?

It fits EaseMotion CSS's philosophy by demonstrating how to compose multiple complex UI patterns (sidebars, card structures, buttons, and badges) into a responsive digital commerce application without writing styling boilerplate, showcasing advanced CSS exit-animation triggers natively.

---

## Features

- **Off-Canvas Slide Panel:** A modern, slide-from-right drawer with smooth open/close animations.
- **Exit Animation Lifecycle:** Cart cards animate out (`transform` slide + height/padding collapse) before they are destroyed from the document hierarchy, allowing surrounding list items to animate into their new positions smoothly.
- **Dynamic Calculations:** Instant cart subtotal changes and item count updates.
- **Empty Cart State:** Seamlessly shifts to a beautiful placeholders screen when all items are cleared.
- **Glassmorphism Design:** Subtle transparency, white borders, and heavy blur backdrops optimized for both light and dark systems.

## Accessibility

- **Keyboard Trap:** Tab routing is restricted to drawer components when active.
- **Escape Binds:** Pressing `Escape` immediately triggers closing sequences.
- **Outside Click Closures:** Users can dismiss the drawer by clicking on the overlay background.
- **Aria Standards:** Includes `role="dialog"`, `aria-modal="true"`, and clear labelling.
- **Reduced Motion:** Defaults to instant state swaps (using `0.01ms` durations) when motion reduction preference is detected.

## Responsive Behaviour

- Fully responsive.
- Desktop layouts limit the drawer panel to `440px`.
- Mobile devices adapt the panel to `100%` viewport width, acting as a clean full-screen sheet.
