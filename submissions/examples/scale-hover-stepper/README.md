# CSS Scale-Hover Stepper

A sleek, responsive stepper component that utilizes a satisfying, spring-like scale effect on hover. Built purely with CSS and HTML for modern dashboard layouts.

## 🚀 Features

- **Pure CSS/HTML:** No JavaScript required. Uses semantic classes (`.completed`, `.active`, `.pending`) to handle visual states.
- **Responsive Grid System:** Adapts from a horizontal process flow on desktop to a vertical timeline on mobile viewports seamlessly using Flexbox.
- **Spring Scale Animation:** Uses a custom `cubic-bezier` timing function to create a natural, snappy scale effect when hovering over step indicators.
- **Accessible Design:** Implements `@media (prefers-reduced-motion: reduce)` to disable the scale transformations for users with motion sensitivities while retaining state colors.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and the corresponding styles from `style.css`. Control the state of each step by adding the appropriate class (`.active`, `.completed`, `.pending`) to the `.em-step` wrapper.

### CSS Custom Properties
You can customize the stepper colors by updating the variables in the `:root` selector:

```css
:root {
    --em-step-completed: #10b981; 
    --em-step-active: #8b5cf6;    
    --em-step-pending: #475569;   
}
