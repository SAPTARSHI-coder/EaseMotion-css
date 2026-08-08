# Pure CSS Particle Floating Action Button

## Description
A polished, highly tactile pure CSS Floating Action Button (FAB) featuring a delightful **Particle Burst** interaction animation. Designed specifically for **Finance Dashboard** interfaces, it operates with absolutely **zero JavaScript**. State management (toggling the FAB menu and triggering the particle explosion) is handled entirely by the robust HTML Checkbox Hack (`<input type="checkbox">` paired with `<label>`). When clicked, the primary icon smoothly rotates into a dismiss state while 6 distinct CSS particles explode outward radially via custom `@keyframes`. It is fully responsive, keyboard accessible, and intelligently switches to dark mode based on system preferences.

## Customization via CSS Properties

The physics of the particle burst and brand colors can be easily fine-tuned by overriding the following CSS variables inside the `:root` scope or on the `.fab-container`:

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--fab-transition-duration` | `0.3s` | The speed at which the FAB icon rotates and the menu expands. |
| `--particle-duration` | `0.6s` | The lifetime of the exploding particles. |
| `--particle-color` | `var(--finance-accent)` | The color of the particles. Defaults to the emerald green accent color. |
| `--fab-bg` | `var(--finance-accent)` | The default background color of the FAB. |

## Usage Guide

To implement this Particle FAB in your project:
1. Ensure your primary FAB trigger is a `<label>` element with a `for="fab-trigger"` attribute.
2. Place the hidden `<input type="checkbox" id="fab-trigger">` directly preceding the trigger `<label>` inside the `.fab-container`.
3. Embed the particle HTML elements (`<div class="particle-emitter emitter-X"></div>`) directly inside the `<label>`.
4. The `.fab-trigger-input:checked ~ .fab-button .emitter-X` CSS selectors are responsible for triggering the one-shot `@keyframes` animations when the user clicks the FAB.
5. The expandable secondary action menu (`.fab-menu`) is also revealed conditionally using CSS sibling selectors based on the checkbox state.

*See `demo.html` for the complete, accessible markup structure.*

## Accessibility
Despite being purely CSS driven, semantic accessibility is meticulously maintained:
- The hidden checkbox allows robust semantic linking via `<label>` tags.
- The trigger acts visually like a button, so `role="button"` and `aria-label` attributes are included to announce its function correctly to screen readers.
- `tabindex="0"` and inline `onkeydown` handlers are provided on the `<label>` trigger to ensure keyboard navigation (Tab, Enter, Space) functions identically to native `<button>` elements.
