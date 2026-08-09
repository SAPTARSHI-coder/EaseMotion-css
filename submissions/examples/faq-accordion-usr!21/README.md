# FAQ Accordion Submission

## 1. What does this do?
It provides an interactive, accessible FAQ accordion component with smooth expand/collapse animations, perfect for documentation, help centers, and product pages.

## 2. How is it used?
Wrap each question-answer pair in the `.faq-item` class. The component uses semantic HTML with `<button>` elements for accessibility and includes ARIA attributes (`aria-expanded`) for screen readers.

## 3. Why is it useful?
- FAQ accordions are essential for documentation, help centers, and product pages.
- Demonstrates smooth expand/collapse animations with proper accessibility.
- Only one item can be open at a time (accordion behavior).
- Fully keyboard accessible with proper focus management.
- Includes `prefers-reduced-motion` support for accessibility.
- Maintainer can easily standardize this as `.ease-faq-[YOUR_INITIALS]` in the core library.