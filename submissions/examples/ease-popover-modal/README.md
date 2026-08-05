# ease-popover-modal

A pure HTML and CSS modal component leveraging the native HTML Popover API and CSS `@starting-style` for smooth entry and exit transitions.

---

### 1. What does this do?
`ease-popover-modal` provides an accessible, fully-styled modal dialog without requiring any JavaScript. By utilizing the native HTML `popover` attribute together with CSS `@starting-style` and `transition-behavior: allow-discrete` (via `display 0.4s allow-discrete`), it allows browsers to natively interpolate styles like `opacity` and `transform` when an element transitions between `display: none` and `display: block`.

---

### 2. How is it used?
Link `style.css` in your HTML, create a button with `popovertarget` matching the ID of your modal container, and add the `popover` attribute and `.ease-popover-modal` class to the modal element. To close the modal, use another element with `popovertarget` and `popovertargetaction="hide"`.

```html
<link rel="stylesheet" href="style.css">

<!-- Trigger Button -->
<button popovertarget="my-modal" class="ease-btn">Open Modal</button>

<!-- Modal Container -->
<div id="my-modal" popover class="ease-popover-modal">
  <h2>Modal Title</h2>
  <p>Modal content goes here...</p>
  <button popovertarget="my-modal" popovertargetaction="hide">Close</button>
</div>
```

---

### 3. Why is it useful?
- **Zero JavaScript Needed**: Completely removes the need for JS state management, `setTimeout` hacks, or third-party modal libraries just to handle entry/exit animations for `display: none` elements.
- **Native Browser Animation Engine**: `@starting-style` allows CSS to define the initial state of an element when it is first rendered into the top layer, letting the browser perform smooth hardware-accelerated transitions.
- **Built-in Accessibility & Focus Management**: The native Popover API automatically handles light-dismiss (clicking outside or pressing `Escape`), focus trapping, keyboard navigation, and ARIA attributes out of the box.
