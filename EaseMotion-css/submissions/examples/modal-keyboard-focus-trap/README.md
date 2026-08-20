# Modal Keyboard Focus Trap Fix

Fixes modal keyboard focus trap to exclude disabled and hidden elements from tab iteration targets.

## Problem
Modal keyboard trap query selectors catch disabled inputs and buttons, locking tab loops on non-interactive components.

## Solution
A focus trap helper that dynamically filters out disabled nodes and hidden elements from tab iteration targets.

## Usage

```html
<div class="ease-modal-overlay" id="modal" role="dialog" aria-modal="true">
  <div class="ease-modal" id="modal-box">
    <input type="text" placeholder="Focusable" />
    <input type="text" placeholder="Skipped" disabled />
    <button onclick="closeModal()">Cancel</button>
    <button disabled>Skipped</button>
    <button onclick="closeModal()">Confirm</button>
  </div>
</div>
```

```js
function trapFocus(element) {
  function getFocusable() {
    return Array.from(element.querySelectorAll(
      'a, button, input, select, textarea, [tabindex]'
    )).filter(el =>
      !el.disabled &&
      !el.hidden &&
      el.style.display !== 'none' &&
      el.tabIndex !== -1
    );
  }
  // Tab key handler loops only through focusable elements
}
```

## Features
- Excludes disabled inputs and buttons from focus loop
- Excludes hidden elements (display:none, hidden attribute)
- Loops focus between first and last focusable elements
- Shift+Tab reverse navigation supported
- Closes on Escape key and overlay click
- Smooth open/close animation