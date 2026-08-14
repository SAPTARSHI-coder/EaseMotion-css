# Floating Label Form Inputs Submission

## 1. What does this do?
It provides modern, animated floating label form inputs with smooth transitions, icons, and validation states. Perfect for registration forms, contact forms, and any user input scenarios.

## 2. How is it used?
Wrap each input in an `.input-group` container. Use the `.floating-input` class on the input element and `.floating-label` for the label. The label automatically animates when the input is focused or has a value (using `:placeholder-shown` pseudo-class).

## 3. Why is it useful?
- Floating labels are a modern UX pattern (Material Design style)
- Smooth animations enhance user experience
- Includes icons for visual clarity
- Built-in validation states (valid/invalid)
- Works with text inputs, email, password, phone, and textarea
- Fully accessible with proper label associations
- Includes `prefers-reduced-motion` support for accessibility
- Mobile-responsive design
- Maintainer can easily standardize this as `.ease-floating-input-[YOUR_INITIALS]` in the core library.