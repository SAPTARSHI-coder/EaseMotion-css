# Responsive Modal

## What It Does
The Responsive Modal is a pure CSS overlay dialogue system that interrupts the user's current workflow to prompt them for important information or decisions. It uses the CSS `:target` pseudo-class to handle the open/close state without requiring any JavaScript.

## How to Use
Include `components/modals.css`. To trigger the modal, create an anchor link that points to the modal's `id`.

```html
<!-- Trigger -->
<a href="#my-modal" class="btn">Open Modal</a>

<!-- Modal Structure -->
<div id="my-modal" class="ease-modal-overlay">
    <div class="ease-modal">
        <header class="ease-modal-header">
            <h2>Modal Title</h2>
            <a href="#" class="ease-modal-close" aria-label="Close modal">&times;</a>
        </header>
        <div class="ease-modal-body">
            <p>Your content here.</p>
        </div>
        <footer class="ease-modal-footer">
            <a href="#" class="btn btn-secondary">Close</a>
        </footer>
    </div>
</div>
```

Modifiers available:
- **Animations:** `.ease-modal-slide`, `.ease-modal-fade`, `.ease-modal-zoom`
- **Sizes:** `.ease-modal-sm`, `.ease-modal-lg`

## Example
The included `demo.html` demonstrates:
1. **Default Modal:** The standard zoom + fade entrance.
2. **Animation Variants:** Shows the slide up and fade entrance modifiers.
3. **Sizing Variants:** Shows how the `.ease-modal-sm` and `.ease-modal-lg` modifiers adjust the maximum width constraint for different types of content (like a small confirmation dialogue vs. a large terms-of-service block).

## Why It Is Useful
Modals are essential for forcing the user to focus on a specific task or message without navigating away from the current page. Because this implementation is pure CSS, it guarantees extremely fast performance, zero JavaScript overhead, and works even if JavaScript fails to load or is disabled.

## Accessibility
This component includes several accessibility considerations:
- **Keyboard Navigation:** The trigger links and close buttons use anchor tags (`<a>`) which are inherently focusable. Focus rings (`focus-visible`) are styled to ensure keyboard users can easily see what they are targeting.
- **Aria Labels:** The close button uses `aria-label="Close modal"` to ensure screen readers understand its function, since the visual icon is just a multiplication symbol (`&times;`).
- **Reduced Motion:** Fully respects `@media (prefers-reduced-motion: reduce)` by disabling the zoom, slide, and fade entrance animations for users who prefer static transitions.

## Responsive Behavior
The modal is designed to adapt to smaller viewports seamlessly:
- Uses percentage-based widths (`width: 90%`) combined with `max-width` constraints to ensure it never overflows the horizontal boundaries of mobile devices.
- Uses `max-height: 90vh` and `overflow-y: auto` on the body to ensure long content remains scrollable without breaking the screen layout.
- The footer action buttons automatically stack vertically (`flex-direction: column-reverse`) on viewports under 640px to maximize the touch target area for mobile users.
