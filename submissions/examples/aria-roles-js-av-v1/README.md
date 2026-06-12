# ARIA Roles & Keyboard Traps Refactor

## What does this do?

Proposes critical structural enhancements to the core JavaScript files (`core/modal.js` and `core/reveal.js`) to fully support screen readers via dynamic ARIA attribute injection and robust focus trapping.

## How is it used?

Developers write HTML identically to before. The new `modal.js` will dynamically inject `role="dialog"`, `aria-modal="true"`, and `aria-labelledby` when a modal opens, and trap keyboard focus perfectly inside the modal bounds. The `reveal.js` script will handle `aria-hidden` attributes to ensure off-screen animating elements don't confuse screen readers.

## Why is it useful?

Currently, the JavaScript powering the framework’s core interactive components completely lacks accessibility context. When a modal opens, screen readers have no semantic indication that it's a dialog, meaning they can accidentally read content hidden behind the overlay or lose focus. This submission fixes the fundamental JS logic, ensuring strict ADA and WCAG compliance across all projects using the library, without forcing individual developers to manually write tedious ARIA tags.
