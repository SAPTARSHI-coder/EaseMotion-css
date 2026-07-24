# CSS Shimmer-Sweep Stepper

A responsive, pure CSS stepper component ideal for dashboard onboarding or multi-step forms. It features a modern layout that adapts from horizontal on desktop to vertical on mobile, complete with a clean shimmer-sweep animation on hover.

## 🚀 Features

- **Pure CSS/HTML:** No JavaScript required. State styling is handled cleanly via CSS classes (`.completed`, `.active`, `.pending`).
- **Responsive Layout:** Automatically converts from a horizontal stepper to a vertical timeline on smaller viewports using Flexbox.
- **Shimmer-Sweep Animation:** Uses an animated `linear-gradient` with `skewX` to create a sleek light-sweep effect over the step indicators.
- **Accessible Design:** Fully supports `@media (prefers-reduced-motion: reduce)` by disabling scaling and shimmer animations for users with motion sensitivities.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and the corresponding styles from `style.css`. You can control the visual state of each step by adding `.active` or `.completed` to the `.em-step` wrapper.

### CSS Custom Properties
Customize the stepper colors easily by updating the variables in the `:root`:

```css
:root {
    --em-step-completed: #10b981; /* Completed step color */
    --em-step-active: #3b82f6;    /* Active step color */
    --em-step-pending: #334155;   /* Pending step color / connecting line */
}
