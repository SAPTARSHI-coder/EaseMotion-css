# Animated Modal with Gradient Styling

A pure CSS, JavaScript-free animated modal component featuring a continuous gradient border effect. Built for Issue #78738.

## Features
- **Pure CSS (No JS):** Utilizes the `:target` pseudo-class for opening and closing state management without any JavaScript dependencies.
- **Animated Gradient:** Uses a background gradient that spans 300% size and shifts continuously using `@keyframes` to create a glowing gradient border effect.
- **Spring Entrance:** Employs a custom `cubic-bezier` timing function to make the modal scale and slide in with a natural "spring" bounce.
- **Fully Responsive:** Adapts to mobile screens by ensuring a maximum width and stacking footer buttons vertically on small viewports.
- **Accessible:** Semantic HTML, keyboard navigable (via `focus-visible`), and compatible with screen readers.
- **Motion Safe:** Fully respects `@media (prefers-reduced-motion: reduce)` by disabling the gradient shifting and spring entrance for users who prefer static transitions.

## Folder Structure
- `demo.html` - The showcase layout and HTML structure.
- `style.css` - The core styling, gradient animation, and `:target` logic.
- `README.md` - Documentation.

## How to Use

### 1. HTML Structure
The modal uses the CSS `:target` trick. To open the modal, create an anchor tag `<a>` that points to the modal's `id` (e.g. `href="#gradient-modal"`). To close the modal, link to `#` or another non-modal anchor.

```html
<!-- Trigger -->
<a href="#gradient-modal" class="btn btn-open">Open Modal</a>

<!-- Modal -->
<div id="gradient-modal" class="modal-overlay">
    <a href="#" class="modal-overlay-close" tabindex="-1" aria-hidden="true"></a>
    
    <div class="modal-content" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <a href="#" class="modal-close" aria-label="Close modal">&times;</a>
        <div class="modal-inner">
            <h2 id="modal-title">Modal Title</h2>
            <div class="modal-body">Content goes here.</div>
        </div>
    </div>
</div>
```

### 2. Include CSS
Link the provided `style.css` in your document head.

## Accessibility Notes
- **Focus Rings:** Explicit `:focus-visible` styling is included on all interactive elements.
- **Aria Attributes:** `role="dialog"`, `aria-modal="true"`, and `aria-labelledby` ensure screen readers properly contextualize the overlay.
- **Background Close:** The invisible `.modal-overlay-close` link covers the backdrop, meaning clicking outside the modal box automatically closes it without requiring JavaScript event listeners.
