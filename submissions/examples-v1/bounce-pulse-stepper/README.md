# CSS Bounce-Pulse Stepper

An interactive, responsive stepper component featuring a dynamic keyframe bounce on hover and an eye-catching continuous pulse for the active step. Built purely with CSS and HTML.

## 🚀 Features

- **Pure CSS/HTML:** Zero JavaScript dependencies. Uses classes (`.completed`, `.active`, `.pending`) to manage visual states natively.
- **Responsive Layout:** Elegantly switches from a horizontal progress flow on desktop to a vertical timeline on mobile viewports (< 768px) using CSS Flexbox.
- **Bounce & Pulse Animations:** Features an `em-bounce` custom keyframe animation for a playful hover state, and an `em-pulse` box-shadow animation to clearly highlight the `.active` step.
- **Accessible Design:** Honors `@media (prefers-reduced-motion: reduce)` by removing the infinite pulse and bounce transforms, replacing them with static state indicators.

## 🛠️ Usage

Grab the HTML structure from `demo.html` and the corresponding styles from `style.css`. Define the state of each step by applying the `.active`, `.completed`, or `.pending` class to the `.em-step` elements.

### CSS Custom Properties
Customize the stepper colors by adjusting the variables in the `:root` pseudo-class:

```css
:root {
    --em-step-completed: #10b981; 
    --em-step-active: #ec4899;    
    --em-step-pending: #475569;   
}
