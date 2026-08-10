# User-Select None Utility

Introduces the text selection suppression utility token (`.ease-user-select-none`) under issue #15145.

## Functional Mechanics

- **The Problem:** Rapidly clicking custom UI elements, tabs, accordions, or slider buttons can cause the browser to trigger text-highlight blocks across the element contents. This breaks visual immersion and mimics clunky legacy web designs.
- **The Solution:** Locks text selection layers without disabling component event listeners. The `.ease-user-select-none` class utilizes vendor-prefixed configurations to fully suppress text-dragging targets over graphical layouts, providing crisp, app-like micro-interactions.

## Usage Layout Structure
```html
<div class="ease-user-select-none">
  </div>
```

Closes #15145
