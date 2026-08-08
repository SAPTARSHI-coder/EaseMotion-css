# Notification Toasts Submission

## 1. What does this do?
It provides a set of modern, accessible notification toast components (Success, Warning, Error) that slide in smoothly using EaseMotion CSS utilities.

## 2. How is it used?
Combine the base `.toast` class with a variant (`.toast-success`, `.toast-warning`, `.toast-error`) and EaseMotion animation classes like `ease-slide-in-right` and `ease-hover-scale`.

## 3. Why is it useful?
- Toasts are a fundamental UI pattern for user feedback.
- Demonstrates composition of EaseMotion entrance animations with custom styled components.
- Fully accessible: respects `prefers-reduced-motion` to prevent unwanted movement for sensitive users.
- Maintainer can easily standardize this as `.ease-toast-[YOUR_INITIALS]` in the core library.