# Fix: Focus Ring / Focus Visible Accessibility Utilities

## Description
This PR introduces the `.ease-focus-ring` utility class to improve keyboard accessibility by providing a clear, high-contrast focus ring specifically when users navigate via keyboard.

## How it works
- Uses the `:focus-visible` pseudo-class to ensure the outline only appears for keyboard users (not mouse clicks).
- Applies an `outline`, `outline-offset`, and a complementary `box-shadow`.
