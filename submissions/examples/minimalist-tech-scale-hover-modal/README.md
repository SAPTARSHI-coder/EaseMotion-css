# CSS Scale-Hover Modal (Minimalist Tech)

A pure CSS modal component designed for Minimalist Tech Layouts. It features entirely JavaScript-free state management and a dynamic "Scale-Hover" interaction that brings the modal closer to the user when focused.

## Features
- Pure CSS and HTML (Zero JavaScript required for state management or animations).
- **Minimalist Tech Aesthetic**: Clean form layouts, precise borders, subtle structural icons, and a frosted glass backdrop effect (`backdrop-filter: blur()`).
- **Pure CSS State Management**: 
- Utilizes the "Checkbox Hack". A hidden checkbox (`#modal-trigger`) acts as the state controller.
- The trigger button ("Edit Configuration"), the backdrop overlay, and the Cancel/Save/Close buttons are all `<label>` elements linked to this checkbox via the `for="modal-trigger"` attribute.
- When the checkbox is toggled, CSS sibling selectors (`~`) update the opacity and visibility of the modal overlay, revealing it to the user.
- **The Scale-Hover Animation System**: 
- The modal enters with a smooth "Scale-In" animation, transitioning from `scale(0.9)` to `scale(1)` alongside an opacity fade.
- **The Hover Effect**: Once open, hovering anywhere over the `.modal-container` triggers an additional transform scaling it up to `scale(1.02)` and significantly deepening the `box-shadow`. This creates a tactile, physical feel, drawing the interface closer to the user as they interact with the form elements.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the scale entrance and the interactive scale-hover depth effect are completely disabled. The modal safely falls back to a simple, immediate opacity fade.

## Usage
Open `demo.html` in your browser. You will see a mock dashboard. Click the "Edit Configuration" button. The modal will smoothly scale into view. Move your mouse over the modal body to see it gently lift towards you. You can dismiss the modal by clicking Cancel, the top-right X, or anywhere on the blurred background overlay.

## Files
- `demo.html`: The HTML structure for the modal, detailing the crucial checkbox setup for CSS state management, the backdrop overlay, and the mock configuration form.
- `style.css`: The styling, tech design tokens, the checkbox state logic, and the `scale()` transform logic driving both the entrance and the hover-depth effect.
