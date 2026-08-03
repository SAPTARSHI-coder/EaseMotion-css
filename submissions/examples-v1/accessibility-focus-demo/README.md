# Accessibility Focus & ARIA Demo

This submission demonstrates best practices for making interactive elements accessible in EaseMotion CSS projects.

## Key Improvements
- **ARIA Labels**: Added descriptive `aria-label` attributes to interactive elements, allowing screen readers to communicate the purpose of buttons and cards to visually impaired users.
- **Keyboard Navigation**: Added `tabindex="0"` to card elements, ensuring they are reachable via keyboard-only navigation.
- **Focus Indicators**: Implemented `:focus-visible` styles to provide clear, high-contrast visual feedback when an element is focused, complying with WCAG guidelines.

## How to Test
1. Open `demo.html` in your browser.
2. Use the **Tab** key to navigate through the button and card.
3. Observe the high-contrast focus ring around the elements.