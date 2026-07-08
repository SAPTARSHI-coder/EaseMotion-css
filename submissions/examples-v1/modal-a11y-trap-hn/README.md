# Modal Keyboard Accessibility & Close Fix

## What does this do?
This submission fixes two accessibility and functional bugs in the modal component's JavaScript logic:
1. Enables the **Escape key** to close the modal and activates the **Tab focus trap** even when the modal is opened programmatically using `.classList.add('is-active')` (rather than just through anchor targets `#`).
2. Ensures the focus trap **skips disabled buttons, links, or inputs** when tabbing, preventing the keyboard focus from getting stuck.

## How is it used?
You can open a modal using standard URL targets:

```html
<a href="#my-modal">Open Modal</a>

<div id="my-modal" class="ease-modal-overlay">
  <div class="ease-modal">
    ...
  </div>
</div>
```

Or programmatically open it using JS:

```javascript
document.querySelector('.ease-modal-overlay').classList.add('is-active');
```

The updated keyboard trap and Escape listener will automatically find the active modal, skip disabled elements, and trap focus properly.

## Why is it useful?
It brings the modal script into compliance with WCAG 2.1 Level AA accessibility guidelines. Previously, a modal opened via a standard JavaScript button click was completely inaccessible to keyboard and screen-reader users, and disabled buttons inside a modal broke keyboard tab navigation.
