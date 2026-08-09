# Animated Modal Dialog Submission

## 1. What does this do?
It provides a modern, accessible modal dialog component with three different entrance animations (fade-in, scale-in, slide-up), perfect for confirmations, forms, and detailed views.

## 2. How is it used?
Wrap your modal content in `.modal-overlay` and `.modal-content` classes. Apply EaseMotion animation classes like `ease-fade-in`, `ease-scale-in`, or `ease-slide-up` to the `.modal-content` element. Use JavaScript to toggle the `.active` class on the overlay.

## 3. Why is it useful?
- Modal dialogs are essential UI components for confirmations, forms, and notifications.
- Demonstrates three different entrance animations from EaseMotion CSS.
- Fully accessible: closes with Escape key, clicking outside, or the close button.
- Prevents background scrolling when modal is open.
- Includes `prefers-reduced-motion` support for accessibility.
- Mobile-responsive design.
- Maintainer can easily standardize this as `.ease-modal-[YOUR_INITIALS]` in the core library.