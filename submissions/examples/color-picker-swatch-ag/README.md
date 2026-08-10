# Color Picker Swatch

1. **What does this do?**  
   Provides a responsive grid of selectable color swatches with micro-animated selection feedback and SVG checkmark indicators.

2. **How is it used?**  
   Apply `.swatch-grid`, `.swatch-input`, and `.swatch-label` to native radio button elements:

   ```html
   <input
     type="radio"
     id="color-indigo"
     name="color-swatch"
     value="indigo"
     class="swatch-input"
     checked
   />
   <label
     for="color-indigo"
     class="swatch-label"
     style="--swatch-bg: #6366f1; --swatch-glow: rgba(99, 102, 241, 0.45);"
     aria-label="Indigo color"
   >
     <svg
       class="swatch-check"
       viewBox="0 0 24 24"
       fill="none"
       stroke="currentColor"
       stroke-width="3"
       stroke-linecap="round"
       stroke-linejoin="round"
       aria-hidden="true"
     >
       <polyline points="20 6 9 17 4 12"></polyline>
     </svg>
   </label>
   ```

3. **Why is it useful?**  
   It delivers a fluid, accessible, 100% pure CSS color selection interaction with native keyboard navigation and zero JavaScript dependencies.

---

## Features

- **Pure HTML/CSS**: Zero JavaScript required.
- **Micro-Animations**: Smooth scale spring transition and SVG checkmark pop reveal on selection.
- **Accessibility**: Keyboard navigable (`:focus-visible`), screen reader friendly (`aria-label`, `<fieldset>`, `<legend>`), and non-color-dependent visual selection state.
- **Responsive**: Adapts cleanly across mobile, tablet, and desktop viewports.
- **Reduced Motion**: Full support for `prefers-reduced-motion: reduce`.
