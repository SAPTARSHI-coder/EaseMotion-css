# CSS Zoom-Out Tabs for Accessible Web

A highly accessible, pure CSS tabs component utilizing a gentle "Zoom-Out" interaction transition. Designed strictly with web accessibility principles in mind, ensuring usability for everyone while retaining modern motion aesthetics.

## Features

- **Gentle Zoom-Out Transition**: A subtle `scale` and `opacity` transition that clearly communicates state changes without triggering motion sickness. Fully compliant with WCAG animation guidelines.
- **Pure CSS State Logic**: Driven entirely by visually hidden radio buttons (`.sr-only`) and the `:has()` pseudo-class. No JavaScript is required.
- **WCAG Compliant Aesthetics**:
  - Uses the **Atkinson Hyperlegible** typeface designed specifically for optimal readability.
  - Generous touch targets (`48px` minimum height).
  - Extremely high contrast color palette.
  - Highly visible, dual-color focus rings (`4px` outline with bright background highlight) mapped perfectly to native keyboard navigation.
- **Accessible DOM Structure**: Uses proper `role="tablist"`, `role="tab"`, and `role="tabpanel"` attributes, combined with `aria-live="polite"` to respectfully announce state changes to screen readers.
- **Prefers-Reduced-Motion**: Automatically disables all transforms and opacity fading if the user has requested reduced motion at the OS level.
- **Mobile Responsive**: The horizontal sliding indicator gracefully degrades into a stacked vertical list on mobile viewports without any visual breakage.

## Custom Parameters (CSS Variables)

You can easily adjust the component's timing and strict accessibility color tokens via custom properties in `.ease-zoom-out-tabs`:

```css
.ease-zoom-out-tabs {
    --zoom-duration: 0.4s;
    --zoom-easing: cubic-bezier(0.25, 0.8, 0.25, 1);
    --zoom-scale-out: 0.96; /* Subtle shrink effect */
    
    /* A11y Colors */
    --a11y-primary: #0044cc;
    --a11y-primary-hover: #003399;
    --a11y-focus: #ffcc00;
    --a11y-bg: #ffffff;
    --a11y-text: #1a1a1a;
    --a11y-border: #cccccc;
}
```

## Structure
- `demo.html` - The showcase structure using the Zoom-Out Tabs in an Accessibility Component Center format.
- `style.css` - Contains the logic for the state handling, subtle animations, typography, grid system, and rigorous `:focus-visible` accessibility fallbacks.
