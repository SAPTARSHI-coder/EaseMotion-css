# Animated Accordion (ease-accordion-nishu)

## What does this do?
A fully responsive, accessible accordion component that uses modern CSS Grid features to smoothly animate content height dynamically without JavaScript height calculations.

## How is it used?
```html
<div class="accordion-item">
    <button class="accordion-header" aria-expanded="false">
        <span>Header Title</span>
        <!-- Icon -->
    </button>
    <div class="accordion-content">
        <div class="accordion-content-inner">
            <p>Your content here...</p>
        </div>
    </div>
</div>
```
Toggle the `.active` class on the `.accordion-item` container to trigger the expand/collapse animation.

## Why is it useful?
Accordions are essential UI elements, but animating them smoothly in pure CSS historically required hardcoding `max-height` or relying on JavaScript. This submission utilizes the modern `grid-template-rows: 0fr` to `1fr` technique, delivering buttery-smooth motion that perfectly aligns with EaseMotion's philosophy of lightweight, modern CSS animations.
