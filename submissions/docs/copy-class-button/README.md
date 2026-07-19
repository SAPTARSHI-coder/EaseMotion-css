# Copy Class Name Button for Demo Cards

## Description
This component provides a small Copy button/icon next to each CSS class name displayed in the demo cards. Clicking the button copies the corresponding class name to the user's clipboard and provides visual feedback by temporarily changing the icon to a checkmark (✓).

## Why is this useful for EaseMotion CSS?
EaseMotion CSS is designed to provide a smooth and developer-friendly experience. Developers frequently copy animation class names from the demo page into their projects. A one-click copy feature:
- Improves developer productivity.
- Reduces manual selection errors.
- Enhances the overall user experience.
- Makes the animation gallery more interactive and polished.

## How to use
Add the `copy-btn` styles to the documentation stylesheet (`docs.css`), include the button element next to the class name, and integrate the `copyClassName` JavaScript function.

```html
<span class="tag">
  ease-fade-up
  <button class="copy-btn" onclick="copyClassName('ease-fade-up', this)" aria-label="Copy class name">📋</button>
</span>
```
