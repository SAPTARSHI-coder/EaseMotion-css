# Input Success Check (`ease-input-success-check`)

A satisfying form feedback component where a green checkmark bounces into view inside an input field when validation passes. Built for the EaseMotion-css framework.

## 🚀 Features

- **Satisfying "Pop" Animation**: Utilizes a custom `cubic-bezier` timing function so the checkmark slightly overshoots its scale before settling, creating a bouncy, springy pop effect.
- **Pure CSS Adjacent Sibling Trigger**: Relies on the `+` CSS selector. You only need to apply the `.ease-valid` class to the `<input>`, and the CSS automatically targets and animates the adjacent checkmark SVG.
- **Simultaneous Color Shift**: The input border smoothly transitions to green at the exact same time the icon appears.
- **Unobtrusive**: Uses `pointer-events: none` on the icon so it doesn't block user clicks inside the input area.

## 🛠️ Usage

Wrap your `<input>` and the checkmark SVG inside a `.ease-input-wrapper` container. The SVG must be placed immediately *after* the input element.

```html
<div class="ease-input-wrapper">
  <input type="text" class="ease-input" placeholder="Enter username..." />
  
  <svg class="ease-success-check" viewBox="0 0 24 24">
    <!-- SVG Path -->
  </svg>
</div>
