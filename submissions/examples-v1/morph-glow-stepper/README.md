# CSS Morph-Glow Stepper

A striking, modern stepper component that transitions its shape from a circle to a rounded square while emitting a neon glow on hover. Designed with pure CSS for responsive dashboard layouts.

## 🚀 Features

- **Pure CSS/HTML:** Completely JavaScript-free. Visual states are managed natively using `.completed`, `.active`, and `.pending` classes.
- **Morphing Animation:** Uses `border-radius` transitions to smoothly morph the step indicator's shape upon hover, coupled with a dynamic `box-shadow` glow.
- **Responsive Layout:** Automatically switches from a horizontal progress flow on desktop to a vertical timeline on mobile viewports (< 768px) utilizing CSS Flexbox.
- **Accessible Design:** Honors `@media (prefers-reduced-motion: reduce)` by disabling the shape-morphing and scaling transforms, retaining only the color and static glow changes for users with motion sensitivities.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and the styles from `style.css` into your project. Set the progress state by applying the `.active`, `.completed`, or `.pending` class to the `.em-step` wrapper elements.

### CSS Custom Properties
Customize the stepper colors and glow hues easily by modifying the variables in the `:root` selector:

```css
:root {
    --em-step-completed: #14b8a6; /* Completed color */
    --em-step-active: #a855f7;    /* Active color */
    --em-step-pending: #334155;   /* Pending color / track */
}
